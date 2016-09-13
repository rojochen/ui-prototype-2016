define([
    '../module/myApp',
], function(myApp) {
    'use strict';
    myApp.controller('ngTable', ['$scope', function($scope) {
        $scope.data = [{
            name: 'Moroni',
            age: 50
        }, {
            name: 'Moroni',
            age: 50
        }];

        $scope.tableParams = new NgTableParams({}, {
            dataset: data
        });
    }]);

    return myApp;
});