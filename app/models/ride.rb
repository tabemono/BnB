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
#  borough     :string           not null
#  location    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Ride < ApplicationRecord
    STYLE = ['Sport', 'Street', 'Adventure/Touring' ]
    validates :model, :brand, :price, :location, :borough, :lng, :lat, :description, :style, presence: true
    validates :style, inclusion: {in: STYLE}, default: STYLE[3];

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many_attached :photos

end
