class ArticlesController < ApplicationController

  # before_filter :authorize

  def index
    @articles = Article.search(params[:search])
  end

  def new
    @article = Article.new
    # @tag = Tag.new
  end

  def create
    @article = Article.create!(title: params[:article][:title], date: params[:article][:date], author: params[:article][:author], category: params[:article][:category], description: params[:article][:description], image: params[:article][:image])
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


  private
  def article_params
    params.require(:article).permit(:title, :date, :author, :type, :description, :category, :image)
  end

end


