module Articles
  class Retriever
    def initialize(params = {}, article_class: Ar::Article, article_type_class: Ar::ArticleType,
                   story_class: Ar::Story, finder_class: Articles::Finder, sorter_class: Articles::Sorter,
                   grouper_class: Articles::Grouper)
      @article_class = article_class
      @article_type_class = article_type_class
      @story_class = story_class
      @finder_class = finder_class
      @sorter_class = sorter_class
      @grouper_class = grouper_class
      @search_text = params[:search]
      @search_field = params[:search_field]
      @sort_field = params[:sort_field]
      @sort_direction = params[:sort_direction]
      @group_field = params[:group_field]
    end

    def retrieve_json
      articles = articles_relation
      articles = finder_class.new(articles).add_search_conditions(search_field, search_text)
      articles_json = articles_data(articles)

      articles = grouper_class.new(articles_json).group_by(group_field)
      articles = sorter_class.new(articles).add_sort_conditions(sort_field, sort_direction)

      { articles: articles, article_types: article_types_data, stories: stories_data }
    end

    private

    attr_reader :article_class, :article_type_class, :story_class, :search_text,
                :search_field, :finder_class, :sort_field, :sort_direction, :sorter_class, :grouper_class, :group_field

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
          story: article.story&.name,
          name: article.name,
          text: article.text,
          type_code: article.article_type&.lookup_code,
          type: article.article_type&.name,
          created_at: article.created_at
        }.with_indifferent_access
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
