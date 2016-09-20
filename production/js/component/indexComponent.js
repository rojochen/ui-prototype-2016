define(['btModule'], function(btModule) {
    'use strict';
    var app = angular.module("btModule");
    
    var indexComponent = {
        // template: '<p>function: 取得 {{vm.hero.name}}</p> <button ng-click="vm.onSayHello()">button</button>',
        template: '<p>function: 取得 {{vm.hero.name}}</p> <button ng-click="vm.onclick()">button</button>',
        controller: indexComponentCtrl,
        controllerAs: 'vm',
        bindings: {
            hero: '<',
            onSayHello: '&'
        }
    };
    app.component('indexComponent', indexComponent);

    indexComponentCtrl.$inject = ['$http'];
    function indexComponentCtrl($http){
        var vm = this;
        vm.hero = {
            name: 'index-component try'
        };
        /*
        vm.onSayHello = function(){
            alert('sayHello-aa');
        };*/
        vm.onclick = function(){
            alert('sayHello-ee');
            vm.onSayHello();
             
        }
    };

    return app;
});