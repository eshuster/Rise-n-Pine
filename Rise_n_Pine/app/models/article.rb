class Article < ActiveRecord::Base
  attr_accessor :image_url
  belongs_to :user
  # has_many :tags
  mount_uploader :image, ImageUploader

  def self.search(search)
    if search
      where('title LIKE ?', "%#{search}%")
    else
      @articles=Article.all
    end
  end
end

