define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('tableQueryCtrl', ['$scope', '$timeout', '$log', '$element',
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

            /* 匯入日期區間 begin */
            $('#tableQueryTime-1').daterangepicker({
                singleDatePicker: true,
                // calender_style: "picker_4"
            }, function (start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
            });

            $('#tableQueryTime-2').daterangepicker({
                singleDatePicker: true,
                // calender_style: "picker_4"
            }, function (start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
            });
            /* 匯入日期區間 end */

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
                "bLengthChange": false
            };

            $timeout(function () {
                $('#datatable_tableQuery').DataTable(opt);
            }, 100)

            // 表格內容資料
            $scope.tableQueryTableData = [{
                "tableQueryID": "1",
                "tableQueryName": "4G_外籍人士優惠方案(24個月)",
                "tableQueryFile": "4G_外籍人士優惠方案(24個月)-20160815.xlsx",
                "tableQueryVersion": "",
                "tableQueryRole": "Sharice Lin #17654",
                "tableQueryImportRole": "pm01",
                "tableQueryDate": "2016/08/19 11:08:52",
                "tableQueryStatus": "匯入失敗 促代數量3筆,Device數量62筆",
            }, {
                "tableQueryID": "2",
                "tableQueryName": "3G由衷感謝_299續約專案(簽約24個月)",
                "tableQueryFile": "1_3G由衷感謝續約_24M-0701.xlsx",
                "tableQueryVersion": "",
                "tableQueryRole": "",
                "tableQueryImportRole": "pm01",
                "tableQueryDate": "2016/07/01 14:49:52",
                "tableQueryStatus": "匯入失敗 Device數量43筆",
            }, {
                "tableQueryID": "3",
                "tableQueryName": "3G由衷感謝_299續約專案(簽約24個月)",
                "tableQueryFile": "1_3G由衷感謝續約_24M-0701.xlsx",
                "tableQueryVersion": "",
                "tableQueryRole": "",
                "tableQueryImportRole": "pm01",
                "tableQueryDate": "2016/07/01 14:06:05",
                "tableQueryStatus": "匯入失敗 Device數量43筆",
            }, {
                "tableQueryID": "4",
                "tableQueryName": "3G由衷感謝_299續約專案(簽約24個月)",
                "tableQueryFile": "1_3G由衷感謝續約_24M-0701.xlsx",
                "tableQueryVersion": "",
                "tableQueryRole": "",
                "tableQueryImportRole": "pm01",
                "tableQueryDate": "2016/07/01 13:33:20",
                "tableQueryStatus": "匯入失敗 Device數量43筆",
            }, {
                "tableQueryID": "5",
                "tableQueryName": "3G由衷感謝_299續約專案(簽約24個月)",
                "tableQueryFile": "1_3G由衷感謝續約_24M-0701.xlsx",
                "tableQueryVersion": "",
                "tableQueryRole": "",
                "tableQueryImportRole": "pm01",
                "tableQueryDate": "2016/07/01 11:52:25",
                "tableQueryStatus": "匯入失敗 促代數量2筆,Device數量43筆",
            }, {
                "tableQueryID": "6",
                "tableQueryName": "3G由衷感謝_299續約專案(簽約24個月)",
                "tableQueryFile": "1_3G由衷感謝續約_24M-0701.xlsx",
                "tableQueryVersion": "",
                "tableQueryRole": "",
                "tableQueryImportRole": "pm01",
                "tableQueryDate": "2016/07/01 11:37:54",
                "tableQueryStatus": "匯入失敗 促代數量2筆,Device數量43筆",
            }, {
                "tableQueryID": "7",
                "tableQueryName": "新測試_2轉4升級方案",
                "tableQueryFile": "政府補助2轉4升級方案_2G易付精選_20160601.xlsx",
                "tableQueryVersion": "6",
                "tableQueryRole": "Sharice Lin #17654",
                "tableQueryImportRole": "pm01",
                "tableQueryDate": "2016/06/16 14:56:56",
                "tableQueryStatus": "SPV For Device檢核成功 促代數量3筆,Device數量2筆",
            }, {
                "tableQueryID": "8",
                "tableQueryName": "新測試_2轉4升級方案",
                "tableQueryFile": "政府補助2轉4升級方案_2G易付精選_20160601.xlsx",
                "tableQueryVersion": "",
                "tableQueryRole": "Sharice Lin #17654",
                "tableQueryImportRole": "pm01",
                "tableQueryDate": "2016/07/01 14:54:32",
                "tableQueryStatus": "匯入失敗 促代數量3筆,Device數量2筆",
            }, {
                "tableQueryID": "9",
                "tableQueryName": "NEW_2轉4升級方案",
                "tableQueryFile": "政府補助2轉4升級方案_2G易付精選_20160601.xlsx",
                "tableQueryVersion": "",
                "tableQueryRole": "Sharice Lin #17654",
                "tableQueryImportRole": "pm01",
                "tableQueryDate": "2016/07/01 14:53:34",
                "tableQueryStatus": "SPV For Device檢核成功 促代數量1筆,Device數量2筆",
            }, {
                "tableQueryID": "10",
                "tableQueryName": "NEW_2轉4升級方案",
                "tableQueryFile": "政府補助2轉4升級方案_2G易付精選_20160601.xlsx",
                "tableQueryVersion": "",
                "tableQueryRole": "Sharice Lin #17654",
                "tableQueryImportRole": "pm01",
                "tableQueryDate": "2016/07/01 13:55:45",
                "tableQueryStatus": "匯入失敗 促代數量1筆,Device數量2筆",
            }, {
                "tableQueryID": "11",
                "tableQueryName": "NEW_2轉4升級方案",
                "tableQueryFile": "政府補助2轉4升級方案_2G易付精選_20160601.xlsx",
                "tableQueryVersion": "",
                "tableQueryRole": "Sharice Lin #17654",
                "tableQueryImportRole": "pm01",
                "tableQueryDate": "2016/07/01 14:53:34",
                "tableQueryStatus": "SPV For Device檢核成功 促代數量1筆,Device數量2筆",
            }, {
                "tableQueryID": "12",
                "tableQueryName": "NEW_2轉4升級方案",
                "tableQueryFile": "政府補助2轉4升級方案_2G易付精選_20160601.xlsx",
                "tableQueryVersion": "",
                "tableQueryRole": "Sharice Lin #17654",
                "tableQueryImportRole": "pm01",
                "tableQueryDate": "2016/07/01 13:55:45",
                "tableQueryStatus": "匯入失敗 促代數量1筆,Device數量2筆",
            }];

            $('#datatable_tableQuery').DataTable().destroy();
            /* 表格 end */

            /* notify 通知訊息 begin */
            // Success
            $scope.pnotifyAddSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '檔案已匯入，請等待 MAIL 通知(約五分鐘)');
            }
            /* notify 通知訊息 end */

            /* modal begin */
            $(document).on('hidden.bs.modal', '.modal', function () {
                $('.modal:visible').length && $(document.body).addClass('modal-open');
            });

            $(document).on('show.bs.modal', '.modal', function () {
                $("element.style").css("padding-right", "0");
            });
            /* modal end */

            /* 取消鍵 begin */
            //匯出大表
            $scope.cancel = function () {
                $timeout(function () {
                    $('#tableQueryExport').modal('hide')
                    $('#tableQueryExportConfirmCancel').modal('hide')
                }, 100)
            }

            //匯入大表
            $scope.cancel2 = function () {
                $timeout(function () {
                    $('#tableQueryImport').modal('hide')
                    $('#tableQueryImportConfirmCancel').modal('hide')
                }, 100)
            }
            /* 取消鍵 end */

            /* begin */
            $scope.isTable = false;
            $scope.showTable = function () {
                $scope.isTable = true;
            }
            /* end */
        }
    ]);
    return app;
});