
  angular.module('customersApp')
      .controller('homeController', function($scope,$http) {

        $scope.users=[{name:'Oldman',age:50},
          {name:'Kid',age:7},
          {name:'Youngman',age:24}];

    });



