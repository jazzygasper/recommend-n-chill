require 'rails_helper'

describe "Movies API", :type => :request do
  describe "GET /movies" do
    it "returns all the movies" do
      Movie.create( title: "Taken", movie_id: 1, movie_url: '/Taken_poster.jpg')
      Movie.create( title: "Matrix", movie_id: 2, movie_url: '/Matrix_poster.jpg')
      Movie.create( title: "Inception", movie_id: 3, movie_url: '/Inception_poster.jpg')

      get "/movies", {}, { "Accept" => "application/json" }

      expect(response.status).to eq 200

      body = JSON.parse(response.body)
      movie_titles = body.map { |m| m["title"] }

      expect(movie_titles).to match_array(["Taken",
                                           "Matrix",
                                           "Inception"])
    end
  end


  describe "DESTROY /movies/:id" do
    it "delete movie from database" do
      movie_1 = Movie.create( title: "Taken", movie_id: 1, movie_url: '/Taken_poster.jpg')
      movie_2 = Movie.create( title: "Matrix", movie_id: 2, movie_url: '/Matrix_poster.jpg')
      movie_3 = Movie.create( title: "Inception", movie_id: 24562, movie_url: '/Inception_poster.jpg')

      delete "/movies/#{movie_2.id}", {}, { "Accept" => "application/json" }

      expect(response.status).to eq 204

      expect(Movie.count).to eq 2

    end
  end

  describe "CREATE /movies" do
    it "adds a movie" do

      expect(Movie.count).to eq 0

      post "/movies", movie: {title: "Inception", movie_id: 3, movie_url: '/Inception_poster.jpg'}, format: :json
      expect(response.status).to eq 201

      expect(Movie.count).to eq 1

    end
  end

  # describe "SHOW /movies/:id" do
  #   it "show one movie" do
  #     movie_1 = Movie.create( title: "Taken", movie_id: 1, movie_url: '/Taken_poster.jpg')
  #     movie_2 = Movie.create( title: "Matrix", movie_id: 2, movie_url: '/Matrix_poster.jpg')
  #
  #     get "/movies/#{movie_1.id}", {}, { "Accept" => "application/json" }
  #     # post :create, movie:{title: "Inception", movie_id: 3, movie_url: '/Inception_poster.jpg'}
  #     expect(response.status).to eq 200
  #
  #     body = JSON.parse(response.body)
  #     movie_titles = body["title"]
  #
  #     expect(movie_titles).to eq("Taken")
  #     # expect(Movie.find(movie_1.id).title).to eq ('Taken')
  #   end
  # end
end
