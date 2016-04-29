describe('renderListService', function(){
  beforeEach(module('recommendNChill'));

  var renderListService, httpBackend;
  var movieData = [
      {title: 'taken 1', id: 10, poster_path: 'taken_1_poster.jpg'},
      {title: 'taken 2', id: 20, poster_path: 'taken_2_poster.jpg'}
    ];

  beforeEach(inject(function(_renderListService_, $httpBackend){
    renderListService = _renderListService_;
    httpBackend = $httpBackend;
  }));

  it('gets list of movies', function(){
    httpBackend.expectGET('/movies').respond(movieData);
    renderListService.show()
      .then(function(results){
        expect(results[0].title).toEqual(movieData[0].title);
    });
    httpBackend.flush();
  });
});
