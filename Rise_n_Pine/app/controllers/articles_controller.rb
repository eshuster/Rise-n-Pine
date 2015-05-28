class ArticlesController < ApplicationController

  # before_filter :authorize

  def index
    p "*" * 100
    @user = User.find_by(id: session[:user_id])
    p @user
    p "*" * 100
    @articles = Article.all
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.create!(title: params[:article][:title], date: params[:article][:date], author: params[:article][:author], category: params[:article][:category], description: params[:article][:description])
      p "*" * 100
    p @article
      p "*" * 100
    redirect_to articles_path
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
    @article.update(article_params)
    redirect_to articles_path
  end

  def show
    @article = Article.find(params[:id])
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to articles_path
  end

  private
  def article_params
    params.require(:article).permit(:title, :date, :author, :type, :description, :category)
  end

end


