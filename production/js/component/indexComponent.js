define(['btModule'], function(btModule) {
    'use strict';
    var app = angular.module("btModule");
    
    var indexComponent = {
        // template: '<p>function: 取得 {{vm.hero.name}}</p> <button ng-click="vm.onSayHello()">button</button>',
        // template: '<p>function: 取得 {{vm.hero.name}}</p> <button ng-click="vm.onclick()">button</button>',
        template: '<p>function: 取得 {{vm.hero.name}}</p> <button ng-click="vm.onclick()">{{vm.buttonName}}</button><button ng-click="vm.change()">change第二層</button> <aaa ng-click="vm.demo()" button="vm.button_2">aaa</aaa>',
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
            vm.hero = {
                name: 'index-component try'
            };
            vm.buttonName = '第一層 button';
            // vm.buttonName_1 = '第一層component button';
            vm.button_2 = '第二層 button';
        }

        vm.onclick = function(){
            alert('sayHello-ee');
            vm.onSayHello(); 
        }
        vm.onSayHello = function(){
            alert('sayHello-aa');
        };
        vm.change = function(){
            vm.button_2 = 'change 第二層component button';
        }
        
        vm.demo = function(){
            // alert('demo component-1');
        }

        vm.$onChanges = function(obj){
            console.log('1');
            console.log(obj);
            // console.log(obj.buttonName.previousValue);
            // console.log(obj.buttonName.currentValue);
            // console.log(obj.buttonName.isFirstChange());
        }

        vm.$docheck = function(){
            console.log('aaa');
        }


    };

    return app;
});