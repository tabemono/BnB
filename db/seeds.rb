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
    Review.destroy_all

demo = User.create!(
    firstname: "Demo",
    email: "demo@aa.com",
    password: "123456"
)

ray = User.create!(
  firstname: 'Ray',
  email: "ray@gmail.com",
  password: "rayaa123"
)

sergio = User.create!(
  firstname: 'Sergio',
  email: 'sergio@gmail.com',
  password: 'sergioaa123'
)

jasmine = User.create!(
  firstname: 'Jasmine',
  email: 'jasmine@gmail.com',
  password: 'jasmineaa123'
)

maggie = User.create!(
  firstname: 'Maggie',
  email: 'maggie@gmail.com',
  password: 'maggieaa123'
)

andy = User.create!(
  firstname: 'Andy',
  email: 'andy@aa.com',
  password: 'andyaa123'
)

tony = User.create!(
  firstname: 'Tony',
  email: 'tony@aa.com',
  password: 'tonyasdf123'
)

suzuki_sf = Ride.create!({
  model: "GSX-600",
  brand: "Suzuki",
  style: "Sport",
  description: "Sporty and great for track, Kept in great shape and only been used in the track. Track use only!",
  price: 100,
  lat: 37.7749,
  lng: -122.4194,
  owner_id: demo.id,
  city: "San Francisco",
  location: "San Francisco"
})


bmw_manhattan = Ride.create!({
  model: " R1200GS",
  brand: "BMW",
  style: "Adventure/Touring",
  description: "Great for long rides. Had it for about a year and wanted to share it with others, best bike I ever rode.",
  price: 80.0,
  lat: 40.72768529173207,
  lng: -74.00009437067972,
  owner_id: demo.id,
  city: "New York",
  location: "Washington Square, New York 10012"
})

harley_manhattan = Ride.create!({
  model: "Sportster Iron 883",
  brand: "Harley-Davidson",
  style: "Street",
  description: "Comfortable and fast. Have gone through alot with this bike and would love to share with other rides. Runs really nice.",
  price: 80.0,
  lat: 40.774045,
  lng: -73.978682,
  owner_id: andy.id,
  city: "New York",
  location: "98-2 W 68th St, New York, NY 10023"
})

z9_manhattan = Ride.create!({
  model: " Z900",
  brand: "Kawasaki",
  style: "Street",
  description: "Overall use for everything. Fast and comfortable, have done long rides on this without a problem. 900CC Engine",
  price: 120.0,
  lat: 40.767781,
  lng: -73.969761,
  owner_id: tony.id,
  city: "New York",
  location: "25-1 E 65th St, New York, NY 10065"
})


r3_manhattan = Ride.create!(
  model: "YZF-R3",
  brand: "Yamaha",
  style: "Street",
  description: "Smaller bike of the YZF series great for commmute/city riding",
  price: 50.0,
  lat: 40.756492,
  lng: -73.988953,
  owner_id: sergio.id,
  city: "New York",
  location: "298-200 W 42nd ST"
)
r1_manhattan = Ride.create!(
  model: "YZF-R1M",
  brand: "Yamaha",
  style: "Sport",
  description: "Top of the YZF series for track, only used for track. High adrenaline when used!",
  price: 150.0,
  lat: 40.7175904930345, 
  lng: -74.01279468635637,
  owner_id: ray.id,
  city: "New York",
  location: "117 West St, New York, NY 10006"
)

ktm_ny = Ride.create!(
  model: "KTM SX-E 5",
  brand: "KTM",
  style: "Dirt",
  description: "Great for rough terrains, gets me going everywhere. No obstacle is a challenge.",
  price: 100.0,
  lat: 40.689197,
  lng:  -74.001632,
  owner_id: jasmine.id,
  city: "New York",
  location: "100 Columbia St, Brooklyn, NY 11201"
)

