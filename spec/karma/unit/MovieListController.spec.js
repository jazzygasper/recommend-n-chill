describe('movieListController', function(){
  beforeEach(module('recommendNChill'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('movieListController');
  }));

  it('has a list of movies', function(){
    var movies = ['Armageddon', 'Scorpion King'];
    expect(ctrl.movies).toEqual(movies);
  });
});
