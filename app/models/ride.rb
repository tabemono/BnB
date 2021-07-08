# == Schema Information
#
# Table name: rides
#
#  id          :bigint           not null, primary key
#  model       :string           not null
#  brand       :string           not null
#  style       :string           not null
#  description :text             not null
#  price       :float            not null
#  lat         :float            not null
#  lng         :float            not null
#  owner_id    :integer          not null
#  city     :string           not null
#  location    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Ride < ApplicationRecord
    STYLE = ['Sport', 'Street', 'Adventure/Touring', 'Dirt' ]
    validates :model, 
    :brand, :style, :description, :price, :lat, :lng, :city, :location, presence: true
    validates :style, inclusion: {in: STYLE}

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :bookings,
        foreign_key: :ride_id,
        class_name: :Booking

    has_many :reviews,
    class_name: :Review,
    foreign_key: :ride_id
   

    has_many_attached :photos

  

    def self.in_bounds(bounds)
       Ride.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
    end

    def self.filtered_search(query) 
        match = "%#{query}%"
        result = Ride.where("city ILIKE ?", match)
            .or(Ride.where("model ILIKE ?", match))
            .or(Ride.where("brand ILIKE ?", match))
    end


end
