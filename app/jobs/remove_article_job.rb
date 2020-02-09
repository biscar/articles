class RemoveArticleJob < ApplicationJob
  def perform(article_id)
    ActionCable.server.broadcast('remove_article_channel', article_id: article_id)
  end
end
