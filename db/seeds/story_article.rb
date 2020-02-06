module Seeds
  class StoryArticle

    def self.import_data
      articles = Ar::Article.all.to_a

      Ar::Story.all.each do |story|
        story.articles << articles.sample(articles.count)
      end
    end
  end
end
