recommendNChill.controller('movieListController', ['movieSearchService', function(movieSearchService){
  var self = this;

  self.movies = ['Armageddon', 'Scorpion King'];

  self.searchForMovie = function(title) {
    movieSearchService.searchFor(title)
    .then(_storeMovieResults);
  }

  function _storeMovieResults(result) {
    self.movieSearchResults = result;
  }

  self.addMovie = function(movie) {
    self.movies.push(movie);
  }

  self.removeMovie = function(movie) {
    var index = self.movies.indexOf(movie);
    self.movies.splice(index, 1);
  }

}]);
