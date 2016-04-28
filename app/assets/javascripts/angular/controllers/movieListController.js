recommendNChill.controller('movieListController', ['movieSearchService', '$resource', function(movieSearchService, $resource){
  var self = this;

  Movie = $resource('/movies');

  self.movies = Movie.query();

  self.searchForMovie = function(title) {
    movieSearchService.searchFor(title)
    .then(_storeMovieResults);
  };

  self.addMovie = function(movie) {
    self.movies.unshift(movie);
    self.movieSearchResults = null;
  };

  self.removeMovie = function(movie) {
    var index = self.movies.indexOf(movie);
    self.movies.splice(index, 1);
  };

  function _storeMovieResults(result) {
    self.movieSearchResults = result;
  }


}]);
