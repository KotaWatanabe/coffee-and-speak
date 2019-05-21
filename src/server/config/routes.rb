Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get("/", {to: "home#index", as: "root"})
  resources :users, only:[:new, :edit, :update, :create] do
    member do 
      get :change_password
      patch :update_password
      get :dashboard
    end
  end

  resource :session, only:[:new, :create, :destroy]

  resources :teachers do
    resources :favourites, shallow: true, only: [:create, :destroy]
    member do 
      get :teacher_dashboard
    end
    resources :reviews, shallow: true, only: [:create, :destroy] do
    end
  end
  
end
