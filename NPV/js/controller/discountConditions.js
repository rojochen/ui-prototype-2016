define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('discountConditionsCtrl', ['$scope', '$timeout', '$log', '$element',
        'ShoppingCartEntity',
        function ($scope, $timeout, $log, $element, shoppingCartEntity) {
            var vm = this;

            $scope.newMarginSetTableData = {};

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



            /*begin 問卷-查詢*/
            var opt = {
                "oLanguage": {
                    "sProcessing": "處理中...",
                    "sLengthMenu": "顯示 _MENU_ 項結果",
                    "sZeroRecords": "沒有匹配結果",
                    "sInfo": "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
                    "sInfoEmpty": "顯示第 0 至 0 項結果，共 0 項",
                    "sInfoFiltered": "(從 _MAX_ 項結果過濾)",
                    "sSearch": "搜索:",
                    "oPaginate": {
                        "sFirst": "首頁",
                        "sPrevious": "上一頁",
                        "sNext": "下一頁",
                        "sLast": "尾頁"
                    },
                },
                "searching": false,
                "bInfo": true,
                "bPaginate": true,
                "bLengthChange": false,
                "scrollX": true,

            };

            $scope.discountConditionsTableData = [{
                "discountConditionSort": "10",
                "discountConditionName": "到期通知_折扣類型「網內互打免費」",
                "discountConditionType": "SMS_ONNETFREE",
                "defaultValue": "N",
                "restocking": "N",
                "ITSR": "N",
                "PC": "N",
                "modifyPersonnel": "admiv",
                "modifyDate": "27-10月 -15"
            }, {
                "discountConditionSort": "11",
                "discountConditionName": "到期通知_折扣類型「上網傳輸量吃到飽」",
                "discountConditionType": "SMS_GPRSUNLIMITED",
                "defaultValue": "N",
                "restocking": "N",
                "ITSR": "N",
                "PC": "N",
                "modifyPersonnel": "admiv",
                "modifyDate": "27-10月 -15"
            }, {
                "discountConditionSort": "12",
                "discountConditionName": "到期通知_折扣類型「數據加贈傳輸量」",
                "discountConditionType": "SMS_BOOSTER",
                "defaultValue": "N",
                "restocking": "N",
                "ITSR": "N",
                "PC": "N",
                "modifyPersonnel": "admiv",
                "modifyDate": "27-10月 -15"
            }, {
                "discountConditionSort": "13",
                "discountConditionName": "到期通知_折扣類型「上網傳輸量吃到飽」",
                "discountConditionType": "SMS_FREEMINS",
                "defaultValue": "N",
                "restocking": "N",
                "ITSR": "N",
                "PC": "N",
                "modifyPersonnel": "admiv",
                "modifyDate": "27-10月 -15"
            }, {
                "discountConditionSort": "14",
                "discountConditionName": "到期通知_折扣類型「簡訊優惠」",
                "discountConditionType": "SMS_SMSDISC",
                "defaultValue": "N",
                "restocking": "N",
                "ITSR": "N",
                "PC": "N",
                "modifyPersonnel": "admiv",
                "modifyDate": "27-10月 -15"
            }, {
                "discountConditionSort": "15",
                "discountConditionName": "到期通知_折扣類型「月租優惠」",
                "discountConditionType": "SMS_MONTHLYFEEDISC",
                "defaultValue": "N",
                "restocking": "N",
                "ITSR": "N",
                "PC": "N",
                "modifyPersonnel": "admiv",
                "modifyDate": "27-10月 -15"
            }, {
                "discountConditionSort": "1",
                "discountConditionName": "允許折扣重覆安裝",
                "discountConditionType": "",
                "defaultValue": "N",
                "restocking": "N",
                "ITSR": "N",
                "PC": "N",
                "modifyPersonnel": "admiv",
                "modifyDate": "27-10月 -15"
            }, {
                "discountConditionSort": "16",
                "discountConditionName": "為「預繳優惠折扣」",
                "discountConditionType": "",
                "defaultValue": "N",
                "restocking": "N",
                "ITSR": "N",
                "PC": "N",
                "modifyPersonnel": "admiv",
                "modifyDate": "27-10月 -15"
            }, {
                "discountConditionSort": "7",
                "discountConditionName": "改至非折扣適用範圍需移除",
                "discountConditionType": "",
                "defaultValue": "N",
                "restocking": "N",
                "ITSR": "N",
                "PC": "N",
                "modifyPersonnel": "admiv",
                "modifyDate": "27-10月 -15"
            }, {
                "discountConditionSort": "3",
                "discountConditionName": "2G轉3G時折扣帶至3G",
                "discountConditionType": "",
                "defaultValue": "N",
                "restocking": "N",
                "ITSR": "N",
                "PC": "N",
                "modifyPersonnel": "admiv",
                "modifyDate": "27-10月 -15"
            }];


            $('#datatable_discountConditions').DataTable().destroy();

            $timeout(function () {
                $('#datatable_discountConditions').DataTable(opt);
            }, 100)


            $scope.saveMarginSetTable = function () {
                $scope.marginSetTableData.push($scope.newMarginSetTableData);
                $scope.newMarginSetTableData = {};

                // $scope.alertMassege = "New item add on list successfully!!";
            };

            // -----編輯-----
            $scope.editInfo = function (x) {
                $scope.info = {
                    'marginSort': x.marginSort,
                    'marginMoney': x.marginMoney,
                    'marginMoney': x.marginMoney,
                };
            };

        }
    ]);
    return app;
});