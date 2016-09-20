define([
    'btModule',
], function(btModule) {
    'use strict';
    var app = angular.module('btModule');

    // template
    var head = '<div><h1>This is head</h1><component2 on-say-hello="vm.sayHello()"></component2></div>';
    var body = '<div><button ng-click="vm.onclick()">{{vm.hero.name}}</button></div>';

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
            name: 'This is body button'
        };
        vm.onclick=function(){
            alert('component2');
            vm.onSayHello();
        }
    }
});