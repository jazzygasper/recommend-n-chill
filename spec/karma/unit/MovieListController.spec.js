describe('movieListController', function(){
  beforeEach(module('recommendNChill'));

  var ctrl, movieSearchService;
  var deffered, scope;
  var movieSearch = 'Taken';
  var movie1 = {title: 'taken 1', id: 10, poster_path: 'taken_1_image.jpg'};
  var movie2 = {title: 'taken 2', id: 20, poster_path: 'taken_2_image.jpg'};

  var movieTitleList = [movie1, movie2];
  var movies = ['Armageddon', 'Scorpion King'];

  beforeEach(inject(function($controller, $rootScope, $q){
    deffered = $q.defer();

    movieSearchService = jasmine.createSpyObj('movieSearchService', ['searchFor']);
    movieSearchService.searchFor.and.returnValue($q.when(movieTitleList));

    scope = $rootScope

    ctrl = $controller('movieListController', {
      movieSearchService: movieSearchService
    });
  }));

  it('shows search results', function(){
    ctrl.searchForMovie(movieSearch);
    scope.$apply();
    expect(ctrl.movieSearchResults).toEqual(movieTitleList);
  });

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
