recommendNChill.controller('movieListController', ['movieSearchService', '$resource', function(movieSearchService, $resource){
  var self = this;

  Movie = $resource('/movies');

  var apiResponse = Movie.query().$promise
  .then(function(response){
    self.movies = response;
    console.log(self.movies);

  });
  // self.movies = apiResponse;

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
