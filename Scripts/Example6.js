var app = angular.module("myApp", []);
app.controller("myController", ['$scope', function ($scope) {
   
    $scope.Cities = [{
        id: 1, name: 'Ahmedabad'
    },
    {
        id: 2, name: 'Rajkot'
    },
    {
        id: 3, name: 'Gandhinagar'
    },
    {
        id: 4, name: 'Surat'
    },
    {
        id: 5, name: 'Jamnagar'
    }];

    $scope.SelectedCity = "";
}]);