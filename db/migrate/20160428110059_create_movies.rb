class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :movie_id
      t.string :movie_url

      t.timestamps null: false
    end
  end
end
