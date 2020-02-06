require_relative 'seeds/article_type'
require_relative 'seeds/story'
require_relative 'seeds/article'
require_relative 'seeds/story_article'

Seeds::ArticleType.import_data
Seeds::Article.import_data
Seeds::Story.import_data
Seeds::StoryArticle.import_data
