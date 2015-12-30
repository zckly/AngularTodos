var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Todo = require('./models/Todo');
var config = require('./config');
var request = require('request');

var app = express();

//mongoose setup
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

//middleware
app.use(cors())
app.set('port', process.env.PORT || 8080);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

//our lonely route for our single page app
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/todos', function(req, res) {
  // use mongoose to get all todos in the database
  Todo.find(function(err, todos) {
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
          res.send(err)
      res.json(todos); // return all todos in JSON format
  });
});

// create todo and send back all todos after creation
app.post('/api/todos', function(req, res) {
  // create a todo
  Todo.create({
      text : req.body.text,
  }, function(err, todo) {
      if (err)
          res.send(err);
      // get and return all the todos after you create another
      Todo.find(function(err, todos) {
          if (err)
            res.send(err)
          res.json(todos);
      });
  });
});

// delete a todo
app.delete('/api/todos/:todo_id', function(req, res) {
  Todo.remove({
    _id : req.params.todo_id
  }, function(err, todo) {
    if (err)
      res.send(err);
    // get and return all the todos after you delete one
    Todo.find(function(err, todos) {
      if (err)
        res.send(err)
      res.json(todos);
    });
  });
});


var server = require('http').createServer(app)
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
