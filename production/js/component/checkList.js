define([
    'btModule',
], function(btModule) {
    'use strict';
    var app = angular.module('btModule');
        
    var btCheckList = {
        bindings: {
            item: '<'
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
        vm.status = false;
        vm.items = [{
            value: '與新客戶的進度會議'
        }, {

            value: '創建新人的email信箱'
        }, {

            value: '購買新影印機X台'
        }, {

            value: '備份專案資料'
        }, {

            value: '準備新人教育訓練'
        }, {

            value: '新專案進度諮詢'
        }];
        vm.$onInit = function() {
            if (vm.parentCtrl == 'undefined') {
                
            } else {
                vm.listName = function(item) {
                    vm.parentCtrl.title = item;
                }
            }
        }

        $element.on('$destroy', function() {
            //  alert('hello element');
            $scope.$destroy();
        });

        vm.$onDestroy = function() {
            //off event 
            $element.off('click');
        };

    }

    return app;
});