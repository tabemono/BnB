class Api::RidesController < ApplicationController
    def index 
       
        @rides = bounds ? Ride.in_bounds(bounds) : Ride.all
       
        if params[:keyword]
            
            @rides = Ride.with_attached_photos.filtered_search(params[:keyword])
        else
            # @rides = Rides.with_attached_photos.in_bounds(params[:filters])
            render {}
            return
        end
        # @rides = Ride.all
        render :index
    end

    def show
        @ride = Ride.with_attached_photos.includes(:reviews).find_by(id: params[:id])
        # @ride = Ride.find_by(id: params[:id])
        render :show 
    end

    # def create
    #     @ride = Ride.new(ride_params)
    #     @ride.owner_id = current_user.id
    #     if @ride.save 
    #         render :show
    #     else
    #         render json: @ride.errors.full_messages, status: 422
    #     end
    # end



  
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

    def location
        params[:location]
    end

    def bounds
        params[:bounds]
    end


end
