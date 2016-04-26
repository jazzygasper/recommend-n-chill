describe('recommendNChillController', function(){
  beforeEach(module('recommendNChill'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('recommendNChill');
  }));

  it('has a list of movies', function(){
    var movies = ['Armageddon', 'Scorpion King'];
    expect(ctrl.movies).toEqual(movies);
  });

  it('adds a movie to the list', function(){
    ctrl.addMovie('Pitch Perfect');
    expect(ctrl.movies.pop()).toEqual('Pitch Perfect');
  });

  it('removes a movie to the list', function(){
    var movies = ['Armageddon', 'Scorpion King'];
    ctrl.removeMovie('Armageddon');
    expect(ctrl.movies).toEqual(['Scorpion King']);
  });

});
