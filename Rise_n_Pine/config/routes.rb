Rails.application.routes.draw do
  # get 'user/index'

  root 'users#index'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'
  # get '/search-artist' => 'articles#searchartist'
  get '/articles_index' => 'articles#articles_index'

  resources :articles do
    # resources :tags do
    member do
      get 'searchartist'
      delete 'destroy'
      post 'destroy'
      put 'update'
      patch 'update'
    # end
  end
end

  # resources :tags do
  #   member do
  #   end
  # end




end
