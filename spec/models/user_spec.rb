require 'rails_helper'

describe User, type: :model do
  it { is_expected.to have_many :movies }
end

# RSpec.describe User, type: :model do
#   pending "add some examples to (or delete) #{__FILE__}"
# end
