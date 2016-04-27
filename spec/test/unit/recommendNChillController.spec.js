describe('recommendNChillController', function(){
  beforeEach(module('recommendNChill'));

  var ctrl, MovieSearchService;
  var deferred, scope;

  var movieSearch = 'taken';
  var movie1 = {title: 'taken 1', id: 10};
  var movie2 = {title: 'taken 2', id: 202};

  var movieTitleList = [movie1,movie2];

  beforeEach(inject(function($controller, $rootScope, $q){
    deferred = $q.defer();

    MovieSearchService = jasmine.createSpyObj('MovieSearchService', ['searchFor']);
    MovieSearchService.searchFor.and.returnValue($q.when(movieTitleList));

    scope = $rootScope;

    ctrl = $controller('recommendNChill', {
      MovieSearchService: MovieSearchService
    });
  }));

  it('fetches movie titles based on search from API', function() {
    ctrl.searchForMovie(movieSearch);
    scope.$apply();
    expect(ctrl.movieSearchResults).toEqual(movieTitleList);
  });

  it('adds a movie to the list', function(){
    ctrl.searchForMovie(movieSearch);
    scope.$apply();
    ctrl.addMovie(10);

    expect(ctrl.movies).toContain(movie1);
  });

  it('removes a movie to the list', function(){
    ctrl.movies = [movie1, movie2];
    ctrl.removeMovie(movie1.id);
    expect(ctrl.movies).toEqual([movie2]);
  });

});
