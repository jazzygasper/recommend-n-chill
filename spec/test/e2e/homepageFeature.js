describe('recommendNChill', function(){
  var movies = $$('#movies p span');
  var movieCount = 0;

  xit('shows a list of movies', function(){
    browser.get('/');
    expect(movies.first().getText()).toEqual('Armageddon');
    expect(movies.last().getText()).toEqual('Scorpion King');
  });

  it('see list of search results', function(){
    browser.get('/');
    $('#new-movie').sendKeys('taken');
    $('#search').click();
    // var movieSearchResults = element.all(by.repeater('movie in controller.movieSearchResults'));
    var movieSearchResults = element(by.css('.search-results')).$$('p')
    expect(movieSearchResults.getText()).toContain('Taken 2');
  });

  it('add movie to watched list', function(){
    browser.get('/');
    $('#new-movie').sendKeys('taken');
    $('#search').click();
    $('#add').click();
    var movieSearchResults = element.all(by.repeater('movie in controller.movies'));
    expect(movieSearchResults.getText()).toContain('Taken');
  });

  xit('can remove a film from list', function(){
    browser.get('/');
    $('#remove-movie').click();
    expect(movies.count()).toEqual(movieCount - 1);
  });
});
