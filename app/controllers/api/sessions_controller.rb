class Api::SessionsController < ApplicationController
    
    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            login(@user)
            render "api/users/show"
        else
            render json: ['email or password is invalid'], status: 401
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
