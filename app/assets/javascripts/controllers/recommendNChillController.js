recommendNChill.controller('recommendNChill', function(){
  var self = this
  self.movies = ['Armageddon', 'Scorpion King'];

  self.addMovie = function(newMovie){
    this.movies.push(newMovie);
  };

});
