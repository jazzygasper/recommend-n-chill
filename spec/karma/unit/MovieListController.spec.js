describe('movieListController', function(){
  beforeEach(module('recommendNChill'));

  var ctrl;
  var movies = ['Armageddon', 'Scorpion King'];

  beforeEach(inject(function($controller){
    ctrl = $controller('movieListController');
  }));

  it('has a list of movies', function(){
    expect(ctrl.movies).toEqual(movies);
  });

  it('adds movie to list', function() {
    ctrl.addMovie('Taken');
    expect(ctrl.movies).toContain('Taken');
  });

  it('removes movies', function() {
    ctrl.removeMovie('Armageddon');
    expect(ctrl.movies.length).toEqual(1);
  });
});
