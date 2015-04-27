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
    
    //contact
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    });
    
});


//create controller and inject Angular $scope
burgers.controller('mainController', function($scope) {
  $scope.message = 'This is the home page';
});

burgers.controller('aboutController', function($scope) {
  $scope.message = 'Look! I am an about page!';
});

burgers.controller('contactController', function($scope) {
  $scope.message = 'Contact us JK this is just a demo';
});