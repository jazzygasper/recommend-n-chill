describe('recommendNChill', function(){
  var movies = $$('#movies p span');
  var movieCount = 2;

  it('shows a list of movies', function(){
    browser.get('/');
    expect(movies.first().getText()).toEqual('Armageddon');
    expect(movies.last().getText()).toEqual('Scorpion King');
  });

  it('can add a film to list', function(){
    browser.get('/');
    $('#new-movie').sendKeys('Pitch Perfect');
    $('#add-movie').click();

    expect(movies.last().getText()).toEqual('Pitch Perfect');
  });

  it('can remove a film from list', function(){
    browser.get('/');
    $('#remove-movie').click();
    expect(movies.count()).toEqual(movieCount - 1);
  });
});
