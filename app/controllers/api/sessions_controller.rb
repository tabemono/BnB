class Api::SessionsController < ApplicationController
    
    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            login(@user)
            # render "api/users/show"
            redirect_to api_user_url(@user)
        else
            render json: ['The email or password you entered is incorrect.Try again'], status: 422
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
