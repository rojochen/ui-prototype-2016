define([
    'btModule',
], function (btModule) {
    'use strict';
    var app = angular.module('btModule');

    var btCheckList = {
        bindings: {
            items: '<'
        },
        transclude: true,
        templateUrl: '../template/btCheckList.html',
        controller: checkList,
        controllerAs: 'vm',
        require: {
            // 'parent': '^component1',
            //controller: headCtrl
            parentCtrl: '^?btPortlet'
        }
    }
    app.component('btCheckList', btCheckList);
    btCheckList.$inject = ['$element', '$scope'];

    function checkList($element, $scope) {
        var vm = this;

        vm.$onInit = function () {

            if (vm.parentCtrl !== 'undefined') {
                vm.listName = function (item) {
                    vm.parentCtrl.title = item;
                }
            }
        }

        $element.on('$destroy', function () {
            //  alert('hello element');
            $scope.$destroy();
        });

        vm.$onDestroy = function () {
            //off event 
            $element.off('click');
        };

    }

    return app;
});