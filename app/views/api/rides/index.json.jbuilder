@rides.each do |ride|
    json.set! ride.id do
        json.partial! 'ride', ride: ride
        
    end
end





















