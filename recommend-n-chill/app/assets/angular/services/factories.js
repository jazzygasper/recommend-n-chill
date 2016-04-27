recommendNChill.factory = ('User', function($resource){
  return $resource('/users/:id', {id: '@id'});
});

recommendNChill.factory = ('Movie', function($resource){
  return $resource('/users/:user_id/movies', {user_id: '@user_id'});
});
