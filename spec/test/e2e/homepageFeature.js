describe('recommendNChill', function(){
  var movies = $$('#movies p');

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

});
