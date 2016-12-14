define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module('btModule');
    // 導頁路徑
    app.service("ShoppingCartEntity", ShoppingCart);

    function ShoppingCart($log) {
        var list = [];
        var isOpen = false;
        this.getList = function () {
            return list;
        };
        this.addItem = function (item) {
            list.push(item);
        };
        this.removeItem = function(item){
            list = [];
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
            isOpen = true;
            return cartId;
        };
        this.closeShoppingCart = function (index) {
            cartId = null;
            isOpen = false;
            layer.close(index);
        };
        this.toggleShoppingCart = function(){
            if(isOpen===true){
                this.closeShoppingCart(cartId);
            }else{
                this.openShoppingCart();
            }
        };
        this.isOpen = function(){
            return isOpen ; 
        }
    }

    ShoppingCart.$inject = ["$log"];
    return app;
});