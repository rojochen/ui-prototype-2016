define(['btModule'], function(btModule) {
    'use strict';
    var app = angular.module("btModule");
    
    var aaa = {
        template: '<hr/><p>{{vm.name}}</p><button ng-click="vm.onDemo()">{{vm.button}}</button>',
        controller: indexComponentCtrl_2,
        controllerAs: 'vm',
        transclude: true,
        bindings: {
            onDemo: '&',
            buttonName: '<'
        },
        require: {
            parentCtrl: '^?indexComponent'
        }
    };
    app.component('aaa', aaa);

    indexComponentCtrl_2.$inject = ['$http'];
    function indexComponentCtrl_2($http){
        var vm = this;
        vm.name = '第二層component區域';

        vm.button = '第二層component button';
        vm.onDemo = function(){
            alert('demo component-2');
            vm.parentCtrl.buttonName = 'change 第一層button';
        }
    };

    return app;
});