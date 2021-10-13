class Api::ReviewsController < ApplicationController 
    before_action :ensure_logged_in

    def index 
        if params[:ride_id]
            @reviews = Review.where(ride_id: params[:rideId].includes(:rider))
        else
            @reviews = Review.all
        end
        render :index
    end

    def create
        @review = current_user.reviews.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end


     def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def destroy
        # @review = Review.find_by(id: params[:id])
        # if @review.destroy
        #     render :show
        # else
        #     render json @review.errors.full_messages, status: 422
        # end
        @review = Review.find_by(id: params[:id])
        @review.destroy
        render :show
    end

    def update
        @review = Review.find_by(id: params[:review][:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end


    private
    
    def review_params
        params.require(:review).permit(:body, :rating, :rider_id, :ride_id)
    end
end