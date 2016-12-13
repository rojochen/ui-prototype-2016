define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module('btModule');
    // 導頁路徑
    app.service("ShoppingCartEntity", ShoppingCart);

    function ShoppingCart($log) {
        var list = [];
        this.getList = function () {
            return list;
        };
        this.addItem = function (item) {
            list.push(item);
        };

        var cartId = null;
        this.setCartID = function (id) {
            cartId = id;
        };
        this.getCartID = function () {
            return cartId;
        };

        this.openShoppingCart = function () {
			cartId = layer.open();
            return cartId;
        };
        this.closeShoppingCart = function (index) {
            cartId = null;
            layer.close(index);
        };
    }

    ShoppingCart.$inject = ["$log"];
    return app;
});