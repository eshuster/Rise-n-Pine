class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])
    # @user = User.where(username: params[:username]).first

    if @user && @user.authenticate(params[:password_digest])
      # Save the user id inside the browser cookie. This is how we keep the user
      # logged in when they navigate around our website.
      session[:user_id] = @user.id
      redirect_to '/articles'
    else
    # If user's login doesn't work, send them back to the login form.
      redirect_to '/login'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end

end
