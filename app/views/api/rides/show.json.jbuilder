json.partial! 'ride', ride: @ride



@ride.reviews.includes(:rider).each do |review|
    json.reviews do
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
        end
    end

    json.riders do
        json.set! review.rider.id do
            json.extract! review.rider, :id, :firstname
        end
    end
end






















