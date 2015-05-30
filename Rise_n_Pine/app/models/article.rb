class Article < ActiveRecord::Base
  attr_accessor :image_url
  belongs_to :user
  mount_uploader :image, ImageUploader
end
