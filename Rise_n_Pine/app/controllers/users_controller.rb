class UsersController < ApplicationController


  def index
    @articles = Article.all
  end

  def new

  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      redirect_to '/articles'
    else
      redirect_to '/signup'
    end
  end

private

  def user_params
    params.require(:user).permit(:username, :password_digest)
  end

end



