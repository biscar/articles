module Articles
  class Retriever

    def initialize(params = {}, article_class: Ar::Article, article_type_class: Ar::ArticleType,
                   story_class: Ar::Story, finder_class: Articles::Finder)
      @article_class = article_class
      @article_type_class = article_type_class
      @story_class = story_class
      @finder_class = finder_class
      @search_text = params[:search]
      @search_field = params[:search_field]
    end

    def retrieve_json
      articles = article_class.all

      finder = finder_class.new(articles)
      articles = finder.add_search_conditions(search_field, search_text)

      { articles: articles_data(articles), article_types: article_types_data, stories: stories_data}
    end

    private

    attr_reader :article_class, :article_type_class, :story_class, :search_text, :search_field, :finder_class

    def articles_data(articles)
      articles.map do |article|
        {
          id: article.id,
          story_id: article.story&.id,
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
