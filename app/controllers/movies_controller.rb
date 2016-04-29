class MoviesController < ApplicationController
  respond_to :json
  def index
    render json: Movie.all
  end

  def create
    respond_with Movie.create(movie_params)
  end

  def destroy
    respond_with Movie.destroy(params[:id])
  end

  def show
    respond_with Movie.find(params[:id])
    # respond_to do |format|
    #   format.html
    #   format.json { render json: @movie }
    # end
  end

  private

    def movie_params
      params.require(:movie).permit(:title, :movie_id, :movie_url)
    end
end
