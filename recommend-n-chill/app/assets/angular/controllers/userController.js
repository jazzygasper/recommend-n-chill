recommendNChill.controller('UserIndexController', function($scope, User) {
    //Grab all forums from the server
    $scope.userList = User.query();

    //Destroy method for deleting a forum
    $scope.destroy = function(index) {

        //Tell the server to remove the object
        User.remove({id: $scope.userList[index].id}, function() {
            //If successful, remove it from our collection
            $scope.userList.splice(index, 1);
        });
    };

});

recommendNChill.controller('UserShowController', function($scope, User, Movie, $routeParams) {
    //Grab the forum from the server
    $scope.user = User.get({id: $routeParams.id});
});
