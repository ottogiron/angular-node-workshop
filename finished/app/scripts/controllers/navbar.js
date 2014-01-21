'use strict';

angular.module('finishedApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
    	'title': 'Todos',
    	'link': '#todos'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
