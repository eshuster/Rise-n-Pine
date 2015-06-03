class ArticlesController < ApplicationController

  # before_filter :authorize

  def index
    @user = User.find_by(id: session[:user_id])
    @articles = Article.all
    if params[:search]
      @articles = Article.where("title like ?", "%#{params[:search]}%")
    else
      Article.all
    end
  end

  def articles_index
    @articles = Article.all
    render json: @articles
  end

  def new
    @article = Article.new
    # @tag = Tag.new
  end

  def create
    @article = Article.create!(title: params[:article][:title], date: params[:article][:date], author: params[:article][:author], category: params[:article][:category], description: params[:article][:description], image: params[:article][:image], artist: params[:article][:artist])
    # @tag.create!(tag: params[:tag][:tag])
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
    # @tag = Tag.where(user_id: @article.id).first
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to articles_path
  end

  def searchartist
    @articles = Article.find(params[:artist])
    render json: @articles
  end

  private
  def article_params
    params.require(:article).permit(:title, :date, :author, :type, :description, :category, :image, :artist)
  end

end


