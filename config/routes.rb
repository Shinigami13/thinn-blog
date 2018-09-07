Rails.application.routes.draw do
  resources :posts
  get 'posts/new'
  get 'posts/edit'
  get 'posts/show'
  get 'posts/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
