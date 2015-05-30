class Article < ActiveRecord::Base
  attr_accessor :image_url
  belongs_to :user
  # has_many :tags
  mount_uploader :image, ImageUploader

  def self.search(search)
  if search
    self.where("title like ?", "%#{search}%")
  else
    @article = Article.all
  end
end

end
