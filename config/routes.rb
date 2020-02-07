Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'
  #get 'home/index'
  resources :home, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :article
    end
  end
end
