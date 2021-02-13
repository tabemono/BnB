class Api::SessionsController < ApplicationController
    
    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            login(@user)
            # render "api/users/show"
            redirect_to api_user_url(@user)
        else
            render json: ['email or password is invalid'], status: 422
        end
    end

    def destroy 
        @user = current_user
        if @user
            render json: {}
            logout
        else
            render json: ['Nobody logged in'], status: 404
        end
    end    
end
