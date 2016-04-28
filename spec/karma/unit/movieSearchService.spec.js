describe('movieSearchService', function(){
  beforeEach(module('recommendNChill'));

  var movieSearchService, httpBackend;
  var movieData = { 'results':[
      {title: 'taken 1', id: 10, poster_path: 'taken_1_poster.jpg'},
      {title: 'taken 2', id: 20, poster_path: 'taken_2_poster.jpg'}
    ]};

  beforeEach(inject(function(_movieSearchService_, $httpBackend){
    movieSearchService = _movieSearchService_;
    httpBackend = $httpBackend;
  }));

  it('gets list of movies', function(){
    httpBackend.expectGET('https://api.themoviedb.org/3/search/movie?query=taken&api_key=40b339f0fde8924dd93e33c92bb397ef').respond(movieData);
    movieSearchService.searchFor('taken')
      .then(function(results){
        expect(results).toEqual(movieData.results);
    });
    httpBackend.flush();
  });
});
  
