if booking
json.extract! booking, :id, :check_in, :check_out, :ride_id, :rider_id 
json.ride booking.ride
    json.photoUrls !!booking.ride ? booking.ride.photos.map { |file| url_for(file)} : ''

end