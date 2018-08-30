var app = angular.module("myApp", []);
app.controller("myController", ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.Name = "Yatendra";
    $rootScope.Company = "Infosense";
}]);
app.controller("myController2", function ($scope) {
    $scope.Name = "Arif";
});