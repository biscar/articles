class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  protect_from_forgery with: :exception


  def after_sign_in_path_for(resource)
    home_index_path
  end

  def after_sign_out_path_for(resource_or_scope)
    request.referrer
  end
end
