angular.module('TodoApp.services', [])

.factory('Todos', function ($http) {
  var Todos = {}
  var getTodos = function() {
    return $http({
      method: 'GET',
      url: '/api/todos'
    })
    .then(function(resp) {
      return resp.data
    })
  }
  var addTodo = function(todoText) {
    return $http({
      method: 'POST',
      url: '/api/todos',
      data: {
        text: todoText
      }
    })
    .then(function(resp){
      console.log('resp', resp)
      return resp.data
    })
  }
  return {
    getTodos: getTodos,
    addTodo: addTodo
  }
})
