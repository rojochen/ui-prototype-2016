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

        /* begin menu tree */
        $('.tree-folder-content').css('display', 'none');
        $('body').on('click', '.tree-folder', function (e) {
            if(e.target.nodeName === 'DIV' || e.target.className === 'fa fa-plus-square-o' || e.target.className === 'fa fa-minus-square-o'){
                if ($(this).children('.tree-folder-content').css('display') == 'none') {
                    $(this).children('.tree-folder-content').css('display', 'block');
                    $(this).children('.tree-folder-header').children('i').removeClass('fa-plus-square-o');
                    $(this).children('.tree-folder-header').children('i').addClass('fa-minus-square-o');
                    return false;
                }
                else {
                    $(this).children('.tree-folder-header').children('i').removeClass('fa-minus-square-o');
                    $(this).children('.tree-folder-header').children('i').addClass('fa-plus-square-o');
                    $(this).children('.tree-folder-content').css('display', 'none');
                    return false;
                }
            }
        });
        /* end menu tree */
    };

    return app;
});