if booking
json.extract! booking, :id, :start_date, :end_date, :num_riders, :ride_id, :rider_id 
json.ride booking.ride
    json.photoUrls !!booking.ride ? booking.ride.photos.map { |file| url_for(file)} : ''
end