define([
    'btModule',
], function(btModule) {
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
    btCheckList.$inject = ['$element', '$scope', '$window', '$timeout'];

    function checkList($element, $scope, $window, $timeout) {
        var vm = this;

        vm.$onInit = function() {

            if (vm.parentCtrl !== 'undefined') {
                vm.listName = function(item) {
                    vm.parentCtrl.titlename = item;
                }
            }
        }

        $element.on('$destroy', function() {
            //  alert('hello element');
            $scope.$destroy();
        });

        $timeout(function() {
            // console.log($element.find('.flat').length);
            $element.find('.flat').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            });



        })

        vm.$onDestroy = function() {
            //off event 
            $element.off('click');
        };

    }

    return app;
});