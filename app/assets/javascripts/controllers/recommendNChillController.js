recommendNChill.controller('recommendNChill', function(){
  var self = this;
  self.movies = ['Armageddon', 'Scorpion King'];

  self.addMovie = function(newMovie){
    this.movies.push(newMovie);
  };

  self.removeMovie = function(movie){
    var index = this.movies.indexOf(movie);
    this.movies.splice(index, 1);
  };

});
