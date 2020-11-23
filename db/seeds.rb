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
    Ride.destroy_all

demo = User.create!(
    firstname: "Demo",
    email: "demo@aa.com",
    password: "123456"
)

# ray = User.create!(
#   firstname: 'Ray',
#   email: "ray@gmail.com",
#   password: "rayaa123"
# )

# sergio = User.create!(
#   firstname: 'Sergio',
#   email: 'sergio@gmail.com',
#   password: 'sergioaa123'
# )

bmw_manhattan = Ride.create!({
  model: " BMW-R 1200GS",
  brand: "BMW",
  style: "Adventure/Touring",
  description: "Great for long rides",
  price: 80.0,
  lat: 40.72768529173207,
  lng: -74.00009437067972,
  owner_id: 1,
  borough: "Manhattan",
  location: "Washington Square, New York 10012"
})

# r3_manhattan = Ride.create!(
#   model: "R3",
#   brand: "Yamaha",
#   style: "Street",
#   description: "Smaller bike of the YZF series great for commmute/city riding",
#   price: 50.0,
#   lat: 40.756492,
#   lng: -73.988953,
#   owner_id: 1,
#   borough: "Manhattan",
#   location: "298-200 W 42nd ST"
# )
# r1_manhattan = Ride.create!(
#   model: "R1",
#   brand: "Yamaha",
#   style: "Sport",
#   description: "Top of the YZF series for track",
#   price: 120.0,
#   lat: 40.7175904930345, 
#   lng: -74.01279468635637,
#   owner_id: 3,
#   borough: "Manhattan",
#   location: "117 West St, New York, NY 10006"
# )

# bmw1 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/bmw1200gs.jpg')
# bmw2 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/bnw-2.jpg')
# bmw3 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/bmw-3.jpg')
# bmw4 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/bmw-4.jpg')
# bmw5 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/bmw-5.jpg')


# bmw_manhattan.photos.attach(io: bmw1,  filename:'bmw1200gs.jpg')
# bmw_manhattan.photos.attach(io: bmw2,  filename:'bnw-2.jpg')
# bmw_manhattan.photos.attach(io: bmw3,  filename:'bmw-3.jpg')
# bmw_manhattan.photos.attach(io: bmw4,  filename:'bmw-4.jpg')
# bmw_manhattan.photos.attach(io: bmw5,  filename:'bmw-5.jpg')



# r3_1 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r3.jpeg')
# r3_2 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r3-1.jpeg')
# r3_3 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r3-2.jpeg')
# r3_4 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r3-3.jpeg')
# r3_5 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r3-4.jpeg')

# r3_manhattan.photos.attach(io: r3_1, filename: 'r3.jpeg')
# r3_manhattan.photos.attach(io: r3_2, filename: 'r3-1.jpeg')
# r3_manhattan.photos.attach(io: r3_3, filename: 'r3-2.jpeg')
# r3_manhattan.photos.attach(io: r3_4, filename: 'r3-3.jpeg')
# r3_manhattan.photos.attach(io: r3_5, filename: 'r3-4.jpeg')


# r1_1 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r1-1.jpg')
# r1_2 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r1-2.jpg')
# r1_3 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r1-3.jpg')
# r1_4 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r1-4.jpg')
# r1_5 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r1-5.jpg')

# r1_manhattan.photos.attach(io: r1_1, filename: 'r1-1.jpg')
# r1_manhattan.photos.attach(io: r1_2, filename: 'r1-2.jpg')
# r1_manhattan.photos.attach(io: r1_3, filename: 'r1-3.jpg')
# r1_manhattan.photos.attach(io: r1_4, filename: 'r1-4.jpg')
# r1_manhattan.photos.attach(io: r1_5, filename: 'r1-5.jpg')

end