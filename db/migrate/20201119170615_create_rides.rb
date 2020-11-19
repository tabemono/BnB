class CreateRides < ActiveRecord::Migration[5.2]
  def change
    create_table :rides do |t|
      t.string :model, null: false
      t.string :brand, null: false
      t.string :style, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.float :lat, null: false
      t.float :lng, null:false
      t.integer :owner_id, null: false
      t.string :borough, null: false
      t.string  :location, null: false

      t.timestamps
    end

      
  end
end
