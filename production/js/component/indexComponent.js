define(['btModule'], function(btModule) {
    'use strict';
    var app = angular.module("btModule");
    
    var indexComponent = {
        // template: '<p>function: 取得 {{vm.hero.name}}</p> <button ng-click="vm.onSayHello()">button</button>',
        // template: '<p>function: 取得 {{vm.hero.name}}</p> <button ng-click="vm.onclick()">button</button>',
        template: '<p>function: 取得 {{vm.hero.name}}</p> <button ng-click="vm.onclick()">{{vm.buttonName}}</button> <aaa ng-click="vm.demo()">aaa</aaa>',
        controller: indexComponentCtrl,
        controllerAs: 'vm',
        transclude: true,
        bindings: {
            hero: '<',
            onSayHello: '&',
            buttonName: '<'
        }
    };
    app.component('indexComponent', indexComponent);

    indexComponentCtrl.$inject = ['$http'];
    function indexComponentCtrl($http){
        var vm = this;
        
        vm.$onInit = function(){
            vm.buttonName_1 = '第一層component button';
            vm.buttonName = 'button';

            vm.hero = {
                name: 'index-component try'
            };
        }
        
        vm.onSayHello = function(){
            alert('sayHello-aa');
        };
        vm.onclick = function(){
            alert('sayHello-ee');
            vm.onSayHello(); 
        }
        vm.demo = function(){
            alert('demo component-1');
        }

    };

    return app;
});