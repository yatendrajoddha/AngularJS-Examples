var app = angular.module("myApp", []);
app.controller("myController", ['$scope', '$http', function ($scope, $http) {
    $http.get("apipath").then(function (response) {
        $scope.Counties = response.data;
    });

    $scope.myFilter = "";
}]);