define(['pokemon'], function(pokemon) {
    'use strict';
    var app = angular.module('btModule',['pokemon']);
    // 導頁路徑
    app.service("ShoppingCart",ShoppingCart);
     
    function ShoppingCart($log){
        var list = [];
        this.getList = function(){
            return list; 
        };
        this.addItem = function(item){
            list.push(item);
        };
    }
    ShoppingCart.$inject = ["$log"];
    return app;
});