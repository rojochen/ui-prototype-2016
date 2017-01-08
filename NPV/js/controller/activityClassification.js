define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('activityClassificationCtrl', ['$scope', '$timeout', '$log', '$element',
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

            /* 促銷活動類別表格 begin */
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
                $('#datatable_activityClassification').DataTable(opt);
            }, 100)

            // 表格內容資料
            $scope.activityClassificationTableData = [{
                "activityClassificationSorting": "1",
                "activityClassificationID": "01",
                "activityClassificationName": "【單門號無約專案】",
                "activityClassificationRole": "ejchen",
                "activityClassificationDate": "23-9月 -16"
            }, {
                "activityClassificationSorting": "2",
                "activityClassificationID": "02",
                "activityClassificationName": "【手機/其他類商品專案】",
                "activityClassificationRole": "SPV",
                "activityClassificationDate": "08-3月 -10"
            }, {
                "activityClassificationSorting": "3",
                "activityClassificationID": "03",
                "activityClassificationName": "【月租折扣/通話優惠/禮品類專案】",
                "activityClassificationRole": "SPV",
                "activityClassificationDate": "08-3月 -10"
            }, {
                "activityClassificationSorting": "4",
                "activityClassificationID": "04",
                "activityClassificationName": "【大寬頻專案】",
                "activityClassificationRole": "SPV",
                "activityClassificationDate": "08-3月 -10"
            }, {
                "activityClassificationSorting": "5",
                "activityClassificationID": "05",
                "activityClassificationName": "【WiMAX專案】",
                "activityClassificationRole": "SPV",
                "activityClassificationDate": "08-3月 -10"
            }, {
                "activityClassificationSorting": "6",
                "activityClassificationID": "06",
                "activityClassificationName": "無",
                "activityClassificationRole": "SPV",
                "activityClassificationDate": "08-3月 -10"
            }, {
                "activityClassificationSorting": "7",
                "activityClassificationID": "07",
                "activityClassificationName": "【Activation Team 專案】",
                "activityClassificationRole": "SPV",
                "activityClassificationDate": "08-3月 -10"
            }];

            $('#datatable_activityClassification').DataTable().destroy();
            /* 促銷活動類別表格 end */

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