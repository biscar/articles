module Articles
  class Destroyer < Articles::Base
    def post_initialize(params, channel_job: RemoveArticleJob)
      @id = params[:id]
      @channel_job = channel_job
    end

    def destroy
      article_class.find_by(id: id)&.destroy!

      channel_job.perform_later(id)
    end

    private

    attr_reader :id
  end
end

