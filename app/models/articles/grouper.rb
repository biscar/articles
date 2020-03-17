module Articles
  class Grouper
    def initialize(articles)
      @articles = articles
    end

    def group_by(group_field)
      return articles if group_field.blank?

      grouped_articles =
        case group_field
        when TOTAL_STORY
          group_by_total_story(articles)
        else
          articles.group_by { |article| article[group_field] }
        end

      grouped_articles
    end

    private

    TOTAL_STORY = 'total_story'.freeze

    attr_reader :articles

    def group_by_total_story(articles)
      result = {}
      articles.group_by { |a| a[:story] }.each do |story, articles|
        group_by_types = articles.group_by { |article| article[:type] }

        group_by_types.each do |type, articles|
          last_article = articles.sort_by { |article| article[:created_at] }.last
          key = total_story_label(story, type, articles.count, last_article)
          result[key] = [last_article]
        end
      end

      result
    end

    def total_story_label(story, type, articles_count, last_article)
      "#{story}, #{type}(#{articles_count} count), Last created article #{last_article[:created_at].strftime('%Y/%m/%d %l:%M')}"
    end
  end
end
