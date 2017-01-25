define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('aPasteBackupCtrl', ['$scope', '$timeout', '$log', '$element',
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
                "bPaginate": false,
                "bLengthChange": false,
                "bSort": false
            };

            $timeout(function () {
                $('#datatable_aPasteBackup').DataTable(opt);
            }, 100)

            // 表格內容資料
            $scope.aPasteBackupTableData = [{
                "aPasteBackupClass": "活動類別",
                "aPasteBackupDoc": "A貼",
                "aPasteBackupType": "月租通話約",
                "saleType": "新啟用",
                "exampleName": "學生方案_新啟用範本"
            }, {
                "aPasteBackupClass": "促代",
                "aPasteBackupDoc": "A貼",
                "aPasteBackupType": "月租通話約",
                "saleType": "223",
                "exampleName": "長青方案_2轉3範本"
            }, {
                "aPasteBackupClass": "促代",
                "aPasteBackupDoc": "備援單",
                "aPasteBackupType": "手機約",
                "saleType": "續約",
                "exampleName": "小資女方案_續約範本"
            }, {
                "aPasteBackupClass": "加值",
                "aPasteBackupDoc": "備援單",
                "aPasteBackupType": "－",
                "saleType": "－",
                "exampleName": "來電答鈴_範本"
            }];

            $('#datatable_aPasteBackup').DataTable().destroy();
            /* 活動群組表格 end */

            /* notify 通知訊息 begin */
            // Success
            $scope.pnotifyAddSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '新增完成！');
            }

            $scope.pnotifyEditSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '修改完成！');
            }

            $scope.pnotifyDelSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '刪除完成！');
            }
            /* notify 通知訊息 end*/

            /* Show Table begin */
            $scope.isTable = false;
            $scope.showTable = function () {
                $scope.isTable = true;
            };

            // 顯示「新增的預設畫面」＆「A貼」畫面
            $scope.showAPasteTable = function () {
                $scope.isAPasteTable = true;
                $scope.isBackupTable = false;
                $scope.isValueAddedTable = false;
            };

            // 顯示「備援單」畫面
            $scope.isBackupTable = false;
            $scope.showBackupTable = function () {
                $scope.isBackupTable = true;
                $scope.isAPasteTable = false;
                $scope.isValueAddedTable = false;
            };

            // 顯示「加值」畫面
            // $scope.isValueAddedTable = false;
            $scope.showValueAddedTable = function () {
                $scope.isValueAddedTable = true;
                $scope.isAPasteTable = false;
                $scope.isBackupTable = false;
            };
            /* Show Table end */
        }
    ]);
    return app;
});