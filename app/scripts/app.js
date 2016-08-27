'use strict';

/**
 * @ngdoc overview
 * @name boopApp
 * @description
 * # boopApp
 *
 * Main module of the application.
 */
angular
  .module('boopApp', [
    'ngResource',
    'ngRoute',
    'pusher-angular'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function (pConnectionProvider) {
    pConnectionProvider.configure(
      'f6169e7dc9bc0d5ab905',
      {
        cluster: 'eu',
        encrypted: true
      }
    );
  })
  .config(function ($logProvider) {
    $logProvider.debugEnabled();
  });
