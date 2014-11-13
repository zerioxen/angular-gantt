'use strict';
gantt.directive('ganttTimespan', ['GanttDirectiveBuilder', function(Builder) {
    var builder = new Builder('ganttTimespan');
    builder.controller = function($scope, $element) {
        $scope.timespan.$element = $element;
    };
    return builder.build();
}]);