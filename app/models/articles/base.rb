module Articles
  class Base
    def initialize(params = {}, article_class: Ar::Article, story_class: Ar::Story, article_type_class: Ar::ArticleType)
      @article_class = article_class
      @article_type_class = article_type_class
      @story_class = story_class
      @article = nil
      post_initialize(params)
    end

    def post_initialize(params = {}) end

    private

    attr_reader :article, :article_class, :article_type_class, :story_class

    def article_json(article)
      {
        id: article.id,
        story_id: article.story_id,
        story: article.story&.name,
        name: article.name,
        text: article.text,
        type_code: article.article_type&.lookup_code,
        type: article.article_type&.name
      }.with_indifferent_access
    end
  end
end
