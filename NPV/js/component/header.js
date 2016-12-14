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
    
    headerComponentCtrl.$inject = ['$log','ShoppingCartEntity', '$scope'];
    function headerComponentCtrl($log,shoppingCartEntity, $scope) {
        var vm = this;


        layer.config({
                type: 1,
                title: '已選清單',
                skin: 'layerList',
                maxmin: false,
                resize: false,
                anim: 2,
                offset: 'rb',
                shade: 0,
                zIndex: 1111,
                cancel: function () {
                    shoppingCartEntity.closeShoppingCart();
                },
                content:$('#layerContent')
            });
        

        $scope.selectList = shoppingCartEntity.getList();
        var index = shoppingCartEntity.getCartID();
        

        vm.openList = function () {
            shoppingCartEntity.toggleShoppingCart();
            // $log.debug(shoppingCartEntity.getList());
			// var index = shoppingCartEntity.getCartID();
            // // $log.debug(index);
            // if (index === null) {
			// 	index = shoppingCartEntity.openShoppingCart();
			// 	shoppingCartEntity.setCartID(index);
            // } else {
            //     $('.layerList:eq(0)').css('left', ($(window).width() - $('.layerList:eq(0)').width()) + 'px');
            //     $('.layerList:eq(0)').css('top', '45px');
            // }
        }


        $scope.removeList = function(x, index){
            // $log.debug(index);
            var selectItem = shoppingCartEntity.getList();
            shoppingCartEntity.removeItem();
            angular.forEach(selectItem, function(item){
                if(item.activityCode !== x.activityCode){
                    shoppingCartEntity.addItem(item);
                }
            })
            // $log.debug(shoppingCartEntity.getList());
            $scope.selectList = shoppingCartEntity.getList();
        }


        $scope.definiteList = function(){  //未做...
            $log.debug('執行後續動作');
        }

        $scope.openDraft = function(){
            $('#Modal9').modal('show');
        }
        $scope.openPending = function(){
            $('#Modal10').modal('show');
        }
    };

    return app;
});