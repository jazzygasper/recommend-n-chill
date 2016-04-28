require 'rails_helper'
#
# RSpec.describe Movie, type: :model do
#   pending "add some examples to (or delete) #{__FILE__}"
# end
describe Movie, type: :model do
  subject { Movie.new(title: "Taken", movie_id: 1, movie_url: '/Taken_poster.jpg') }
  it {should validate_uniqueness_of(:movie_id)}

  it {should validate_presence_of(:title)}
  it {should validate_presence_of(:movie_id)}
  it {should validate_presence_of(:movie_url)}

end
