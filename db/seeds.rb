# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
ActiveRecord::Base.transaction do 
    User.destroy_all

demo = User.create(
    firstname: "Demo",
    email: "demo@aa.com",
    password: "123456"
)

r6_manhattan = Ride.create(
  model: "R6",
  brand: "Yamaha",
  style: "Street",
  description: "great track bike and good performance",
  price: 60.0,
  lat: 40.756492,
  lng: -73.988953,
  owner_id: 4,
  borough: "Manhattan",
  location: "298-200 W 42nd ST"
)
r3_manhattan = Ride.create(
  model: "R3",
  brand: "Yamaha",
  style: "Street",
  description: "Smaller bike of the YZF series great for commmute/city riding",
  price: 60.0,
  lat: 40.756492,
  lng: -73.988953,
  owner_id: 4,
  borough: "Manhattan",
  location: "298-200 W 42nd ST"
)
r1_manhattan = Ride.create(
  model: "R1",
  brand: "Yamaha",
  style: "Street",
  description: "Top of the YZF series for track",
  price: 60.0,
  lat: 40.756492,
  lng: -73.988953,
  owner_id: 4,
  borough: "Manhattan",
  location: "298-200 W 42nd ST"
)




# r6_manhattan.photos.attach(io: open(""))