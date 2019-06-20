Rails.application.routes.draw do
	namespace :api do
		namespace :v1 do
			resources :items
  		resources :lists
		end
	end
	
get '*path', to: "application#fallback_index_html", constraints: ->(request) do
	!request.xhr? && request.fomat.html?
end  
end
