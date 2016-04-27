describe('MovieSearchService', function() {
  beforeEach(module('recommendNChill'));

  var MovieSearchService, httpBackend;

  var movieData = [{title: 'taken 1', id: 10}, {title: 'taken 2', id: 202}]

  beforeEach(inject(function(_MovieSearchService_, $httpBackend) {
    MovieSearchService = _MovieSearchService_;
    httpBackend = $httpBackend;
  }));

  it('returns movie titles based on parameter', function() {
    httpBackend.expectGET('https://api.themoviedb.org/3/search/movie?query=taken&api_key=40b339f0fde8924dd93e33c92bb397ef').respond(movieData);
    MovieSearchService.searchFor('taken').then(function(results) {
      expect(results).toEqual([{title: 'taken 1', id: 10},{title:'taken 2', id:202}]);
    });
    httpBackend.flush();
  });
});
