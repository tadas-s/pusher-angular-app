'use strict';

/**
 * @ngdoc function
 * @name boopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the boopApp
 */
angular.module('boopApp')
  .controller('MainCtrl', function ($pusher, $window, $scope) {
    $scope.messages = [];

    var pusher = $pusher(new Pusher('f6169e7dc9bc0d5ab905', {
      cluster: 'eu',
      encrypted: true
    }));

    var channel = pusher.subscribe('test');
    pusher.bind('message', function(data) {
      console.log(data);
      $scope.messages.push(data);
    });
  });
