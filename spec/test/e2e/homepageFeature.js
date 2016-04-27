describe('recommendNChill', function(){

  it('see list of search results', function(){
    browser.get('/');
    $('#new-movie').sendKeys('taken');
    $('#search').click();
    // var movieSearchResults = element.all(by.repeater('movie in controller.movieSearchResults'));
    var movieSearchResults = element(by.css('.search-results')).$$('p');
    expect(movieSearchResults.getText()).toContain('Taken 2');
  });

  it('add movie to watched list', function(){
    browser.get('/');
    $('#new-movie').sendKeys('taken');
    $('#search').click();
    $('#add').click();
    var movieWatchedList = element(by.css('.watched-list')).$$('p');
    expect(movieWatchedList.getText()).toContain('Taken');
  });

  it('can remove a film from list', function(){
    browser.get('/');
    $('#new-movie').sendKeys('taken');
    $('#search').click();
    $('#add').click();
    $('#remove-movie').click();
    var movieWatchedList = element(by.css('.watched-list')).$$('p');
    expect(movieWatchedList.getText()).not.toContain('Taken');
  });
});
