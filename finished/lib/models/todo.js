'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Todo Schema
 */
var TodoSchema = new Schema({
  title: String,
  complete: Boolean,
 
});


mongoose.model('Todo', TodoSchema);