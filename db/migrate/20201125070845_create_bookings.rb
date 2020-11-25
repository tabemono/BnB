class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :ride_id, null: false
      t.integer :rider_id, null: false
      t.datetime :check_in, null: false
      t.datetime :check_out, null: false

      t.timestamps
    end
    add_index :bookings, :rider_id
    add_index :bookings, :ride_id
  end
end
