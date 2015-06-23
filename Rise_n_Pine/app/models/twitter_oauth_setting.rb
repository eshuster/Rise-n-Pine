class TwitterOauthSetting < ActiveRecord::Base
  attr_accessor :asecret, :atoken, :user_id

  belongs_to :user

end
