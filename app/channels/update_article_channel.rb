class UpdateArticleChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'update_article_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
