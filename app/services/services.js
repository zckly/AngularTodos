angular.module('TodoApp.services', [])

.factory('Todos', function ($http) {
  var todos = {}
  var getTodos = function() {
    //get request to /api/todos
  }
  var addTodo = function(todoText) {
    //post request to /api/todos
  }
  return {
    getTodos: getTodos,
    addTodo: addTodo
  }
})