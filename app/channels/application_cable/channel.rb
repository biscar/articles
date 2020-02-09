module ApplicationCable
  class Channel < ActionCable::Channel::Base
    def user
      current_user
    end

    def user_id
      current_user.id
    end
  end
end
