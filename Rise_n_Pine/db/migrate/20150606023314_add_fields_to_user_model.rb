class AddFieldsToUserModel < ActiveRecord::Migration
  def change
    add_column :users, :name, :string, :null => true
    add_column :users, :screen_name, :string,  :null => true
    add_column :users, :url, :string, :null => true
    add_column :users, :profile_image_url, :string, :null => true
    add_column :users, :location, :string, :null => true
    add_column :users, :description, :string, :null => true
  end
end
