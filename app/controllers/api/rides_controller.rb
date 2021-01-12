class Api::RidesController < ApplicationController
    def index 
        rides = params[:bounds] ? Ride.with_attached_photos.in_bounds(params:bounds) : Ride.with_attached_photos.all
        
        if params[:query]
            rides = rides.where("city ILIKE ?", "%#{params[:query]}%")
        end
        @rides = rides
        render: index
    end

    def show
        @ride = Ride.with_attached_photos.find_by(id: params[:id])
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
