describe('recommendNChill', function(){
  var list = $$('#movies p span');

  it('displays list of movies', function(){
    browser.get('/');
    expect(list.first().getText()).toEqual('Armageddon');
    expect(list.last().getText()).toEqual('Scorpion King');
  });

  it('adds a movie', function() {
    browser.get('/');
    $('#new-movie').sendKeys('Taken');
    $('#add-movie').click();
    expect(list.last().getText()).toEqual('Taken');
  })

  it('removes a movie from list', function() {
    browser.get('/');
    $('#remove-movie').click();
    expect(list.count()).toEqual(1);
  });
});
