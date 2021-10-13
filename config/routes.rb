# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                     root  GET    /                                                                                        static_pages#root
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:default=>{:format=>:json}}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:default=>{:format=>:json}}
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:default=>{:format=>:json}}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:default=>{:format=>:json}}
#                 api_rides GET    /api/rides(.:format)                                                                     api/rides#index {:default=>{:format=>:json}}
#                           POST   /api/rides(.:format)                                                                     api/rides#create {:default=>{:format=>:json}}
#                  api_ride GET    /api/rides/:id(.:format)                                                                 api/rides#show {:default=>{:format=>:json}}
#                           PATCH  /api/rides/:id(.:format)                                                                 api/rides#update {:default=>{:format=>:json}}
#                           PUT    /api/rides/:id(.:format)                                                                 api/rides#update {:default=>{:format=>:json}}
#                api_search GET    /api/search(.:format)                                                                    api/rides#search {:default=>{:format=>:json}}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: "static_pages#root"
  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :show] do 
      resources :bookings, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :rides, only: [:index, :show] 
    resources :bookings, only: [:index, :create, :destroy, :update]
    resources :reviews, only: [:create, :index, :update, :destroy, :show]
  end

   
end

