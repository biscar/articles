require_relative './application_record'

module Ar
  class StoryArticle < Ar::ApplicationRecord
    belongs_to :story
    belongs_to :article
  end
end
