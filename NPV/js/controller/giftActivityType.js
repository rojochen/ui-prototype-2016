define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('giftActivityTypeCtrl', ['$scope', '$timeout', '$log', '$element',
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
            };
            /* end */

            /* 合約相關新增/維護 begin */
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
                "bInfo": false,
                "bPaginate": true,
                "bLengthChange": false
            };

            $timeout(function () {
                $('#datatable_giftActivityType').DataTable(opt);
            }, 100)

            //    <td ng-bind="x.giftActivityTypeSorting"></td>
            //                                     <td ng-bind="x.giftActivityTypeID"></td>
            //                                     <td ng-bind="x.giftActivityTypeChinese"></td>
            //                                     <td ng-bind="x.giftActivityTypeShow"></td>
            //                                     <td ng-bind="x.giftActivityTypeRole"></td>
            //                                     <td ng-bind="x.giftActivityTypeDate"></td>

            // 表格內容資料
            $scope.giftActivityTypeTableData = [{
                "giftActivityTypeSorting": "101",
                "giftActivityTypeID": "TESTTEST",
                "giftActivityTypeChinese": "TESTTEST",
                "giftActivityTypeShow": "N",
                "giftActivityTypeRole": "tchen",
                "giftActivityTypeDate": "20-6月 -14",
            }, {
                "giftActivityTypeSorting": "5",
                "giftActivityTypeID": "VIP_JOIN_MONTH",
                "giftActivityTypeChinese": "VIP入會月份",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "huichihsieh",
                "giftActivityTypeDate": "20-6月 -14",
            }, {
                "giftActivityTypeSorting": "25",
                "giftActivityTypeID": "SERVICE_TYPE",
                "giftActivityTypeChinese": "服務類型",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "cnian",
                "giftActivityTypeDate": "25-1月 -16",
            }, {
                "giftActivityTypeSorting": "21",
                "giftActivityTypeID": "IS_HAPPYGO_MEMBER",
                "giftActivityTypeChinese": "是否為HappyGO會員",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "cnian",
                "giftActivityTypeDate": "25-1月 -16",
            }, {
                "giftActivityTypeSorting": "1",
                "giftActivityTypeID": "VIP",
                "giftActivityTypeChinese": "客戶身份",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "cnian",
                "giftActivityTypeDate": "25-1月 -16",
            }, {
                "giftActivityTypeSorting": "2",
                "giftActivityTypeID": "CHURN",
                "giftActivityTypeChinese": "停機可能率",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "hsjilee",
                "giftActivityTypeDate": "20-8月 -15",
            }, {
                "giftActivityTypeSorting": "3",
                "giftActivityTypeID": "TENURE",
                "giftActivityTypeChinese": "客戶年資",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "cnian",
                "giftActivityTypeDate": "25-1月 -16",
            }, {
                "giftActivityTypeSorting": "4",
                "giftActivityTypeID": "BIRTHDAY_MONTH",
                "giftActivityTypeChinese": "生日月份",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "cnian",
                "giftActivityTypeDate": "25-1月 -16",
            }, {
                "giftActivityTypeSorting": "6",
                "giftActivityTypeID": "RESIGN_CONTRACT",
                "giftActivityTypeChinese": "合約到期日",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "cnian",
                "giftActivityTypeDate": "25-1月 -16",
            }, {
                "giftActivityTypeSorting": "7",
                "giftActivityTypeID": "ARPB",
                "giftActivityTypeChinese": "ARPB",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "cnian",
                "giftActivityTypeDate": "25-1月 -16",
            }, {
                "giftActivityTypeSorting": "11",
                "giftActivityTypeID": "CHURN",
                "giftActivityTypeChinese": "停機可能率",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "hsjilee",
                "giftActivityTypeDate": "20-8月 -15",
            }, {
                "giftActivityTypeSorting": "12",
                "giftActivityTypeID": "TENURE",
                "giftActivityTypeChinese": "客戶年資",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "cnian",
                "giftActivityTypeDate": "25-1月 -16",
            }, {
                "giftActivityTypeSorting": "13",
                "giftActivityTypeID": "BIRTHDAY_MONTH",
                "giftActivityTypeChinese": "生日月份",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "cnian",
                "giftActivityTypeDate": "25-1月 -16",
            }, {
                "giftActivityTypeSorting": "14",
                "giftActivityTypeID": "RESIGN_CONTRACT",
                "giftActivityTypeChinese": "合約到期日",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "cnian",
                "giftActivityTypeDate": "25-1月 -16",
            }, {
                "giftActivityTypeSorting": "15",
                "giftActivityTypeID": "ARPB",
                "giftActivityTypeChinese": "ARPB",
                "giftActivityTypeShow": "Y",
                "giftActivityTypeRole": "cnian",
                "giftActivityTypeDate": "25-1月 -16",
            }];

            $('#datatable_giftActivityType').DataTable().destroy();
            /* 合約相關新增/維護表格 end */

            /* begin */
            $scope.tableControl = false;
            $scope.showTable = function () {
                $scope.tableControl = true;
            };
            /* end */
        }
    ]);
    return app;
});