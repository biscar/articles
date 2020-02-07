module Articles
  class Retriever

    def initialize(params = {}, article_class: Ar::Article, article_type_class: Ar::ArticleType,
                   story_class: Ar::Story, finder_class: Articles::Finder, sorter_class: Articles::Sorter)
      @article_class = article_class
      @article_type_class = article_type_class
      @story_class = story_class
      @finder_class = finder_class
      @search_text = params[:search]
      @search_field = params[:search_field]
      @sort_field = params[:sort_field]
      @sort_value = params[:sort_value]
      @sorter_class = sorter_class
    end

    def retrieve_json
      articles = articles_relation

      finder = finder_class.new(articles)
      articles = finder.add_search_conditions(search_field, search_text)

      sorter = sorter_class.new(articles)
      articles = sorter.add_sort_conditions(sort_field, sort_value)

      { articles: articles_data(articles), article_types: article_types_data, stories: stories_data }
    end

    private

    attr_reader :article_class, :article_type_class, :story_class, :search_text,
                :search_field, :finder_class, :sort_field, :sort_value, :sorter_class

    def articles_relation
      article_class
        .joins(:story)
        .joins(:article_type)
    end

    def articles_data(articles)
      articles.map do |article|
        {
          id: article.id,
          story_id: article.story_id,
          name: article.name,
          text: article.text,
          type_code: article.article_type&.lookup_code
        }
      end
    end

    def article_types_data
      article_type_class.pluck(:lookup_code, :name).to_h
    end

    def stories_data
      story_class.pluck(:id, :name).to_h
    end
  end
end
