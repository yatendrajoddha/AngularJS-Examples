var app = angular.module("myApp", []);
app.controller("myController", ['$scope', function ($scope) {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.fullName = "";
    $scope.getFullName = function () {
        $scope.fullName = $scope.firstName + " " + $scope.lastName;
    }
}]);