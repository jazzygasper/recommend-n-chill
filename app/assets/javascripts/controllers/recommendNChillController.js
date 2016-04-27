recommendNChill.controller('recommendNChill', ['MovieSearchService', function(MovieSearchService){
  var self = this;
  self.movieSearchResults = [];
  self.movies = ['Armageddon', 'Scorpion King'];

  self.searchForMovie = function(title) {
    MovieSearchService.searchFor(title)
    .then(_storeMovieResults)
  };

  function _storeMovieResults(result) {
    self.movieSearchResults = result;
  };

  self.addMovie = function(newMovie){
    var movieIndex = self.movieSearchResults.indexOf(newMovie);
    var movie = self.movieSearchResults.splice(movieIndex, 1);
    this.movies.push(movie [0]);
  };

  self.removeMovie = function(movie){
    var index = this.movies.indexOf(movie);
    this.movies.splice(index, 1);
  };

}]);
