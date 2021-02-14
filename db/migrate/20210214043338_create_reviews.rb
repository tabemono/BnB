class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
       t.text :body, null: false
      t.float :rating, null: false
      t.integer :rider_id, null: false
      t.integer :ride_id, null: false
      t.timestamps
    end
    add_index :reviews, :ride_id
  end
end
