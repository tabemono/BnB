json.extract! @booking, :id
json.rideId @booking.ride_id
json.rider @booking.rider
json.ride @booking.ride
json.riderId @booking.rider_id
json.bookingPhotos @booking.ride.photos
json.startDate @booking.check_in
json.endDate @booking.check_out
