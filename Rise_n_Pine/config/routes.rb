Rails.application.routes.draw do

  root 'users#index'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  get '/searchartist/:artist' => 'articles#searchartist'

  get '/articles_index' => 'articles#articles_index'

  # get '/articles_search/:title' => 'articles#articles_search'


  # resources :articles, path_names: { articles_search: 'index_search'}

resources :twitter
  get '/twitter_profile' => "twitter#twitter_profile"
  get '/oauth_account' => "twitter#oauth_account"
  # post '/oauth_account' => "twitter#oauth_account"
  get '/twitter_oauth_url' => 'twitter#generate_twitter_oauth_url'


  resources :articles do
    # resources :tags do
    member do
      get 'destroy'
      post 'destroy'
      put 'update'
      patch 'update'
    end
    # =
    collection do
      post ':title/articles_search', :to => "articles#articles_search"
      # post 'articles_search'
    end



  end

end
