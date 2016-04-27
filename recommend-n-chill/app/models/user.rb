class User < ActiveRecord::Base
  attr_accessible :name
  has_many :movies, :dependent => :destroy
end
