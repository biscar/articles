module Articles
  class Base
    def initialize(params = {}, article_class: Ar::Article)
      @article_class = article_class

      post_initialize(params)
    end

    def post_initialize(params = {}) end

    private

    attr_reader :article_class, :channel_job

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
