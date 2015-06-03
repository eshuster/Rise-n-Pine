class Article < ActiveRecord::Base
  attr_accessor :image_url
  belongs_to :user
  # has_many :tags
  mount_uploader :image, ImageUploader

  # def self.search(search)
  #   if search
  #     # Article.find  ['title LIKE ?', "%#{search}%"]
  #     @articles = Article.all
  #     @articles.find_by title: "%#{search}%"
  #   else
  #     Article.all
  #   end
  # end
end

