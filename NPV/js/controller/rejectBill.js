define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('rejectBillCtrl', ['$scope', '$timeout', '$log', '$element',
        'ShoppingCartEntity', 'pnotifyService',
        function ($scope, $timeout, $log, $element, shoppingCartEntity, pnotifyService) {
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

            /* 展開表格 begin */
            $scope.isTable = false;
            $scope.showTable = function () {
                $scope.isTable = true;
            }
            /* 展開表格 end */

            /* 表格 begin */
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
                "bLengthChange": false,
                "bSort": false
            };
            $timeout(function () {
                $('#datatable_rejectBill').DataTable(opt);
            }, 100)

            // 表格內容資料
            // $scope.rejectBillTableData = [{
            //     "rejectBillNpvID": "20161129004",
            //     "rejectBillType": "促代-4G",
            //     "rejectBillSecondType": "Bundle(1)",
            //     "rejectBillTime": "2016/11/29 11:55",
            //     "rejectBillPM": "yiyang",
            //     "rejectBillStatus": "待派單"
            // }, {
            //     "rejectBillNpvID": "20161129005",
            //     "rejectBillType": "折扣 (2)",
            //     "rejectBillSecondType": "N/A",
            //     "rejectBillTime": "2016/11/29 14:21",
            //     "rejectBillPM": "tatakao",
            //     "rejectBillStatus": "待派單"
            // }, {
            //     "rejectBillNpvID": "20161129006",
            //     "rejectBillType": "促代-4G／3G",
            //     "rejectBillSecondType": "Single(3)",
            //     "rejectBillTime": "2016/11/29 14:32",
            //     "rejectBillPM": "tatakao",
            //     "rejectBillStatus": "待派單"
            // }, {
            //     "rejectBillNpvID": "20161129007",
            //     "rejectBillType": "促代-3G",
            //     "rejectBillSecondType": "Single(1)",
            //     "rejectBillTime": "2016/11/29 11:45",
            //     "rejectBillPM": "yiyang",
            //     "rejectBillStatus": "待派單"
            // }, {
            //     "rejectBillNpvID": "20161129017",
            //     "rejectBillType": "促代-4G",
            //     "rejectBillSecondType": "Single(1)",
            //     "rejectBillTime": "2016/11/29 15:25",
            //     "rejectBillPM": "yiyang",
            //     "rejectBillStatus": "待派單"
            // }, {
            //     "rejectBillNpvID": "20161129018",
            //     "rejectBillType": "促代-4G",
            //     "rejectBillSecondType": "Single(1)",
            //     "rejectBillTime": "2016/11/29 16:55",
            //     "rejectBillPM": "yiyang",
            //     "rejectBillStatus": "待派單"
            // }, {
            //     "rejectBillNpvID": "20161129019",
            //     "rejectBillType": "促代-4G",
            //     "rejectBillSecondType": "Single(1)",
            //     "rejectBillTime": "2016/11/29 17:55",
            //     "rejectBillPM": "yiyang",
            //     "rejectBillStatus": "待派單"
            // }, {
            //     "rejectBillNpvID": "20161129020",
            //     "rejectBillType": "促代-4G",
            //     "rejectBillSecondType": "Single(1)",
            //     "rejectBillTime": "2016/11/29 17:55",
            //     "rejectBillPM": "yiyang",
            //     "rejectBillStatus": "待派單"
            // }, ];
            // $('#datatable_rejectBill').DataTable().destroy();
            /* 表格 end */

            /* 手風琴 begin*/
            $('#myCollapsible').collapse({
                toggle: false
            })
            /* 手風琴 end*/
        }
    ]);
    return app;
});