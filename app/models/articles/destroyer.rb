module Articles
  class Destroyer

    def initialize(id, article_class: Ar::Article)
      @article_class = article_class
      @id = id
    end

    def destroy
      article_class.find_by(id: id)&.destroy!
    end

    private

    attr_reader :article_class, :id
  end
end

