module Articles
  class Sorter
    def initialize(articles)
      @articles = articles
    end

    def add_sort_conditions(sort_field, sort_value)
      return articles if sort_field.blank? || sort_value.blank?

      if sort_field && sort_value
        articles.order("#{table_field(sort_field)} #{sort_value}")
      else
        articles
      end
    end

    private

    attr_reader :articles

    def table_field(sort_field)
      case sort_field
      when 'story' then 'stories.name'
      when 'name' then 'articles.name'
      when 'text' then 'articles.text'
      when 'type' then 'article_types.name'
      end
    end

  end
end

