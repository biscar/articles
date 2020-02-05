class CreateStoriesTable < ActiveRecord::Migration[5.1]
  TABLE_NAME = :stories.freeze

  def change
    create_table TABLE_NAME do |t|
      t.string :name
    end
  end
end
