describe('movieListController', function(){
  beforeEach(module('recommendNChill'));

  var ctrl, movieSearchService, httpBackend;
  var deffered, scope;

  var movieSearch = 'Taken';
  var movie1 = {title: 'taken 1', movie_id: 10, poster_path: 'taken_1_image.jpg'};
  var movie2 = {title: 'taken 2', movie_id: 20, poster_path: 'taken_2_image.jpg'};

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
    httpBackend.flush();
    expect(ctrl.movies[0].title).toEqual(movieTitleList[0].title);
    // expect(ctrl.movies).toEqual([movie1, movie2]);
  });

  it('adds movie to list', function() {
    ctrl.addMovie(movie1);
    expect(ctrl.movies[0].title).toContain(movie1.title);
  });

  it('removes movies', function() {
    console.log(ctrl.movies);
    ctrl.addMovie(movie1);
    ctrl.addMovie(movie2);
    ctrl.removeMovie(movie1);
    console.log(ctrl.movies);
    expect(ctrl.movies.length).toEqual(1);
  });
});
