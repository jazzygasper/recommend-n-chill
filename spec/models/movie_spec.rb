require 'rails_helper'

describe Movie, type: :model do
  it { is_expected.to belong_to :user }
end

# RSpec.describe Movie, type: :model do
#   pending "add some examples to (or delete) #{__FILE__}"
# end
