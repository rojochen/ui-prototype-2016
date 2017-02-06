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
            /* begin 暫時位置 */
            console.log('暫時位置');
            $scope.menutTreeData = [{
                "name": "學生專案",
                "code": "L001",
                "id": 1,
                "list": []
            }, {
                "name": "3G終極管家Plus月租699A限24",
                "code": "S002",
                "id": 2,
                "list": []
            }, {
                "name": "長青專案",
                "code": "L004",
                "id": 3,
                "list": [{
                    "name": "aaa-child-1",
                    "id": 3,
                    "list": [{
                        "name": "aaa-grandson-1.1",
                        "id": 1,
                        "list": []
                    }, {
                        "name": "aaa-grandson-1.2",
                        "id": 2,
                        "list": [{
                            "name": "aaa-grandson-1.21",
                            "id": 1,
                        }]
                    }]
                }, {
                    "name": "aaa-child-2",
                    "id": 2,
                    "list": []
                }]
            }]
            angular.forEach($scope.menutTreeData, function (item) {
                shoppingCartEntity.addItem(item);
            })
            /* end 暫時位置 */

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