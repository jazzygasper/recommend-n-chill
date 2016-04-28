recommendNChill.service('movieSearchService', ['$http', function($http){
  var self = this;

  self.searchFor = function(title) {
    var url = 'https://api.themoviedb.org/3/search/movie?query=';
    var key = '&api_key=40b339f0fde8924dd93e33c92bb397ef';
    return $http.get(url + title + key)
      .then(_handleApiResponse);
  };

  function _handleApiResponse(response) {
    var results = response.data.results;
    return results.map(function(response){
      return { title: response.title,
                  id: response.id,
         poster_path: response.poster_path};
    });
  }
}]);
