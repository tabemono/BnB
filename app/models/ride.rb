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

    has_many_attached :photos


    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    end

    def self.filtered_search(query) 
        result = self.where("city LIKE ?", "%#{query}%")
        return result
     end


end
# 298-200 W 42nd St
# New York, NY 10036
# 40.756492, -73.988053
# a = Ride.create("R3", "Yamaha", "298-200 W 42nd ST", 40.756492, -73.988953, "great commute bike", "Street")