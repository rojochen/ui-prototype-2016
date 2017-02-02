define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('classificationOfferSetCtrl', ['$scope', '$timeout', '$log', '$element',
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

            /* 促代offer簡稱設定 begin */
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
                $('#datatable_classificationOffer').DataTable(opt);
            }, 100)

            // 表格內容資料
            $scope.classificationOfferTableData = [{
                "classificationOfferName": "113221-POS RP 企業2001月租費",
                "classificationOfferAbbr": "",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "26-4月 -10",
            }, {
                "classificationOfferName": "113218-POS RP 超值598月租費",
                "classificationOfferAbbr": "",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "26-4月 -10",
            }, {
                "classificationOfferName": "112644-POS RC 行動上網GPRS 100型月租費",
                "classificationOfferAbbr": "",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "26-4月 -10",
            }, {
                "classificationOfferName": "119860-POS RP 帳戶移轉專用月租費",
                "classificationOfferAbbr": "",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "26-4月 -10",
            }, {
                "classificationOfferName": "148078-POS3RP 離島399月租費",
                "classificationOfferAbbr": "離島399",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "13-1月 -11",
            }, {
                "classificationOfferName": "150700-POS3RP 國內上網專用-無線飆網基本月租費",
                "classificationOfferAbbr": "",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "21-10月-11",
            }, {
                "classificationOfferName": "150697-POS3RC 國內上網專用-無線飆網775月租費",
                "classificationOfferAbbr": "飆網775",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "21-10月-11",
            }, {
                "classificationOfferName": "150964-POS RC Wifly/FET Wi-Fi 199月租費",
                "classificationOfferAbbr": "",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "10-11月-11",
            }, {
                "classificationOfferName": "150966-POS3RC Wifly/FET Wi-Fi 199月租費",
                "classificationOfferAbbr": "",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "10-11月-11",
            }, {
                "classificationOfferName": "150965-POS3RC Wifly/FET Wi-Fi 計時型月租費",
                "classificationOfferAbbr": "",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "10-11月-11",
            }, {
                "classificationOfferName": "113221-POS RP 企業2001月租費",
                "classificationOfferAbbr": "",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "26-4月 -10",
            }, {
                "classificationOfferName": "113218-POS RP 超值598月租費",
                "classificationOfferAbbr": "",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "26-4月 -10",
            }, {
                "classificationOfferName": "112644-POS RC 行動上網GPRS 100型月租費",
                "classificationOfferAbbr": "",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "26-4月 -10",
            }, {
                "classificationOfferName": "119860-POS RP 帳戶移轉專用月租費",
                "classificationOfferAbbr": "",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "26-4月 -10",
            }, {
                "classificationOfferName": "148078-POS3RP 離島399月租費",
                "classificationOfferAbbr": "離島399",
                "classificationOfferRole": "SYSTEM",
                "classificationOfferDate": "13-1月 -11",
            }];

            $('#datatable_classificationOffer').DataTable().destroy();
            /* 促代offer簡稱設定表格 end */

            /* notify 通知訊息 begin */
            // Success
            $scope.pnotifyAddSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '新增完成！');
            }

            $scope.pnotifyEditSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '修改完成！');

                // 取消鍵
                $timeout(function () {
                    $('#classOfferEdit').modal('hide')
                    $('#classOfferEditConfirmCancel').modal('hide')
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
                    $('#classOfferEdit').modal('hide')
                    $('#classOfferEditConfirmCancel').modal('hide')
                }, 100)
            }
            /* 取消鍵 end */
        }
    ]);
    return app;
});