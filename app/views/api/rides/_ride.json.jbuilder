if ride
    json.extract! ride, 
    :id, 
    :owner_id, 
    :price, 
    :city, 
    :location, 
    :lng, 
    :lat, 
    :description, 
    :brand, 
    :style, 
    :model
end
    json.photoUrls ride.photos.map { |file| url_for(file) }
    json.ownerId ride.owner_id
    
    