class UpdateArticleJob < ApplicationJob
  def perform(article)
    ActionCable.server.broadcast('update_article_channel', article: article)
  end
end
