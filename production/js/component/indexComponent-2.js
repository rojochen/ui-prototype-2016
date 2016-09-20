define(['btModule'], function(btModule) {
    'use strict';
    var app = angular.module("btModule");
    
    var aaa = {
        template: '<hr/><p>我是：{{vm.name}}</p><button ng-click="vm.onDemo()">{{vm.button}}</button>',
        controller: indexComponentCtrl_2,
        controllerAs: 'vm',
        bindings: {
            onDemo: '&'
        }
    };
    app.component('aaa', aaa);

    indexComponentCtrl_2.$inject = ['$http'];
    function indexComponentCtrl_2($http){
        var vm = this;
        vm.name = '第二層component';
        vm.button = '第二層component button';
        vm.onDemo = function(){
            alert('demo component-2');
        }
    };

    return app;
});