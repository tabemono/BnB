class Api::RidesController < ApplicationController
    def index 
        rides = bounds ? Ride.in_bounds(bounds) : Ride.all
        @rides = Ride.all 
        render :index
    end

    def show
        @ride = Ride.find_by(id: params[:id])
        render :show 
    end

    def create
        @ride = Ride.new(ride_params)
        @ride.owner_id = current_user.id
        if @ride.save 
            render :show
        else
            render json: @ride.errors.full_messages, status: 422
        end
    end


    def update 
        @ride = Ride.find(params[:id])
        if @ride && @ride.update(ride_params)
            render :show
        else
            render json: @ride.errors.full_messages, status: 422
        end
    end

    private

    def ride_params    
        params.require(:ride).permit(
            :model, 
            :brand, 
            :style, 
            :description, 
            :price, 
            :lat, 
            :lng, 
            :city, 
            :location, 
            photos: []
        )
    end

    def bounds
        params[:bounds]
    end


end
