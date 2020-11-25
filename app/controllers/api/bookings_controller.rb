class Api::BookingsController < ApplicationController
  before_action :ensure_logged_in, only: [:create]

  def create
    @booking = Booking.new(booking_params)
    @booking.rider_id = current_user.id
    if @booking.save
      @bookings = Booking.where(rider_id: current_user.id)
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
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def index
    @bookings = Booking.where(rider_id: current_user.id)
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
  end




  private
  def booking_params
    params.require(:booking).permit(:rider_id, :ride_id, :check_in, :check_out)
  end

end
