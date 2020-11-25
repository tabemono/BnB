class Booking < ApplicationRecord
  validates :rider_id, :ride_id, :check_in, :check_out, presence: true
  belongs_to :ride,
    class_name: :Ride,
    primary_key: :id,
    foreign_key: :ride_id

  belongs_to :rider,
  primary_key: :id,
  foreign_key: :rider_id,
  class_name: :User
end
