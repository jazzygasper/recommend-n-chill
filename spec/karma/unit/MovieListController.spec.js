describe('movieListController', function(){
  beforeEach(module('recommendNChill'));

  var ctrl, movieSearchService;
  var deffered, scope;
  var movieSearch = 'Taken';
  var movie1 = {title: 'taken 1', id: 10, poster_path: 'taken_1_image.jpg'};
  var movie2 = {title: 'taken 2', id: 20, poster_path: 'taken_2_image.jpg'};

  var movieTitleList = [movie1, movie2];


  beforeEach(inject(function($controller, $rootScope, $q){
    deffered = $q.defer();

    movieSearchService = jasmine.createSpyObj('movieSearchService', ['searchFor']);
    movieSearchService.searchFor.and.returnValue($q.when(movieTitleList));

    scope = $rootScope;

    ctrl = $controller('movieListController', {
      movieSearchService: movieSearchService
    });
  }));

  it('shows search results', function(){
    ctrl.searchForMovie(movieSearch);
    scope.$apply();
    expect(ctrl.movieSearchResults).toEqual(movieTitleList);
  });

  xit('has a list of movies', function(){
    expect(ctrl.movies).toEqual(movies);
  });

  it('adds movie to list', function() {
    ctrl.addMovie(movie1);
    expect(ctrl.movies).toContain(movie1);
  });

  it('removes movies', function() {
    ctrl.addMovie(movie1);
    ctrl.addMovie(movie2);
    ctrl.removeMovie(movie1);
    expect(ctrl.movies).toEqual([movie2]);
  });
});
