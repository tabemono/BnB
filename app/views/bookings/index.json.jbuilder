json.bookings do 
  @bookings.each do |booking|
    json.set! booking.id do
      json.partial! 'booking', booking: booking
    end
  end
end

json.rides do 
  @bookings.each do |booking|
    json.set! booking.ride_id do 
      json.partial! '/api/rides/ride', ride: booking.ride
      if booking.ride
      json.photoUrls booking.ride.photos.map { |file| url_for(file)}
      end
    end
  end
end