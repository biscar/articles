require_relative './application_record'

module Ar
  class Article < Ar::ApplicationRecord
    belongs_to :article_type
    has_many :story_articles, dependent: :destroy
    has_many :stories, through: :story_articles
  end
end
