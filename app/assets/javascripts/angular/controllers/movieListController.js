recommendNChill.controller('movieListController', ['movieSearchService', function(movieSearchService){
  var self = this;

  self.movies = [];

  self.searchForMovie = function(title) {
    movieSearchService.searchFor(title)
    .then(_storeMovieResults);
  };

  self.addMovie = function(movieId) {
    var result = self.movieSearchResults.filter(function(movie){
      return movieId === movie.id;
    });
    self.movies.unshift(result[0]);
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
