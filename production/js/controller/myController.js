define([
    '../module/myModule',
], function(myApp) {
    'use strict';
    myApp.controller('tableCtrl', ['$scope', function($scope) {
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