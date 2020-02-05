class CreateArticleTypesTable < ActiveRecord::Migration[5.1]
  TABLE_NAME = :article_types.freeze

  def up
    create_table TABLE_NAME do |t|
      t.string :name
      t.string :lookup_code
    end

    add_index TABLE_NAME, :lookup_code, unique: true
  end

end
