recommendNChill.controller('MoviesController', function($scope, Movie, $routeParams) {
    //Grab all the comments from the server
    $scope.moviesList = Movie.query({user_Id: $routeParams.id});

    //Define a 'save' method which will be called from the view.
    $scope.save = function() {
        //Create the comment object to be sent to the server
        var obj = new Movie({name: $scope.name, body: $scope.body, user_Id: $routeParams.id});

        //Attempt a save to the back-end
        obj.$save(function(response) {

            //If we're successful then add the response (the object as the server sees it)
            // to our collection of comments
            $scope.moviesList.unshift(response);

            //Empty the name & body
            $scope.name = $scope.body = "";

        }, function(response) {

            //If there's a failure set the 'errors' scope variable so it'll be reflected in the view.
            $scope.errors = response.data.errors;
        });
    };
});
