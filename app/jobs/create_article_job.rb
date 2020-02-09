class CreateArticleJob < ApplicationJob
  def perform(article)
    ActionCable.server.broadcast('create_article_channel', article: article)
  end
end
