class TwitterController < ApplicationController

  def generate_twitter_oauth_url
    oauth_callback = "http://#{request.host}:#{request.port}/oauth_account"
    @consumer = OAuth::Consumer.new("9NREEZKiTetQt9IdN8i0hiV03","BVGvbOoyftHDuEiXJGrEj2Mmy6tUY3hjQQwgzePmXvbyYK5rV1", :site => "https://api.twitter.com")
    p "*" * 80
    p @consumer
    p "*" * 80
    @request_token = @consumer.get_request_token(:oauth_callback => oauth_callback)
    session[:request_token] = @request_token

    redirect_to @request_token.authorize_url(:oauth_callback => oauth_callback)
  end

  def oauth_account
    if TwitterOauthSetting.find_by_user_id(current_user.id).nil?
      @request_token = session[:request_token]
      @access_token = @request_token.get_access_token(:oauth_verifier => params["oauth_verifier"])
      TwitterOauthSetting.create(atoken: @access_token.token, asecret: @access_token.secret, user_id: current_user.id)
      update_user_account()
    end
      redirect_to "/twitter_profile"
  end

def index
  unless TwitterOauthSetting.find_by_user_id(current_user.id).nil?
    redirect_to "/"
  end
end

def get_client

    Twitter.configure do |config|
      config.consumer_key = "9NREEZKiTetQt9IdN8i0hiV03"
      config.consumer_secret = "BVGvbOoyftHDuEiXJGrEj2Mmy6tUY3hjQQwgzePmXvbyYK5rV1"
    end

    Twitter::Client.new(
      :oauth_token => TwitterOauthSetting.find_by_user_id(current_user.id).atoken,
      :oauth_token_secret => TwitterOauthSetting.find_by_user_id(current_user.id).asecret
    )
end

def twitter_profile
    @user_timeline = get_client.user_timeline
    @home_timeline = get_client.home_timeline
end

  def update_user_account
    user_twitter_profile = get_client.user
    current_user.update_attributes({
      name: user_twitter_profile.name,
      screen_name: user_twitter_profile.screen_name,
      url: user_twitter_profile.url,
      profile_image_url: user_twitter_profile.profile_image_url,
      location: user_twitter_profile.location,
      description: user_twitter_profile.description
    })
  end



end
