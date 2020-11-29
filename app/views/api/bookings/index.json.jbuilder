@bookings.each do |booking|
  json.set! booking.id do 
    json.extract! booking, :id
    json.rideId booking.ride_id
    json.userId booking.rider_id
    json.rider booking.rider
    json.ride booking.ride
    json.bookingPhotos booking.ride.photos
    json.checkIn booking.check_in
    json.checkOut booking.check_out
  end
end