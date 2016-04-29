recommendNChill.service('movieSelectService', ['$http', function($http){
  var self = this;
  var http = $http;

  self.fetchMovie = function(randomNumber){
    return http.get('https://api.themoviedb.org/3/movie/'+ randomNumber + '?api_key=40b339f0fde8924dd93e33c92bb397ef')
      .then(_handleApiResponse);
  };

  function _handleApiResponse(response) {
    return { title: response.data.title,
                id: response.data.id,
       poster_path: response.data.poster_path};
  }

  self.generateRandomNumber = function (){
    randomNumber = Math.floor(Math.random() * (37000 - 100) + 100);
    return randomNumber;
  };
}]);
