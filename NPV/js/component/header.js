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

        }
    };
    app.component('btHeader', headerComponent);

    function headerComponentCtrl() {
        var vm = this;
        
        var layerList = null;
        vm.openList = function () {
            if ($('.layerList').length === 0) {
                layerList = layer.open({
                    type: 1,
                    title: '已選清單',
                    skin: 'layerList',
                    maxmin: true,
                    resize: false,
                    offset: 'rb',
                    shade: 0,
                    zIndex: 2,
                    content: '我是html内容'
                });
            } else {
                layer.restore(layerList);
            }
        }
    };

    return app;
});