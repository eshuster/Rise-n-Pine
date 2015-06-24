class TwitterController < ApplicationController

  def get_client
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key = "9NREEZKiTetQt9IdN8i0hiV03"
      config.consumer_secret = "BVGvbOoyftHDuEiXJGrEj2Mmy6tUY3hjQQwgzePmXvbyYK5rV1"
      config.access_token ="2980110189-NYVnhc15CtoYuCUXbSPwiQTzhXRHFyuAq8DkDvt"
      config.access_token_secret = "GAbeyFw6cZ4KM3CqYTXEnMHSX9nYVlzaKkhDSJecaU1BR"
    end
  end

  def tweet
    @tweet = Tweet.new
    @tweet = Tweet.create!(status: params[:tweet][:status])
    p "*" * 80
    p @tweet
    p "*" * 80

    @client.update(@tweet)
    redirect_to :back


    # redirect_to articles_path
  end





end
