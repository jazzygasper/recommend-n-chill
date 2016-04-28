describe('movieListController', function(){
  beforeEach(module('recommendNChill'));

  var ctrl, movieSearchService, httpBackend;
  var deffered, scope;

  var movieSearch = 'Taken';
  var movie1 = {title: 'taken 1', id: 10, poster_path: 'taken_1_image.jpg'};
  var movie2 = {title: 'taken 2', id: 20, poster_path: 'taken_2_image.jpg'};

  var movieTitleList = [movie1, movie2];


  beforeEach(inject(function($controller, $rootScope, $q, $httpBackend){
    deffered = $q.defer();

    httpBackend = $httpBackend;

    movieSearchService = jasmine.createSpyObj('movieSearchService', ['searchFor']);
    movieSearchService.searchFor.and.returnValue($q.when(movieTitleList));

    scope = $rootScope;

    ctrl = $controller('movieListController', {
      movieSearchService: movieSearchService

    });

    httpBackend.expectGET('/movies').respond(movieTitleList);

  }));

  it('shows search results', function(){
    ctrl.searchForMovie(movieSearch);
    scope.$apply();
    expect(ctrl.movieSearchResults).toEqual(movieTitleList);
  });

  it('has a list of movies', function(){
    expect(ctrl.movies).toEqual(movieTitleList);
  });

  it('adds movie to list', function() {
    expect(ctrl.movies).toContain(movie1);
  });

  it('removes movies', function() {
    ctrl.addMovie(movie1);
    ctrl.addMovie(movie2);
    ctrl.removeMovie(movie1);
    expect(ctrl.movies).toEqual([movie2]);
  });
});
