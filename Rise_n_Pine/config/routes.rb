Rails.application.routes.draw do

  root 'users#index'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  get '/searchartist/:artist' => 'articles#searchartist'

  get '/articles_index' => 'articles#articles_index'
  get '/articles_search/:title' => 'articles#articles_search'



  resources :articles do
    # resources :tags do
    member do
      get 'destroy'
      post 'destroy'
      put 'update'
      patch 'update'
    # end
    end
  end

end
