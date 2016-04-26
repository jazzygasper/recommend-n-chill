describe('recommendNChill', function(){
  it('shows a list of movies', function(){
    browser.get('/');
    var movies = $$('#movies p');
    expect(movies.first().getText()).toEqual('Armageddon');
    expect(movies.last().getText()).toEqual('Scorpion King');
  });
});
