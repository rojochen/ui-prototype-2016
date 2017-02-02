define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('activityTypeCtrl', ['$scope', '$timeout', '$log', '$element',
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

            /* 促銷活動類型表格 begin */
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
                $('#datatable_activityType').DataTable(opt);
            }, 100)

            // 表格內容資料
            $scope.activityTypeTableData = [{
                "activityTypeSorting": "1",
                "activityTypeID": "1",
                "activityTypeName": "通話優惠",
                "activityTypeRole": "SPV",
                "activityTypeDate": "08-3月 -10"
            }, {
                "activityTypeSorting": "2",
                "activityTypeID": "2",
                "activityTypeName": "手機專案",
                "activityTypeRole": "SPV",
                "activityTypeDate": "08-3月 -10"
            }, {
                "activityTypeSorting": "3",
                "activityTypeID": "3",
                "activityTypeName": "i-mode手機專案/雙倍加值專案",
                "activityTypeRole": "SPV",
                "activityTypeDate": "08-3月 -10"
            }, {
                "activityTypeSorting": "4",
                "activityTypeID": "4",
                "activityTypeName": "禮品方案",
                "activityTypeRole": "ejchen",
                "activityTypeDate": "23-9月 -16"
            }, {
                "activityTypeSorting": "5",
                "activityTypeID": "5",
                "activityTypeName": "HappyGo點數卡",
                "activityTypeRole": "SPV",
                "activityTypeDate": "08-3月 -10"
            }];

            $('#datatable_activityType').DataTable().destroy();
            /* 促銷活動類型表格 end */

            /* notify 通知訊息 begin */
            // Success
            $scope.pnotifyAddSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '新增完成！');

                // 取消鍵
                $timeout(function () {
                    $('#actTypeAdd').modal('hide')
                    $('#actTypeAddConfirmCancel').modal('hide')
                }, 100)
            }

            $scope.pnotifyEditSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '修改完成！');

                // 取消鍵
                $timeout(function () {
                    $('#actTypeEdit').modal('hide')
                    $('#actTypeEditConfirmCancel').modal('hide')
                }, 100)
            }

            $scope.pnotifyDelSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '刪除完成！');
            }
            /* notify 通知訊息 end*/

            /* begin */
            $scope.tableControl = false;
            $scope.showTable = function () {
                $scope.tableControl = true;
            };
            /* end */

            /* 取消鍵 begin */
            $scope.cancel = function () {
                $timeout(function () {
                    $('#actTypeAdd').modal('hide')
                    $('#actTypeAddConfirmCancel').modal('hide')
                }, 100)
            }

            $scope.cancel2 = function () {
                $timeout(function () {
                    $('#actTypeEdit').modal('hide')
                    $('#actTypeEditConfirmCancel').modal('hide')
                }, 100)
            }
            /* 取消鍵 end */
        }
    ]);
    return app;
});