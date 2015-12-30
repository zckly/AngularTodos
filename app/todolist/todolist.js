angular.module('TodoApp.TodoList', [])

.controller('TodoListController', function ($scope, Todos) {
  $scope.data = {}
  $scope.getTodos = function() { //call the service
    Todos.getTodos()
    .then(function(data) {
      console.log('data', data)
      $scope.data = data
    })
    .catch(function(err) {
      console.error(err);
    })
  }
  $scope.getTodos(); //first call
});
