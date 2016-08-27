'use strict';

angular.module('boopApp')
  .directive('watch', function(pConnection) {
    return {
      restrict: 'E',
      scope: {
        channel: '@',
        event: '@'
      },
      template: '<div>Watching {{ channel }}/{{ event }}, last data: {{ data }}</div>',
      link: function watch($scope, element, attrs) {
        var channel = pConnection.subscribe(attrs.channel, $scope);

        channel.on(attrs.event, function(data) {
          $scope.data = data;
        });
      }
    };
  });
