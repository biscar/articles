module Articles
  class Base
    def initialize(params = {}, article_class: Ar::Article)
      @article_class = article_class

      post_initialize(params)
    end

    def post_initialize(params = {}) end

    private

    attr_reader :article_class, :channel_job
  end
end
