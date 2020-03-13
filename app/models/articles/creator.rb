module Articles
  class Creator < Articles::Base
    def post_initialize(params)
      @name = params[:name]
      @text = params[:text]
      @type_code = params[:type_code]
      @story_id = params[:story_id]
    end

    def create
      article = article_class.new
      article.story_id = story_id
      article.name = name
      article.text = text
      article.article_type = article_type_class.find_by(lookup_code: type_code)
      article.save!

      @article = article
    end

    attr_reader :name, :text, :type_code, :story_id

    def job_params
      article_json(article)
    end
  end
end
