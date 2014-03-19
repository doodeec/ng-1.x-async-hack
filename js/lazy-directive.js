'use strict';

angular.module('different one', [])
    .directive('lazyList', function () {
        return {
            replace: true,
            restrict: 'EA',
            template: '<div>Lazy loaded directive</div>'
        }
    });