suzuki_sf_review = Review.create(
  body: "Great Bike a bit sporty for the city but great for the track!",
  rating: 4.5,
  ride_id: suzuki_sf.id,
  rider_id: jasmine.id
)

suzuki_sf_review2 = Review.create(
  body: "Had a blast with the bike!",
  rating: 5.0,
  ride_id: suzuki_sf.id,
  rider_id: ray.id
)

bmw_manhattan_review = Review.create(
  body: "Great adventure bike always wanted to try one out, Now I just want to buy one after renting this one!",
  rating: 5.0,
  ride_id: bmw_manhattan.id,
  rider_id: sergio.id
)

bmw_manhattan_review2 = Review.create(
  body: "Big bike for big me!",
  rating: 4.5,
  ride_id: bmw_manhattan.id,
  rider_id: andy.id
)

harley_manhattan_review = Review.create(
  body: "Love cruisers, this one is one of my favorites.",
  rating: 5.0,
  ride_id: harley_manhattan.id,
  rider_id: andy.id
)

harley_manhattan_review2 = Review.create(
  body: "Low seating height! which is great for me and also super comfortable for cruising!",
  rating: 4.0, 
  ride_id: harley_manhattan.id,
  rider_id: maggie.id
)

z9_manhattan_review = Review.create(
  body: "Best bike I've ever rode! Has alot of power but not enough to get you in trouble :) and very easy to control and comfortable",
  rating: 5.0,
  ride_id: z9_manhattan.id,
  rider_id: tony.id,
)

z9_manhattan_review2 = Review.create(
  body: "Gorgeous bike, owner let me ride it before renting it. It's in great shape.",
  rating: 5.0,
  ride_id: z9_manhattan.id,
  rider_id: ray.id
)

r1_manhattan_review = Review.create(
  body: "A track monster is all i can say.",
  rating: 5.0,
  ride_id: r1_manhattan.id,
  rider_id: ray.id
)

r3_manhattan_review = Review.create(
  body: 'Great commuter bike for the city, had to rent a bike due to my car being flatted over the weekend and being a person who took a break from riding this was a great beginner bike to restart!',
  rating: 5.0,
  ride_id: r3_manhattan.id,
  rider_id: maggie.id
)

ktm_ny_review = Review.create(
  body: 'Great dirt bike, Had alot of fun with it in the mountains. 10/10 will rent again.',
  rating: 5.0,
  ride_id: ktm_ny.id,
  rider_id: tony.id
)


suzuki1 = open('https://bnb-seeds.s3.amazonaws.com/suzuki_1.jpg')
suzuki2 = open('https://bnb-seeds.s3.amazonaws.com/suzuki_2.jpg')
suzuki3 = open('https://bnb-seeds.s3.amazonaws.com/suzuki_3.jpg')
suzuki4 = open('https://bnb-seeds.s3.amazonaws.com/suzuki_4.jpg')
suzuki5 = open('https://bnb-seeds.s3.amazonaws.com/suzuki_5.jpg')

suzuki_sf.photos.attach(io: suzuki1, filename:'suzuki_1.jpg')
suzuki_sf.photos.attach(io: suzuki2, filename:'suzuki_2.jpg')
suzuki_sf.photos.attach(io: suzuki3, filename:'suzuki_3.jpg')
suzuki_sf.photos.attach(io: suzuki4, filename:'suzuki_4.jpg')
suzuki_sf.photos.attach(io: suzuki5, filename:'suzuki_5.jpg')

ktmsx1 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/KTMSXE5-1.jpg')
ktmsx2 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/KTMSXE5-2.jpg')
ktmsx3 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/KTMSXE5-3.jpg')
ktmsx4 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/KTMSXE5-4.jpg')
ktmsx5 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/KTMSXE5-5.jpg')

