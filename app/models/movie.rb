class Movie < ActiveRecord::Base
  validates :movie_id, uniqueness:true, presence:true
  validates :title, presence:true
  validates :movie_url, presence:true
end
