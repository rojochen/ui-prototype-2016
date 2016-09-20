define([
    'btModule',
], function(btModule) {
    'use strict';
    var app = angular.module('btModule');

    // template
    var head = '<div>This is head</div><component2></component2>';
    var body = '<div><h2 ng-click="vm.onclikc()" on-say-hello="ctrl.sayHello()">{{vm.hero.name}}</h2></div>';

    var component1 = {
        template: head,
        controller: headCtrl,
        controllerAs: 'vm'
    }
    var component2 = {
        bindings:{
            onSayHello: '&'
        },
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
        vm.sayHello=function(){
            alert('hello');
        }
    }

    function bodyCtrl($http) {
        var vm = this;
        vm.hero = {
            name: 'component2'
        };
        vm.onclikc=function(){
            alert('component2');
            vm.onSayHello();
        }
    }
});