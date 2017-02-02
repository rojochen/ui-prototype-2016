define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('offerMutexSetCtrl', ['$scope', '$timeout', '$log', '$element',
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

            /* offer互斥設定維護 begin */
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
                $('#datatable_offerMutexSet').DataTable(opt);
            }, 100)

            // 表格內容資料
            $scope.offerMutexSetTableData = [{
                "offerMutexID": "112646",
                "offerMutexName": "POS RV 行動上網加值服務",
                "offerMutexMutexID": "113825",
                "offerMutexMutexName": "POS RV 行動上網加值服務",
                "offerMutexMessage": "test",
                "offerMutexAlert": "警告並擋件",
                "offerMutexReason": "",
                "offerMutexRole": "admin",
                "offerMutexDate": "12-9月 -16"
            }, {
                "offerMutexID": "112646",
                "offerMutexName": "POS RV 行動上網加值服務",
                "offerMutexMutexID": "113827",
                "offerMutexMutexName": "POS SM 多方通話",
                "offerMutexMessage": "test",
                "offerMutexAlert": "警告並擋件",
                "offerMutexReason": "",
                "offerMutexRole": "admin",
                "offerMutexDate": "14-2月 -12"
            }, {
                "offerMutexID": "112646",
                "offerMutexName": "POS RV 行動上網加值服務",
                "offerMutexMutexID": "113833",
                "offerMutexMutexName": "POS SM 通話限制 Call Barring",
                "offerMutexMessage": "test",
                "offerMutexAlert": "警告並擋件",
                "offerMutexReason": "",
                "offerMutexRole": "admin",
                "offerMutexDate": "14-2月 -12"
            }, {
                "offerMutexID": "112613",
                "offerMutexName": "POS RV MVPN IN虛擬網內通信月租費",
                "offerMutexMutexID": "113825",
                "offerMutexMutexName": "POS SM 欠款催收限制發話",
                "offerMutexMessage": "test",
                "offerMutexAlert": "警告並擋件",
                "offerMutexReason": "",
                "offerMutexRole": "admin",
                "offerMutexDate": "14-2月 -12"
            }, {
                "offerMutexID": "112613",
                "offerMutexName": "POS RV MVPN IN虛擬網內通信月租費",
                "offerMutexMutexID": "113827",
                "offerMutexMutexName": "POS SM 多方通話",
                "offerMutexMessage": "test",
                "offerMutexAlert": "警告並擋件",
                "offerMutexReason": "",
                "offerMutexRole": "admin",
                "offerMutexDate": "09-4月 -12"
            }, {
                "offerMutexID": "112613",
                "offerMutexName": "POS RV 行動上網加值服務",
                "offerMutexMutexID": "113833",
                "offerMutexMutexName": "POS SM 通話限制 Call Barring",
                "offerMutexMessage": "test",
                "offerMutexAlert": "警告並擋件",
                "offerMutexReason": "",
                "offerMutexRole": "admin",
                "offerMutexDate": "02-5月 -12"
            }, {
                "offerMutexID": "112598",
                "offerMutexName": "POS RV MVPN月租費-帳戶階層",
                "offerMutexMutexID": "113825",
                "offerMutexMutexName": "POS SM 欠款催收限制發話",
                "offerMutexMessage": "test",
                "offerMutexAlert": "警告並擋件",
                "offerMutexReason": "",
                "offerMutexRole": "admin",
                "offerMutexDate": "02-5月 -12"
            }, {
                "offerMutexID": "112598",
                "offerMutexName": "POS RV MVPN月租費-帳戶階層",
                "offerMutexMutexID": "113827",
                "offerMutexMutexName": "POS SM 多方通話",
                "offerMutexMessage": "test",
                "offerMutexAlert": "警告並擋件",
                "offerMutexReason": "",
                "offerMutexRole": "admin",
                "offerMutexDate": "02-5月 -12"
            }, {
                "offerMutexID": "112598",
                "offerMutexName": "POS RV MVPN月租費-帳戶階層",
                "offerMutexMutexID": "113833",
                "offerMutexMutexName": "POS SM 通話限制 Call Barring",
                "offerMutexMessage": "test",
                "offerMutexAlert": "警告並擋件",
                "offerMutexReason": "",
                "offerMutexRole": "admin",
                "offerMutexDate": "07-6月 -12"
            }, {
                "offerMutexID": "112601",
                "offerMutexName": "POS RV 語音廣播功能",
                "offerMutexMutexID": "113825",
                "offerMutexMutexName": "POS SM 欠款催收限制發話",
                "offerMutexMessage": "test",
                "offerMutexAlert": "警告並擋件",
                "offerMutexReason": "",
                "offerMutexRole": "admin",
                "offerMutexDate": "07-6月 -12"
            }, {
                "offerMutexID": "112601",
                "offerMutexName": "POS RV 語音廣播功能",
                "offerMutexMutexID": "113827",
                "offerMutexMutexName": "POS RV 行動上網加值服務",
                "offerMutexMessage": "test",
                "offerMutexAlert": "警告並擋件",
                "offerMutexReason": "",
                "offerMutexRole": "admin",
                "offerMutexDate": "10-7月 -12"
            }, {
                "offerMutexID": "112601",
                "offerMutexName": "POS RV 語音廣播功能",
                "offerMutexMutexID": "113833",
                "offerMutexMutexName": "POS SM 通話限制 Call Barring",
                "offerMutexMessage": "test",
                "offerMutexAlert": "警告並擋件",
                "offerMutexReason": "",
                "offerMutexRole": "admin",
                "offerMutexDate": "10-7月 -12"
            }];

            $('#datatable_offerMutexSet').DataTable().destroy();
            /* offer互斥設定維護 end */

            /* notify 通知訊息 begin */
            // Success
            $scope.pnotifyAddSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '新增完成！');

                // 取消鍵
                $timeout(function () {
                    $('#offerMutexSetAdd').modal('hide')
                    $('#offerMutexConfirmCancelAdd').modal('hide')
                }, 100)
            }

            $scope.pnotifyEditSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '修改完成！');

                // 取消鍵
                $timeout(function () {
                    $('#offerMutexSetEdit').modal('hide')
                    $('#offerMutexConfirmCancelEdit').modal('hide')
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
                    $('#offerMutexSetAdd').modal('hide')
                    $('#offerMutexConfirmCancelAdd').modal('hide')
                }, 100)
            }

            $scope.cancel2 = function () {
                $timeout(function () {
                    $('#offerMutexSetEdit').modal('hide')
                    $('#offerMutexConfirmCancelEdit').modal('hide')
                }, 100)
            }
            /* 取消鍵 end */
        }
    ]);
    return app;
});