Rails.application.routes.draw do
  get 'home/index'

  root to: 'home#index'

  # constraints lambda { |req| req.session['admin'] } do
  #   mount Logster::Web => '/logs'
  # end
  mount Logster::Web => '/logs'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
