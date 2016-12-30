define([
    'btModule',
], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    var floatWindowsComponent = {
        templateUrl: '../NPV/js/component/template/float-windows.html',
        controller: floatWindowsComponentCtrl,
        controllerAs: 'vm',
        bindings: {
            titlename: '<'
        }
    };
    app.component('btFloatWindows', floatWindowsComponent);

    floatWindowsComponentCtrl.$inject = ['$log', 'ShoppingCartEntity', '$scope'];
    function floatWindowsComponentCtrl($log, shoppingCartEntity, $scope) {
        var vm = this;

        vm.$onInit = function () {
            layer.config({
                type: 1,
                title: vm.titlename,
                skin: 'layerList',
                maxmin: false,
                resize: true,
                anim: 2,
                offset: 'rb',
                shade: 0,
                success: function (layero, index) {
                    // $log.debug(layero, index);
                    $('#layerContent').parent().parent().css('zIndex', 1000);
                },
                cancel: function () {
                    shoppingCartEntity.closeShoppingCart();
                },
                content: $('#layerContent')
            });

            $scope.selectList = shoppingCartEntity.getList();
            // $log.debug($scope.selectList);
        }

        $scope.removeList = function (x, index) {
            // $log.debug(index);
            var selectItem = shoppingCartEntity.getList();
            shoppingCartEntity.removeItem();
            angular.forEach(selectItem, function (item) {
                if (item.activityCode !== x.activityCode) {
                    shoppingCartEntity.addItem(item);
                }
            })
            // $log.debug(shoppingCartEntity.getList());
            $scope.selectList = shoppingCartEntity.getList();
        }

    };

    return app;
});