define([
    'btModule',
], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    var headerComponent = {
        templateUrl: '../NPV/js/component/template/top-menu.html',
        controller: headerComponentCtrl,
        controllerAs: 'vm',
        bindings: {
            layerList: '<'
        }
    };
    app.component('btHeader', headerComponent);
    
    headerComponentCtrl.$inject = ['$log','ShoppingCartEntity'];
    function headerComponentCtrl($log,shoppingCartEntity) {
        var vm = this;


        var layerList = null;
        layer.config({
                    type: 1,
                    title: '已選清單',
                    skin: 'layerList',
                    maxmin: false,
                    resize: false,
                    anim : 1,
                    offset: 'rb',
                    shade: 0,
                    zIndex: 2,
                    content: '我是html内容'
                });
        var index = shoppingCartEntity.getCartID() ;

        vm.openList = function () {
            $log.debug($('.layerList').length);
            if (index==null) {
                layerList = layer.open();
            } else {
                layer.restore(vm.layerList);
            }
            $log.debug(vm.layerList);
        }
    };

    return app;
});