ktm_ny.photos.attach(io: ktmsx1, filename:'KTMSXE5-1.jpg')
ktm_ny.photos.attach(io: ktmsx2, filename:'KTMSXE5-2.jpg')
ktm_ny.photos.attach(io: ktmsx3, filename:'KTMSXE5-3.jpg')
ktm_ny.photos.attach(io: ktmsx4, filename:'KTMSXE5-4.jpg')
ktm_ny.photos.attach(io: ktmsx5, filename:'KTMSXE5-5.jpg')

bmw1 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/bmw-6.jpg')
bmw2 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/bmw-7.jpg')
bmw3 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/bmw-9.jpg')
bmw4 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/bmw-8.jpg')
bmw5 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/bmw-10.jpg')


bmw_manhattan.photos.attach(io: bmw1,  filename:'bmw-6.jpg')
bmw_manhattan.photos.attach(io: bmw2,  filename:'bmw-7.jpg')
bmw_manhattan.photos.attach(io: bmw3,  filename:'bmw-8.jpg')
bmw_manhattan.photos.attach(io: bmw4,  filename:'bmw-9.jpg')
bmw_manhattan.photos.attach(io: bmw5,  filename:'bmw-10.jpg')



r3_1 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r3-1.jpg')
r3_2 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r3-2.jpg')
r3_3 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r3-3.jpg')
r3_4 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r3-4.jpg')
r3_5 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r3-5.jpg')

r3_manhattan.photos.attach(io: r3_1, filename: 'r3-1.jpg')
r3_manhattan.photos.attach(io: r3_2, filename: 'r3-2.jpg')
r3_manhattan.photos.attach(io: r3_3, filename: 'r3-3.jpg')
r3_manhattan.photos.attach(io: r3_4, filename: 'r3-4.jpg')
r3_manhattan.photos.attach(io: r3_5, filename: 'r3-5.jpg')


r1m_1 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r1m-1.jpg')
r1m_2 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r1m-2.jpg')
r1m_3 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r1m-3.jpg')
r1m_4 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r1m-4.jpg')
r1m_5 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/r1m-5.jpg')

r1_manhattan.photos.attach(io: r1m_1, filename: 'r1m-1.jpg')
r1_manhattan.photos.attach(io: r1m_2, filename: 'r1m-2.jpg')
r1_manhattan.photos.attach(io: r1m_3, filename: 'r1m-3.jpg')
r1_manhattan.photos.attach(io: r1m_4, filename: 'r1m-4.jpg')
r1_manhattan.photos.attach(io: r1m_5, filename: 'r1m-5.jpg')

z9_1 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/z9-1.jpg')
z9_2 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/z9-2.jpg')
z9_3 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/z9-3.jpg')
z9_4 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/z9-4.jpg')
z9_5 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/z9-5.jpg')

z9_manhattan.photos.attach(io: z9_1, filename: 'z9-1.jpg')
z9_manhattan.photos.attach(io: z9_2, filename: 'z9-2.jpg')
z9_manhattan.photos.attach(io: z9_3, filename: 'z9-3.jpg')
z9_manhattan.photos.attach(io: z9_4, filename: 'z9-4.jpg')
z9_manhattan.photos.attach(io: z9_5, filename: 'z9-5.jpg')

ha_1 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/harley-s1.jpg')
ha_2 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/harley-s2.jpg')
ha_3 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/harley-s3.jpg')
ha_4 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/harley-s4.jpg')
ha_5 = open('https://bnb-seeds.s3.us-east-1.amazonaws.com/harley-s5.jpg')

harley_manhattan.photos.attach(io: ha_1, filename: 'harley-s1.jpg')
harley_manhattan.photos.attach(io: ha_2, filename: 'harley-s2.jpg')
harley_manhattan.photos.attach(io: ha_3, filename: 'harley-s3.jpg')
harley_manhattan.photos.attach(io: ha_4, filename: 'harley-s4.jpg')
harley_manhattan.photos.attach(io: ha_5, filename: 'harley-s5.jpg')
end