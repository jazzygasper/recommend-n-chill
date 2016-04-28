describe('recommendNChill', function(){
  var list = $$('#movies p span');

  it('displays list of movies', function(){
    browser.get('/');
    expect(list.first().getText()).toEqual('Armageddon');
    expect(list.last().getText()).toEqual('Scorpion King');
  });
});
