(function() {

    var app = angular.module('customersApp', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
          url: '/',
          controller: 'homeController',
          templateUrl: 'app/views/home.html',
          title:"hi"
        })

        .state('products', {
          url: '/products',
          controller: 'productController',
          templateUrl: 'app/views/products.html',
          title:"bye"
        });

    $urlRouterProvider.otherwise("/");

  }]);


}());