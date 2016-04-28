recommendNChill.controller('movieListController', function(){
  var self = this;

  self.movies = ['Armageddon', 'Scorpion King'];

  self.addMovie = function(movie) {
    self.movies.push(movie);
  }

  self.removeMovie = function(movie) {
    var index = self.movies.indexOf(movie);
    self.movies.splice(index, 1);
  }

});
