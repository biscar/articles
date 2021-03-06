module Seeds
  class ArticleTypes
    TYPES = [
      ['Blog post', 'blog_post'],
      ['Facebook post', 'facebook_post'],
      ['Tweet', 'tweet'],
    ].freeze

    def self.import_data
      Ar::ArticleType.import([:name, :lookup_code],
        TYPES, on_duplicate_key_update: { conflict_target: [:lookup_code], columns: [:name] })
    end

  end
end
