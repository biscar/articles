class CreateArticleChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'create_article_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
