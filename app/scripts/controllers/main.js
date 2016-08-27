'use strict';

/**
 * @ngdoc function
 * @name boopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the boopApp
 */
angular.module('boopApp')
  .controller('MainCtrl', function (pConnection, $window, $scope, $log) {
    $scope.messages = [];
    var channel = pConnection.subscribe('test_channel', $scope);

    channel.on('my_event', function(e) {
      $log.info('Got the data: ', e);
      $scope.messages.push(e.data);
    });

    channel.on('my_event', function(e) {
      $log.info('Another callback on the same event: ', e.data);
    });
  });
