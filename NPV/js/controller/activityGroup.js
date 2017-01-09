define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('activityGroupCtrl', ['$scope', '$timeout', '$log', '$element',
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

            /* 活動群組表格 begin */
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
                "bPaginate": false
                    // "scrollX": true,
                    // "scrollY": true
            };

            $timeout(function () {
                $('#datatable_activityGroup').DataTable(opt);
            }, 100)

            // 表格內容資料
            $scope.activityGroupTableData = [{
                "activityGroupSorting": "1",
                "activityGroupID": "G0261",
                "activityGroupName": "免費體驗專案",
                "activityGroupTime": "2016/11/25 ～ 2030/12/31",
                "activityGroupRole": "oet01",
                "activityGroupDate": "2016/11/25 17:54"
            }, {
                "activityGroupSorting": "2",
                "activityGroupID": "G0065",
                "activityGroupName": "新啟用-4G Plan B",
                "activityGroupTime": "2014/5/28 ～ 2030/12/31",
                "activityGroupRole": "sfan",
                "activityGroupDate": "2014/5/28 10:34"
            }, {
                "activityGroupSorting": "3",
                "activityGroupID": "G0066",
                "activityGroupName": "新啟用-4G BAU",
                "activityGroupTime": "2014/5/28 ～ 2030/12/31",
                "activityGroupRole": "sfan",
                "activityGroupDate": "2014/5/28 10:35"
            }, {
                "activityGroupSorting": "4",
                "activityGroupID": "G0121",
                "activityGroupName": "企業平板電腦",
                "activityGroupTime": "2014/6/6 ～ 2030/12/31",
                "activityGroupRole": "sandyh",
                "activityGroupDate": "2014/6/6 14:24"
            }, {
                "activityGroupSorting": "5",
                "activityGroupID": "G0122",
                "activityGroupName": "企業iPad",
                "activityGroupTime": "2014/6/6 ～ 2030/12/31",
                "activityGroupRole": "sandyh",
                "activityGroupDate": "2014/6/6 14:25"
            }, {
                "activityGroupSorting": "6",
                "activityGroupID": "GG0123",
                "activityGroupName": "企業網卡",
                "activityGroupTime": "2014/6/6 ～ 2030/12/31",
                "activityGroupRole": "sandyh",
                "activityGroupDate": "2014/6/6 14:25"
            }, {
                "activityGroupSorting": "7",
                "activityGroupID": "G0124",
                "activityGroupName": "企業校園_設備",
                "activityGroupTime": "2014/6/6 ～ 2030/12/31",
                "activityGroupRole": "sandyh",
                "activityGroupDate": "2014/6/6 14:26"
            }, {
                "activityGroupSorting": "8",
                "activityGroupID": "G0125",
                "activityGroupName": "企業校園_單門號",
                "activityGroupTime": "2014/6/6 ～ 2030/12/31",
                "activityGroupRole": "sandyh",
                "activityGroupDate": "2014/6/6 14:26"
            }, {
                "activityGroupSorting": "9",
                "activityGroupID": "G0127",
                "activityGroupName": "企業3G無線飆網經銷_單門號",
                "activityGroupTime": "2014/6/6 ～ 2030/12/31",
                "activityGroupRole": "sandyh",
                "activityGroupDate": "2014/6/6 14:27"
            }, {
                "activityGroupSorting": "10",
                "activityGroupID": "G0128",
                "activityGroupName": "企業3G無線飆網_設備",
                "activityGroupTime": "2014/6/6 ～ 2030/12/31",
                "activityGroupRole": "sandyh",
                "activityGroupDate": "2014/6/6 14:27"
            }];

            $('#datatable_activityGroup').DataTable().destroy();
            /* 活動群組表格 end */

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