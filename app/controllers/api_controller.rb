class ApiController < ActionController::API
  around_action :handle_exception

  def handle_exception
    yield
  rescue Exception => e
    render json: { error: e.to_s }, status: 500, layout: false
  end
end
