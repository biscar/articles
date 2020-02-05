class CreateArticlesTable < ActiveRecord::Migration[5.1]
  TABLE_NAME = :articles.freeze

  def change
    create_table TABLE_NAME do |t|
      t.string :name
      t.text :text

      t.timestamps
    end
  end
end