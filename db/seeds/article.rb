module Seeds
  class Article
    NAMES = [
      'Article 1',
      'Article 2',
      'Article 3',
      'Article 4',
    ].freeze

    TEXTS = [
      'Bla bla bla bla',
      'Ta ta ta ta ta ta',
      'AA a adad asfa fa dfa sdfa sdf',
      'aaaa adfas afsdf af fffffffffff  fffffffffff',
      'ee ee eee afafaag ag ag aggggggg afasdfasfaggg g gagagasd  dda g',
    ].freeze

    def self.import_data
      types = Ar::ArticleType.all.to_a

      rand(0..15).times do
        article = Ar::Article.new
        article.article_type = types.sample
        article.name = NAMES.sample
        article.text = TEXTS.sample
        article.save!
      end
    end
  end
end
