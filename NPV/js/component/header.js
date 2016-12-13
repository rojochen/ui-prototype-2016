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

        vm.openList = function () {
            // console.log(layer);
            layer.config({
                path: '/production/js/lib/layer/src/' //layer.js所在的目录
            });
            layer.open({
                type: 1,
                title: '選擇清單',
                skin: 'layer-ext-moon', //自訂的class名稱
                maxmin: true,
                resize: false,
                offset: 'rt',
                // shadeClose: true,
                shade:0,
                zIndex: 10,
                content: '我是html内容',
                // btn: ['按钮一', '按钮二'],
                // btnAlign: 'c',  //btnAlign - 按钮排列(l、c、r)
                // closeBtn:1,  //closeBtn - 关闭按钮
                // yes: function (index, layero) {  //yes - 确定按钮回调方法
                //     //按钮【按钮一】的回调
                //     console.log('a');
                // }, btn2: function (index, layero) {
                //     //按钮【按钮二】的回调
                //     console.log('b');
                // },
                area: ['300px', '90%'], //宽高
                cancel: function () {  //cancel - 右上角关闭按钮触发的回调
                    console.log('右上角关闭回调');  //右上角关闭回调
                },
                full: function () {
                    console.log('最大化');  //最大化
                },
                min: function () {
                    console.log('最小化');  //最小化
                },
                restore: function () {
                    console.log('还原');  //还原
                }
            });
        }
    };

    return app;
});