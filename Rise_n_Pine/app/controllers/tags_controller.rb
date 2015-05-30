class TagsController < ApplicationController

  # def new
  #   @tag = Tag.new
  # end

  # def create
  #   @tag = Tag.create!(tag: params[:tag][:tag])
  #   redirect_to tags_path
  # end

  # def destroy
  #   @tag = Tag.find(params[:id])
  #   @tag.destroy
  #   redirect_to tags_path
  # end
  def index
    article = Article.where(id: params[:article_id]).first
    @tags = article.tags
  end

end
