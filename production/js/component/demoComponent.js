define([
    'btModule',
], function(btModule) {
    'use strict';
    var app = angular.module('btModule');

    // template
    var head = '<div><p>Hello</p><div ng-transclude></div><div>';
    var body = '<div>' +
        '<button ng-click="vm.onclick()">{{vm.hero.name}}</button>' +
        '<input type="text" ng-model="vm.name"></br>' +
        '<p>{{vm.name}}</p>' + '</div>';


    var component1 = {
        bindings: {},
        template: head,
        transclude: true,
        controller: headCtrl,
        controllerAs: 'vm'
    }
    var component2 = {
        bindings: {
            onSayHello: '&',
            name: '<'
        },
        transclude: true,
        template: body,
        controller: bodyCtrl,
        controllerAs: 'vm'
    }


    app.component('component1', component1).component('component2', component2);

    headCtrl.$inject = ['$http'];
    bodyCtrl.$inject = ['$http'];


    // controller
    function headCtrl($http) {
        var vm = this;
        vm.hero = {
            name: 'component1'
        };
        vm.sayHello = function() {
            alert('hello');
        }
        vm.name = "";
    }

    function bodyCtrl($http) {
        var vm = this;
        vm.hero = {
            name: 'This is body button'
        };
        vm.onclick = function() {
            alert('component2');
            vm.onSayHello();
        }
        vm.name = "";
    }
    return app;
});