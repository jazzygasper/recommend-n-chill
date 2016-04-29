recommendNChill.controller('movieListController', ['movieSearchService', '$resource', function(movieSearchService, $resource){
  var self = this;
  var Movie = $resource('/movies');
  self.movies = [];

  _renderMovieList();

  self.searchForMovie = function(title) {
    movieSearchService.searchFor(title)
    .then(_storeMovieResults);
  };

  self.addMovie = function(movie) {
    var entry = Movie.save({title: movie.title,
                         movie_id: movie.id,
                        movie_url: movie.poster_path});

    self.movies.unshift(entry);
    self.movieSearchResults = null;
  };

  self.removeMovie = function(movie) {
    $resource('/movies/:id').remove({id: movie.id});
    _renderMovieList();
  };

  function _storeMovieResults(result) {
    self.movieSearchResults = result;
  }

  function _renderMovieList(){
    return Movie.query().$promise
    .then(function(response){
      self.movies = response;
    });
    }

}]);
