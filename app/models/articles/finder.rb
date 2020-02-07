module Articles
  class Finder
    def initialize(articles)
      @articles = articles
    end

    def add_search_conditions(search_field, search_text)
      if search_text && search_field
        articles.where("#{search_field} LIKE ?", "%#{search_text}%")
      else
        articles
      end
    end

    private

    attr_reader :articles
  end
end

