var recommendNChill = angular.module('recommendNChill', ['ngRoute']);

recommendNChill.config(['$routeProvider', function($routeProvider){
  return $routeProvider.
    when('/users/sign_up', {
      templateUrl: '../templates/sign_up.html',
      controller: 'recommendNChill'
    }).
    otherwise({
      templateUrl: '../templates/home.html',
      controller: 'recommendNChill'
    });
  }]);
