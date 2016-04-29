describe('movieSelectService', function(){
  beforeEach(module('recommendNChill'));

  var movieSelectService, httpBackend;

  beforeEach(inject(function(_movieSelectService_, $httpBackend){
    movieSelectService = _movieSelectService_;
    httpBackend = $httpBackend;
  }));

  it('returns a movie from external using id', function(){
    var movieData = {title: 'Not Seen', id: 252, poster_path: 'notseen_poster.jpg', released_year: '2015'};
    var movie = {title: 'Not Seen', id: 252, poster_path: 'notseen_poster.jpg'};

    httpBackend.expectGET('https://api.themoviedb.org/3/movie/'+ 252 + '?api_key=40b339f0fde8924dd93e33c92bb397ef').respond(movieData);

    movieSelectService.fetchMovie()
      .then(function(response){
        expect(response).toEqual(movie);
    httpBackend.flush();
    });
  });
});
