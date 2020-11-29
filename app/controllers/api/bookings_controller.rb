class Api::BookingsController < ApplicationController
  before_action :ensure_logged_in, only: [:create]

  def create
    @booking = Booking.new(booking_params)
    @booking.rider_id = current_user.id
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 401
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

  def show
      @booking = Booking.find(params[:id])
      render :show
  end
  
  def index
    if params[:riderId]
      @bookings = User.find(params[:userId]).bookings
    else
      @bookings = Booking.all
    end
    render :index
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.delete
    render :show
  end




  private
  def booking_params
    params.require(:booking).permit(:rider_id, :ride_id, :check_in, :check_out)
  end

end
