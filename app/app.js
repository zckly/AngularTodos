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
      templateUrl: './todolist/todolist.html',
      controller: 'TodoListController'
    })
    .when('/new', {
      templateUrl: './todoform/todoform.html',
      controller: 'TodoFormController'
    })
})