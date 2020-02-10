module Articles
  class Sorter
    def initialize(articles)
      @articles = articles
    end

    def add_sort_conditions(sort_field, direction)
      return articles if sort_field.blank? || direction.blank?

      case articles.class.name
      when HASH
        sort_hash!(sort_field, direction)
      when ARRAY
        sort_array!(articles, sort_field, direction)
      end

      articles
    end

    private

    DESC = 'desc'.freeze
    HASH = 'Hash'.freeze
    ARRAY = 'Array'.freeze

    attr_reader :articles



    def sort_array!(articles, field, direction)
      articles.sort_by! { |article| article[field] }
      articles.reverse! if direction == DESC
    end

    def sort_hash!(field, direction)
      articles.each { |_, values| sort_array!(values, field, direction) }
    end
  end
end
