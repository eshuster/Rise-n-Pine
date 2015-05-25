class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :date
      t.string :author
      t.text :description

      t.timestamps null: false
    end
  end
end
