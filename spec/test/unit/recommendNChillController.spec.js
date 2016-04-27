describe('recommendNChillController', function(){
  beforeEach(module('recommendNChill'));

  var ctrl, MovieSearchService;
  var deferred, scope;

  var movieSearch = 'taken';
  var movieTitleList = ['taken 1', 'taken 2'];

  beforeEach(inject(function($controller, $rootScope, $q){
    deferred = $q.defer();

    MovieSearchService = jasmine.createSpyObj('MovieSearchService', ['searchFor']);
    MovieSearchService.searchFor.and.returnValue($q.when(movieTitleList));

    scope = $rootScope;

    ctrl = $controller('recommendNChill', {
      MovieSearchService: MovieSearchService
    });
  }));

  it('has a list of movies', function(){
    var movies = ['Armageddon', 'Scorpion King'];
    expect(ctrl.movies).toEqual(movies);
  });

  it('fetches movie titles based on search from API', function() {
    ctrl.searchForMovie(movieSearch)
    scope.$apply();
    expect(ctrl.movieSearchResults).toEqual(movieTitleList);
  });

  it('adds a movie to the list', function(){
    ctrl.searchForMovie(movieSearch)
    scope.$apply();
    ctrl.addMovie('taken 1');
    expect(ctrl.movies).toContain('taken 1');
  });

  it('removes a movie to the list', function(){
    var movies = ['Armageddon', 'Scorpion King'];
    ctrl.removeMovie('Armageddon');
    expect(ctrl.movies).toEqual(['Scorpion King']);
  });

});
