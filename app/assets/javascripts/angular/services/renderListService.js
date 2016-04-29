recommendNChill.service('renderListService', ['$resource', function($resource){
  var self = this;
  self.list = [];

  self.show = function(){
    self.list = $resource('/movies').query();
    return self.list
  };

}])
