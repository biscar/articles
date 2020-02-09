class RemoveArticleChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'remove_article_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
