describe('recommendNChill', function(){
  var watchedList = $$('#movies p span');
  var searchList = $$('#search-results li p');

  beforeEach(function(){
    browser.get('/');
  });

  it('displays search results', function(){
    $('#new-movie').sendKeys('Taken');
    $('#search-movie').click();
    expect(searchList.getText()).toContain('Taken');
  });

  it('adds a movie', function(){
    $('#new-movie').sendKeys('Taken');
    $('#search-movie').click();
    $('#add-movie').click();
    expect(watchedList.last().getText()).toEqual('Taken');
  });

  it('removes a movie from list', function() {
    $('#new-movie').sendKeys('Taken');
    $('#search-movie').click();
    $('#add-movie').click();
    $('#remove-movie').click();
    expect(watchedList.count()).toEqual(0);
  });

  it('displays a recommended', function() {
  browser.get('/');
  $('#recommend-a-movie').click();
  // console.log($('#recommend-a-movie').getText());
  expect($('#recommendedMovie').getText()).toContain("Recommended movie:");
  expect($('#recommendedMovie').getText()).not.toEqual("Recommended movie:");
});
});
