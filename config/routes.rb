Rails.application.routes.draw do
  resources :sessions, only: [:create]
  get 'login' => 'sessions#new', as: 'login'
  delete 'logout' => 'sessions#destroy', as: 'logout'

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
