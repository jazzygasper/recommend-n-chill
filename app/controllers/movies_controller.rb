class MoviesController < ApplicationController
  respond_to :json
  def index
    render json: Movie.all
  end

  def create
    Movie.create(movie_params)
    render nothing: true, status: 201
  end

  def destroy
    Movie.destroy(params[:id])
    render nothing: true, status: 204
  end


  private

    def movie_params
      params.require(:movie).permit(:title, :movie_id, :movie_url)
    end
end
