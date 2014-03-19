// This is lazy loaded, when navigating to /list route.

var list = angular.module('call me whatever', []);

list.service('foo', function () {
    this.name = 'foo';
});

list.controller('List', function ($scope, foo, lazyService, $route) {
    $scope.message = 'some initial text';
    $scope.route = $route;

    $scope.alert = function () {
        alert(foo.name);
        alert(lazyService.first);
    };
});

list.factory('lazyService', function () {
    return {
        first: 'First Value',
        second: 'Second Value'
    }
});
