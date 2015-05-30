class Article < ActiveRecord::Base
  attr_accessor :image_url
  belongs_to :user
  # has_many :tags
  mount_uploader :image, ImageUploader
end
