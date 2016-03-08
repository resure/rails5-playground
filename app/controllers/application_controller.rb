class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include Pundit

  # authenticate_with_http_basic do |username, password|
  #   user = User.find_by_username(username)
  #   user and user.authenticate password
  # end

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user
end
