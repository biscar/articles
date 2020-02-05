class CreateStoryArticlesTable < ActiveRecord::Migration[5.1]
  TABLE_NAME = :story_articles.freeze

  def change
    create_table TABLE_NAME do |t|
      t.belongs_to :story, index: true
      t.belongs_to :article, index: true
    end
  end
end
