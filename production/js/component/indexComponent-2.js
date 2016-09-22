define(['btModule'], function(btModule) {
    'use strict';
    var app = angular.module("btModule");
    
    var aaa = {
        template: '<hr/><p>{{vm.name}}</p><button ng-click="vm.onDemo()">{{vm.button}}</button><button ng-click="vm.change_2()">{{vm.button_2}}</button>',
        controller: indexComponentCtrl_2,
        controllerAs: 'vm',
        transclude: true,
        bindings: {
            onDemo: '&',
            buttonName: '<',
            button: '<'
        },
        require: {
            parentCtrl: '^?indexComponent'
        }
    };
    app.component('aaa', aaa);

    indexComponentCtrl_2.$inject = ['$http'];
    function indexComponentCtrl_2($http){
        var vm = this;
        vm.$onInit = function(){
            vm.name = '第二層component區域';
            vm.button_2 = 'change 第一層';
        }

        vm.onDemo = function(){
            alert('demo component-2');
        }

        vm.change_2 = function(){
            vm.parentCtrl.buttonName = 'change 第一層button';
        }
       
        vm.$onChanges = function(obj){
            console.log('2');
            console.log(obj);
            // console.log(obj.button.previousValue);
            // console.log(obj.button.currentValue);
            // console.log(obj.button.isFirstChange());
        }

        vm.$docheck = function(){
            console.log('sss');
        }
    };

    return app;
});