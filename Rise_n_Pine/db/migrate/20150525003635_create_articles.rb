class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :date
      t.string :author
      t.string :category
      t.text :description
      t.string :image

      t.timestamps null: false
    end
  end
end
