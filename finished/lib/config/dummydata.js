'use strict';

var mongoose = require('mongoose'),
  Thing = mongoose.model('Thing'),
  Todo = mongoose.model('Todo');


Todo.find({}).remove(function(){
	Todo.create({
		title: 'Task 1',
		complete: true
	},
	{
		title: 'Task 2',
		complete: false
	},
	{
		title: 'Task 3',
		complete: false
	},
	{
		title: 'Task 4',
		complete: true
	},function(){
		console.log("Finished created todo samples");
	});
});

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
    name : 'HTML5 Boilerplate',
    info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, {
    name : 'Karma',
    info : 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, {
    name : 'Express',
    info : 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, {
    name : 'MongoDB + Mongoose',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});



