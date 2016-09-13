define(['myModule'], function(myModule) {
    'use strict';
    var myApp = myModule;
    myApp.controller("tableCtrl",function($scope){
        $scope.con="angular";
    });
    return myApp;
});