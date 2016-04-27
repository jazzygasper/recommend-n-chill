class MovieController < ApplicationController
  belongs_to :User
  respond_to :json
end
