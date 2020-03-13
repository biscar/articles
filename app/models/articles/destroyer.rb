module Articles
  class Destroyer < Articles::Base
    def post_initialize(params)
      @id = params[:id]
    end

    def destroy
      article_class.find_by(id: id)&.destroy!
    end

    private

    attr_reader :id

    def job_params
      id
    end
  end
end

