Rails.application.routes.draw do
  get 'user/index'

  root 'user#index'

  resources :articles do
    member do
      delete 'destroy'
      post 'destroy'
      put 'update'
      patch 'update'
      # post 'update'
      # patch 'update'
    end
  end

end
