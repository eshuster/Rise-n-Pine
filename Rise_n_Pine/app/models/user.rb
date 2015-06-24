class User < ActiveRecord::Base
  # attr_accessor :email, :password, :password_confirmation, :remember_me, :name, :screen_name, :url, :profile_image_url, :location, :description

  has_secure_password
  has_many :articles

end
