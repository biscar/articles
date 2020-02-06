module Seeds
  class Story
    STORIES = %w[News Weather Sport Politics Incidents].freeze

    def self.import_data
      STORIES.each { |name| Ar::Story.where(name: name).first_or_create! }
    end
  end
end
