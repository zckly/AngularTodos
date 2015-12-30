angular.module('TodoApp.TodoForm', [])

.controller('TodoFormController', function($scope, Todos) {
  $scope.text = ''
  $scope.addTodo = function(text) {
    console.log('text', text)
    Todos.addTodo($scope.text)
    .then(function(resp) {
      $scope.text = '' //clear form
    })
  }
})