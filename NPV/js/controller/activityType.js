define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('activityTypeCtrl', ['$scope', '$timeout', '$log', '$element',
        'ShoppingCartEntity',
        function ($scope, $timeout, $log, $element, shoppingCartEntity) {
            var vm = this;

            /* begin */
            $scope.resetTable = function () {
                    $scope.tableControl = false;
                }
                /* end */

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


        }
    ]);
    return app;
});