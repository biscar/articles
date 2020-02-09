module Articles
  class Creator < Articles::Base
    def post_initialize(params, channel_job: CreateArticleJob, article_type_class: Ar::ArticleType)
      @article_class = article_class
      @article_type_class = article_type_class
      @name = params[:name]
      @text = params[:text]
      @type_code = params[:type_code]
      @story_id = params[:story_id]
      @channel_job = channel_job
    end

    def create
      article = article_class.new
      article.story_id = story_id
      article.name = name
      article.text = text
      article.article_type = article_type_class.find_by(lookup_code: type_code)
      article.save!

      channel_job.perform_later(article_json(article))
    end

    attr_reader :name, :text, :type_code, :story_id, :article_type_class
  end
end
