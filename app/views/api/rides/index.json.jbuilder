@rides.each do |ride|
    json.set! ride.id do
        json.partial! 'ride', ride: ride
        json.photoUrls ride.photos.map { |file| url_for(file)}
    end
end





















