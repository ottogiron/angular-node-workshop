'use strict';

angular.module('finishedApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular'
])
  .config(function ($routeProvider, $locationProvider,RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/todos', {
        templateUrl: 'partials/todos/list',
        controller: 'TodoCtrl'
      })
     .otherwise({
        redirectTo: '/'
      });
      
      RestangularProvider.setRestangularFields({
                id:'_id'
        });
      
    //$locationProvider.html5Mode(true);
  });