class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  protected

  def ensure_auth
    authenticate_with_http_basic do |username, password|
      user = User.find_by_username('username')
      user and user.authenticate password
    end
  end
end
