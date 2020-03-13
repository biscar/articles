class ArticlesIndexJob < ApplicationJob
  queue_as :default

  def perform
    ActionCable.server.broadcast('articles_channel', {})
  end
end
