class Review < ApplicationRecord
    validates :body, :rating, :rider_id, :ride_id, presence: true
    validates :rating, inclusion: { in: (1..5) }

    belongs_to :ride,
    class_name: :Ride,
    foreign_key: :ride_id

    belongs_to :rider,
    class_name: :User,
    foreign_key: :rider_id


end
