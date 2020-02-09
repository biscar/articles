module Articles
  class Updater < Articles::Base
    def post_initialize(params, channel_job: UpdateArticleJob, article_type_class: Ar::ArticleType)
      @id = params[:id]
      @channel_job = channel_job
      @article_type_class = article_type_class
      @name = params[:name]
      @text = params[:text]
      @type_code = params[:type_code]
      @story_id = params[:story_id]
    end

    def update
      article = article_class.find_by(id: id)
      article.story_id = story_id
      article.name = name
      article.text = text
      article.article_type = article_type_class.find_by(lookup_code: type_code)
      article.save!

      channel_job.perform_later(article_json(article))
    end

    private

    attr_reader :id, :name, :text, :type_code, :story_id, :article_type_class
  end
end
