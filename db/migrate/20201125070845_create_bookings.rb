class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :ride_id, null: false
      t.integer :rider_id, null: false
      t.integer :num_riders, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false

      t.timestamps
    end
    add_index :bookings, :rider_id, unique: true
    add_index :bookings, :ride_id, unique: true
  end
end
