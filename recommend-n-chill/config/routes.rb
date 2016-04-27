Rails.application.routes.draw do
  resources :user, :defaults => {format: :json} do
    resources :movies, :defaults => {format: :json}
  end

  root 'application#index'
end
