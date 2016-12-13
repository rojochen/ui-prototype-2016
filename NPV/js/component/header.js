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
    
    headerComponentCtrl.$inject = ['$log','ShoppingCartEntity'];
    function headerComponentCtrl($log,shoppingCartEntity) {
        var vm = this;


        vm.layerList = null;
        
        var index = shoppingCartEntity.getCartID();

        vm.openList = function () {
			var index = shoppingCartEntity.getCartID();
            if (index === null) {
				index = shoppingCartEntity.openShoppingCart();
				shoppingCartEntity.setCartID(index);
            } else {
                layer.restore(index);
            }
        }
    };

    return app;
});