module Articles
  class Updater
    def initialize(id, params= {}, article_class: Ar::Article, article_type_class: Ar::ArticleType)
      @article_class = article_class
      @article_type_class = article_type_class
      @id = id
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
    end

    attr_reader :id, :name, :text, :type_code, :story_id, :article_type_class, :article_class
  end
end