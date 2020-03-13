class ArticlesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'articles_channel'
  end

  def index
    ArticlesIndexJob.perform_later
  end
end
