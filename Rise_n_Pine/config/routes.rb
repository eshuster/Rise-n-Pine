Rails.application.routes.draw do
  # get 'user/index'

  root 'users#index'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'


  resources :articles do
    member do
      delete 'destroy'
      post 'destroy'
      put 'update'
      patch 'update'
    end
  end


end
