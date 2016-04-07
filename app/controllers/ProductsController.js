
angular.module('customersApp')
    .controller('productController', function($scope,$http) {

      $scope.products = null;
      $http.get('https://api.myjson.com/bins/4lf9m').then(function successCallback(response) {
        console.log(response.data);
        $scope.products =response.data;
      }, function errorCallback(response) {
        console.log("error");
      });


    });



