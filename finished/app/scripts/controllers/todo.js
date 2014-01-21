'use strict';

angular.module('finishedApp')
  .controller('TodoCtrl', function ($scope,Restangular) {
  	
  	var baseTodos = Restangular.all('todos');  	

	// This will query 
	baseTodos.getList().then(function(todos) {
		$scope.todos = todos;
	});
	
	$scope.del = function(todo){
		todo.remove().then(function(){
			  $scope.todos = _.without($scope.todos,todo);
		});
	};
	
	$scope.update = function(todo){
		todo.put().then(function(){
			
		});	
	};
	
	
	$scope.addTodo = function($event){
		if($event.which === 13){
			if($scope.todo.title){
			  baseTodos.post($scope.todo).then(function(newTodo){
			  	$scope.todos.push(newTodo);
			  	$scope.todo = {};
			  });
			}
		}	
	};
	


  });
