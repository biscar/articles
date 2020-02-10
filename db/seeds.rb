require_relative 'seeds/article_types'
require_relative 'seeds/stories'
require_relative 'seeds/articles'

Seeds::Stories.import_data
Seeds::ArticleTypes.import_data
Seeds::Articles.import_data

