define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    var indexComponent = {
        // template: '<p>function: 取得 {{vm.hero.name}}</p> <button ng-click="vm.onSayHello()">button</button>',
        // template: '<p>function: 取得 {{vm.hero.name}}</p> <button ng-click="vm.onclick()">button</button>',
        template: '<p>function: 取得 {{vm.hero.name}}</p> <button ng-click="vm.onclick()">{{vm.buttonName}}</button><button ng-click="vm.change()">change第二層</button> <aaa ng-click="vm.demo()" button="vm.button_2">aaa</aaa>',
        controller: indexComponentCtrl,
        controllerAs: 'vm',
        transclude: true,
        bindings: {
            hero: '<',
            onSayHello: '&',
            buttonName: '<'
        }
    };
    app.component('indexComponent', indexComponent);

    indexComponentCtrl.$inject = ['$http'];
    function indexComponentCtrl($http) {
        var vm = this;

        vm.$onInit = function () {
            vm.hero = {
                name: 'index-component try'
            };
            vm.buttonName = '第一層 button';
            // vm.buttonName_1 = '第一層component button';
            vm.button_2 = '第二層 button';
        }

        vm.onclick = function () {
            alert('sayHello-ee');
            vm.onSayHello();
        }
        vm.onSayHello = function () {
            alert('sayHello-aa');
        };
        vm.change = function () {
            vm.button_2 = 'change 第二層component button';
        }

        vm.demo = function () {
            // alert('demo component-1');
        }

        vm.$onChanges = function (obj) {
            console.log('1');
            console.log(obj);
            // console.log(obj.buttonName.previousValue);
            // console.log(obj.buttonName.currentValue);
            // console.log(obj.buttonName.isFirstChange());
        }

        vm.$docheck = function () {
            console.log('aaa');
        }



        console.log(layer);
        layer.open({
            type: 1,
            title: '我是標題',
            // skin: 'layer-ext-moon', //自訂的class名稱
            // area: ['420px', '240px'], //宽高
            maxmin: true,
            shadeClose: true, //开启遮罩关闭
            zIndex: 10,  //zIndex - 层叠顺序(默认：19891014)
            content: '我是html内容',
            btn: ['按钮一', '按钮二'],
            // btnAlign: 'c',  //btnAlign - 按钮排列(l、c、r)
            // closeBtn:1,  //closeBtn - 关闭按钮
            yes: function (index, layero) {  //yes - 确定按钮回调方法
                //按钮【按钮一】的回调
                console.log('a');
            }, btn2: function (index, layero) {
                //按钮【按钮二】的回调
                console.log('b');
            },
            cancel: function () {  //cancel - 右上角关闭按钮触发的回调
                console.log('右上角关闭回调');  //右上角关闭回调
            },
            full:function () {
                console.log('最大化');  //最大化
            },
            min:function () {
                console.log('最小化');  //最小化
            },
            restore:function () {
                console.log('还原');  //还原
            }
        });



    };

    return app;
});