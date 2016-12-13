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
    
    headerComponentCtrl.$inject = ['$log'];
    function headerComponentCtrl($log) {
        var vm = this;
<<<<<<< HEAD

        var layerList = null;
        layer.config({
=======
        
        vm.layerList = null;
        vm.openList = function () {
            $log.debug($('.layerList').length);
            if ($('.layerList').length === 0) {
                vm.layerList = layer.open({
>>>>>>> c68d78bb9484aed0e2af35a313b04e7b1f0de075
                    type: 1,
                    title: '已選清單',
                    skin: 'layerList',
                    maxmin: false,
                    resize: false,
                    offset: 'rb',
                    shade: 0,
                    zIndex: 2,
                    content: '我是html内容'
                });
        vm.openList = function () {
            $log.debug($('.layerList').length);
            if ($('.layerList').length === 0) {
                layerList = layer.open();
            } else {
                layer.restore(vm.layerList);
            }
            $log.debug(vm.layerList);
        }
    };

    return app;
});