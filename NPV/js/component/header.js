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
        
        vm.openList = function () {
            shoppingCartEntity.toggleShoppingCart();
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