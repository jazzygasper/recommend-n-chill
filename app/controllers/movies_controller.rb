class MoviesController < ApplicationController
  respond_to :json
  def index
    render  json: Movie.all
  end

  def destroy
    respond_with Movie.destroy(params[:id])
  end

  def create
    respond_with Movie.create(movie_params)
  end

  # def show
  #   @movie = Movie.find(params[:id])
  #
  # end

  private

    def movie_params
      params.require(:movie).permit(:title, :movie_id, :movie_url)
    end
end
