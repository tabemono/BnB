class Booking < ApplicationRecord
  validates :start_date, :end_date, :num_riders, presence: true
  validates :num_guests, numericality: { greater_than: 0, less_than_or_equal_to: 2, only_integers: true }

  belongs_to :ride,
    class_name: :Ride,
    foreign_key: :ride_id
 ## guest
  belongs_to :rider,
    primary_key: :id,
    foreign_key: :rider_id,
    class_name: :User

  has_one :owner,
    through: :ride,
    source: :owner
end
