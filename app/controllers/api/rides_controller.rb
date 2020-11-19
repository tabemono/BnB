class Api::RidesController < ApplicationController
    def index 
        @rides = Ride.all 
        render :index
    end

    def show
        @ride = Ride.find(params[:id])
        render :show 
    end

    def create
        @ride = Ride.new(ride)
        if @ride.save 
            render :show
        else
            render json: @ride.errors.full_messages, status: 422
        end
    end


    def update 
        @ride = Ride.find(params[:id])
        if @ride && @ride.update(ride)
            render :show
        else
            render json: @ride.errors.full_messages, status: 422
        end
    end

    private

    def ride_params    
        params.require(:ride).permit(:model, :brand, :price, :location, :borough, :lat, :lng, :description, :title, :style, photos: [])
    end



end
