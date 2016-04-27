recommendNChill.controller('recommendNChill', ['MovieSearchService', function(MovieSearchService){
  var self = this;
  self.movieSearchResults = [];
  self.movies = [];

  self.searchForMovie = function(title) {
    MovieSearchService.searchFor(title)
    .then(_storeMovieResults);
  };

  function _storeMovieResults(result) {
    self.movieSearchResults = result;
  }

  self.addMovie = function(newMovieId){
    console.log(newMovieId)
    // var newMovieNumber = parseInt(newMovieId)
    var result = self.movieSearchResults.filter( function(movieObject) {
        return movieObject.id === newMovieId;
      });
    if (_notAdded(result[0]))
      this.movies.push(result[0]);
      self.movieSearchResults = [];
  };

  self.removeMovie = function(movieId){
    var result = this.movies.filter( function(movieObject) {
        return movieObject.id === movieId;
      });
    this.movies.splice(result, 1);
  };

  function _notAdded(movie) {
    return self.movies.indexOf(movie) === -1;
  }
}]);
