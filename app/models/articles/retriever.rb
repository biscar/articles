module Articles
  class Retriever

    def initialize(article_class: Ar::Article, article_type_class: Ar::ArticleType)
      @article_class = article_class
      @article_type_class = article_type_class
    end

    def retrieve_json
      { articles: articles_data, article_types: article_types_data }
    end

    private

    attr_reader :article_class, :article_type_class

    def articles_data
      article_class.all.map do |article|
        {
          id: article.id,
          story: article.story&.name,
          name: article.name,
          text: article.text,
          type: article.article_type&.name
        }
      end
    end

    def article_types_data
      article_type_class.pluck(:lookup_code, :name).to_h
    end
  end
end
