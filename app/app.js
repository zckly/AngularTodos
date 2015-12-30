//still using ngRoute unfortunately
angular.module('TodoApp', [
  'TodoApp.services',
  'TodoApp.TodoList',
  'TodoApp.TodoForm',
  'ngRoute'
  ])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/todolist/todolist.html',
      controller: 'TodoListController'
    })
    .when('/new', {
      templateUrl: 'app/todoform/todoform.html',
      controller: 'TodoFormController'
    })
})