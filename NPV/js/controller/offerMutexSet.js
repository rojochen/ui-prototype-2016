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

            $(document).on('hidden.bs.modal', '.modal', function () {
                $('.modal:visible').length && $(document.body).addClass('modal-open');
            });

            $(document).on('show.bs.modal', '.modal', function () {
                $("element.style").css("padding-right", "0");
            });

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

            /* 左右多選框 begin */
            $scope.names = ["162423-POS3RP 超值198月租費", "162424-POS3RP 超值298月租費", "162425-POS3RP 超值598月租費", "162426-POS3RP VIP 888月租費", "162427-POS3UC 熱線 超值198月租費", "162428-POS3UC 熱線 超值298月租費", "162429-POS3UC 熱線 超值598月租費", "162430-POS3UC 熱線 VIP 888月租費", "162979-POS3TI 企業語音漫遊優惠(Google專用)", "162983-POS3TI 專案客戶計量7日型數據漫遊優惠", "162984-POS3TI 專案客戶計量15日型數據漫遊優惠", "163060-POS3RC 無線飆網570月租費", "163061-POS3RC 無線飆網670月租費", "163062-POS3RC 無線飆網770月租費", "163160-POS UC 優惠企業簡訊 $0.82"];
            $scope.names1 = ["162423-POS3RP 超值198月租費", "162424-POS3RP 超值298月租費", "162425-POS3RP 超值598月租費", "162426-POS3RP VIP 888月租費", "162427-POS3UC 熱線 超值198月租費", "162428-POS3UC 熱線 超值298月租費", "162429-POS3UC 熱線 超值598月租費", "162430-POS3UC 熱線 VIP 888月租費", "162979-POS3TI 企業語音漫遊優惠(Google專用)", "162983-POS3TI 專案客戶計量7日型數據漫遊優惠", "162984-POS3TI 專案客戶計量15日型數據漫遊優惠", "163060-POS3RC 無線飆網570月租費", "163061-POS3RC 無線飆網670月租費", "163062-POS3RC 無線飆網770月租費", "163160-POS UC 優惠企業簡訊 $0.82"];

            $(function () {
                //新增_offer項目
                $("#offerAdd1").click(function () {
                    var option = $("#offerSelect1 option:selected");
                    option.appendTo("#offerSelect2");
                });
                $("#offerAdd1_all").click(function () {
                    var $option = $("#offerSelect1 option");
                    $option.appendTo("#offerSelect2");
                });
                $("#offerRemove1").click(function () {
                    var $option = $("#offerSelect2 option:selected");
                    $option.appendTo("#offerSelect1");
                });
                $("#offerRemove1_all").click(function () {
                    var $option = $("#offerSelect2 option");
                    $option.appendTo("#offerSelect1");
                });
                //新增_互斥offer項目
                $("#offerMutexAdd1").click(function () {
                    var option = $("#offerMutexSelect1 option:selected");
                    option.appendTo("#offerMutexSelect2");
                });
                $("#offerMutexAdd1_all").click(function () {
                    var $option = $("#offerMutexSelect1 option");
                    $option.appendTo("#offerMutexSelect2");
                });
                $("#offerMutexRemove1").click(function () {
                    var $option = $("#offerMutexSelect2 option:selected");
                    $option.appendTo("#offerMutexSelect1");
                });
                $("#offerMutexRemove1_all").click(function () {
                    var $option = $("#offerMutexSelect2 option");
                    $option.appendTo("#offerMutexSelect1");
                });
                //修改_offer項目
                $("#offerAdd2").click(function () {
                    var option = $("#offerSelect3 option:selected");
                    option.appendTo("#offerSelect4");
                });
                $("#offerAdd2_all").click(function () {
                    var $option = $("#offerSelect3 option");
                    $option.appendTo("#offerSelect4");
                });
                $("#offerRemove2").click(function () {
                    var $option = $("#offerSelect4 option:selected");
                    $option.appendTo("#offerSelect3");
                });
                $("#offerRemove2_all").click(function () {
                    var $option = $("#offerSelect4 option");
                    $option.appendTo("#offerSelect3");
                });
                //修改_互斥offer項目
                $("#offerMutexAdd2").click(function () {
                    var option = $("#offerMutexSelect3 option:selected");
                    option.appendTo("#offerMutexSelect4");
                });
                $("#offerMutexAdd2_all").click(function () {
                    var $option = $("#offerMutexSelect3 option");
                    $option.appendTo("#offerMutexSelect4");
                });
                $("#offerMutexRemove2").click(function () {
                    var $option = $("#offerMutexSelect4 option:selected");
                    $option.appendTo("#offerMutexSelect3");
                });
                $("#offerMutexRemove2_all").click(function () {
                    var $option = $("#offerMutexSelect4 option");
                    $option.appendTo("#offerMutexSelect3");
                });
            });
            /* 左右多選框 end */

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