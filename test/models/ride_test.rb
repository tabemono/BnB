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
require 'test_helper'

class RideTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
