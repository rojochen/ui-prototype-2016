define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('demoYvonneCtrl', ['$scope', '$timeout', '$log', '$element', 'ShoppingCartEntity', 'pnotifyService',
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
            $('#editFileTime').daterangepicker({
                singleDatePicker: true,
                // calender_style: "picker_4"
            }, function (start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
            });
            /* 匯入日期區間 end */

            /* begin */
            $scope.isTable = false;
            $scope.showTable = function () {
                $scope.isTable = true;
            }
            /* end */

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
                $('#datatable_demoYvonne').DataTable(opt);
            }, 100)

            // 表格內容資料
            $scope.demoYvonneTableData = [{
                "demoYvonneID": "1",
                "demoYvonneName": "4G_外籍人士優惠方案(24個月)",
                "demoYvonneFile": "4G_外籍人士優惠方案(24個月)-20160815.xlsx",
                "demoYvonneVersion": "",
                "demoYvonneRole": "Sharice Lin #17654",
                "demoYvonneImportRole": "pm01",
                "demoYvonneDate": "2016/08/19 11:08:52",
                "demoYvonneStatus": "匯入失敗 促代數量3筆,Device數量62筆"
            }];

            $('#datatable_demoYvonne').DataTable().destroy();
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
        }
    ]);
    return app;
});