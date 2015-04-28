//templates.js

//new angular module
var burgers = angular.module('burgers', ['ngRoute']);

//configure routes
burgers.config(function($routeProvider) {
  $routeProvider
  
    //route for home page
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })
    
    //about
    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })
    
    //menu
    .when('/menu', {
      templateUrl : 'pages/menu.html',
      controller  : 'menuController'
    })
    
    //reserve
    .when('/reserve', {
      templateUrl : 'pages/reserve.html',
      controller  : 'reserveController'
    });
});


//create controller and inject Angular $scope
burgers.controller('mainController', function($scope, $location) {
  $scope.message = 'The Best Around Town';
  
  $scope.isActive = function(route) { return route === $location.path(); };
});

burgers.controller('aboutController', function($scope, $location) {
  $scope.message = 'Look! I am an about page!';
  
  $scope.isActive = function(route) { return route === $location.path(); };
});

burgers.controller('menuController', function($scope, $location) {
  $scope.message = 'Contact us JK this is just a demo';
  
  $scope.isActive = function(route) { return route === $location.path(); };
});

burgers.controller('reserveController', function($scope, $location) {
  $scope.message = 'make a reservation';
  
  $scope.isActive = function(route) { return route === $location.path(); };
});