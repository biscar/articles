require_relative './application_record'

module Ar
  class Story < Ar::ApplicationRecord
    has_many :story_articles, dependent: :destroy
    has_many :articles, through: :story_articles
  end
end
