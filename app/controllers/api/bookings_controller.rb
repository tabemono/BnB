class Api::BookingsController < ApplicationController
    before_action :ensure_logged_in
    def index
        @bookings = if params[:user_id]
        Booking.includes(:ride).where(rider_id: params[:user_id])
        else
            Booking.includes(:ride).all
        end
        render :index
    end

    def show
        @booking = Booking.find(params[:id])
        if @booking
            render :show
        else
            render json: @booking.errors.full_messages, status: 404
        end
    end

    def create
        @booking = Booking.new(booking_params)
        @booking.rider_id = current_user.id
        if @booking.save
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def update 
        @booking = Booking.find(params[:id])
        if @booking.update(booking_params)
            render :show
        else
            render json: @booking.errors.full_messages
        end
    end

    def destroy 
        @booking = Booking.find(params[:id])
       
        if @booking
            @booking.delete
            render :show
        else
            render json: ["Booking could not be deleted at this moment"], status: 422
        end
       
    end

    private

    def booking_params
        params.require(:booking).permit(:start_date, :end_date, :ride_id, :rider_id, :num_riders)
    end
end