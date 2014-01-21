'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    todo = require('./controllers/todo');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);
  
  //Todos Routes
  app.get('/todos',todo.list);
  app.post('/todos',todo.save);
  app.delete('/todos/:id',todo.del);
  app.put('/todos/:id',todo.update	);
  

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
  
  
};