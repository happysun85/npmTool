var app = angular.module('MyApp',
    ['ng', 'ngRoute', 'ui.router',
      'MyApp.controllers'
    ]);

app.config(
  function($locationProvider, $routeProvider) {
    $routeProvider
        .when('/list', {
          templateUrl: '/list.html',
          controller: 'ListCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
  });

