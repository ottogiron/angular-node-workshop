'use strict';

var mongoose = require('mongoose'),
    Todo = mongoose.model('Todo');

/**
 * Get awesome things
 */
module.exports = {
	list: function(req,res){
		   Todo.find(function(err, todos) {
                        res.send(todos);
                });
	},
	save: function(req,res){
		  var newTodo = new Todo(req.body);                
                newTodo.save(function(err){
                        if (!err) {
                              return res.send(newTodo);
                            } else {
                              return console.log(err);
                            }
                });               
	},
	del : function(req,res){
		  return Todo.findById(req.params.id,function(err,todo){
                        return todo.remove(function(err){
                                 if (!err) {
                                        console.log("removed "+req.params.id);
                                        return res.send('');
                                      } else {
                                        console.log(err);
                                      }
                        });
                });
	},
	update: function(req,res){
		
		return Todo.update({
			_id : req.params.id
		},{
			title: req.body.title,
			complete: req.body.complete
		}, function(err) {
			if(!err){
				console.log("Updated");
			}
			else{
				console.log(err);
			}
		});

	}	
};
