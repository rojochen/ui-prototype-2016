define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('specialSetCtrl', ['$scope', '$timeout', '$log', '$element',
        'ShoppingCartEntity',
        function ($scope, $timeout, $log, $element, shoppingCartEntity) {
            var vm = this;

            /*begin 版面縮合*/
            $element.on('click', '.collapse-link', function () {
                var $BOX_PANEL = $(this).closest('.x_panel'),
                    $ICON = $(this).find('i'),
                    $BOX_CONTENT = $BOX_PANEL.find('.x_content');

                if ($BOX_PANEL.attr('style')) {
                    $BOX_CONTENT.slideToggle(200, function () {
                        $BOX_PANEL.removeAttr('style');
                    });
                } else {
                    $BOX_CONTENT.slideToggle(200);
                    $BOX_PANEL.css('height', 'auto');
                }
                $ICON.toggleClass('fa-minus  fa-plus');
            });
            /*end 版面縮合*/

            // it參數設定
            /* begin */
            $scope.btnShow1 = true;
            $scope.btnShow2 = false;
            $scope.advancedSearch = function () {
                if ($scope.advancedControl) {
                    $scope.advancedControl = false;
                    $scope.btnShow1 = true;
                    $scope.btnShow2 = false;
                } else {
                    $scope.advancedControl = true;
                    $scope.btnShow1 = false;
                    $scope.btnShow2 = true;
                }
            }
            /* end */

            /* begin */
            $scope.tableControl = false;
            $scope.showTable = function () {
                $scope.tableControl = true;
            }
            /* end */

            $scope.useTableData = [{
                "id": "1",
                "spvNo": "20161110005",
                "srNo": "151070",
                "offerId": "153888",
                "offerName": "帳單優惠600元*3個月(N)",
                "releaseDate": "2016/12/02",
                "isTeamOffer": "N",
                "no": "1"
            }, ];
        }
    ]);
    return app;
});