module Seeds
  class Articles
    NAMES = [
      'Behavioral',
      'Psychology',
      'Habits',
      'Motivation',
      'Procrastination',
      'Creativity',
      'Decision Making',
      'Focus',
      'Mental Toughness',
    ].freeze

    TEXTS = [
      'Happy 1st Birthday, Atomic Habits! (plus 3 gifts for you…)',
      'The Ultimate Productivity Hack is Saying No',
      '30 One-Sentence Stories From People Who Have Built Better Habits',
      'The Ultimate Habit Tracker Guide: Why and How to Track Your Habits',
      'The Surprising Benefits of Journaling One Sentence Every Day',
      'How to Make Your Future Habits Easy',
      'How to Automate a Habit and Never Think About It Again',
      'The Myth and Magic of Deliberate Practice',
      'How Innovative Ideas Arise',
      'The Downside of Work-Life Balance',
    ].freeze

    def self.import_data
      types = Ar::ArticleType.all.to_a
      stories = Ar::Story.all.to_a

      20.times do
        article = Ar::Article.new
        article.article_type = types.sample
        article.name = NAMES.sample
        article.text = TEXTS.sample
        article.story = stories.sample
        article.save!
      end
    end
  end
end
