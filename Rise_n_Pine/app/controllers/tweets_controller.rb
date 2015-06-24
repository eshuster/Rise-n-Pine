class TweetsController < ApplicationController


  def new
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.create!(status: params[:tweet][:status])
    redirect_to :back
  end


end
