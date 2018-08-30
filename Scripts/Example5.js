var app = angular.module("myApp", []);
app.controller("myController", ['$scope', function ($scope) {
    $scope.chkGender = true;
    $scope.gender = "Female";
}]);