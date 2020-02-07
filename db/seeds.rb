require_relative 'seeds/article_type'
require_relative 'seeds/story'
require_relative 'seeds/article'

Seeds::Story.import_data
Seeds::ArticleType.import_data
Seeds::Article.import_data

