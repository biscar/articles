module Articles
  class Retriever

    def initialize(article_class: Ar::Article, article_type_class: Ar::ArticleType, story_class: Ar::Story)
      @article_class = article_class
      @article_type_class = article_type_class
      @story_class = story_class
    end

    def retrieve_json
      { articles: articles_data, article_types: article_types_data, stories: stories_data}
    end

    private

    attr_reader :article_class, :article_type_class, :story_class

    def articles_data
      article_class.all.map do |article|
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
