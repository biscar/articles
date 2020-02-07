require_relative './application_record'

module Ar
  class Article < Ar::ApplicationRecord
    belongs_to :article_type
    belongs_to :story
  end
end
