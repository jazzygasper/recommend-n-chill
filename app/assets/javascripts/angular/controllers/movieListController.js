recommendNChill.controller('movieListController', ['movieSearchService', function(movieSearchService){
  var self = this;

  self.movies = [];

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
