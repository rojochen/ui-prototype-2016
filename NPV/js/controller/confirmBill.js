define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('confirmBillCtrl', ['$scope', '$timeout', '$log', '$element',
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
                "bInfo": true,
                "bPaginate": true,
                "bLengthChange": false,
                "bSort": false
            };
            $timeout(function () {
                $('#datatable_confirmBill').DataTable(opt);
                $('#datatable_confirmBill_2').DataTable(opt);
            }, 100)

            /* lightbox open */
            $(document).on('hidden.bs.modal', '.modal', function () {
                $('.modal:visible').length && $(document.body).addClass('modal-open');
            });
            /* lightbox end */

            $scope.table2ItemStyle = {
                'padding': '0px'
            };

            // 表格內容資料
            $scope.confirmBillTableData =
                // [{
                //     "confirmBillID": "list1",
                //     "confirmBillNpvID": "20161129004",
                //     "confirmBillType": "促代-4G",
                //     "confirmBillSecondType": "Bundle(1)",
                //     "confirmBillTime": "2016/11/29 11:55",
                //     "confirmBillPM": "yiyang",
                //     "confirmBillStatus": "待派單"
                // }, {
                //     "confirmBillID": "list2",
                //     "confirmBillNpvID": "20161129005",
                //     "confirmBillType": "折扣 (2)",
                //     "confirmBillSecondType": "N/A",
                //     "confirmBillTime": "2016/11/29 14:21",
                //     "confirmBillPM": "tatakao",
                //     "confirmBillStatus": "待派單"
                // }, {
                //     "confirmBillID": "list3",
                //     "confirmBillNpvID": "20161129006",
                //     "confirmBillType": "促代-4G／3G",
                //     "confirmBillSecondType": "Single(3)",
                //     "confirmBillTime": "2016/11/29 14:32",
                //     "confirmBillPM": "tatakao",
                //     "confirmBillStatus": "待派單"
                // }, {
                //     "confirmBillID": "list4",
                //     "confirmBillNpvID": "20161129007",
                //     "confirmBillType": "促代-3G",
                //     "confirmBillSecondType": "Single(1)",
                //     "confirmBillTime": "2016/11/29 11:45",
                //     "confirmBillPM": "yiyang",
                //     "confirmBillStatus": "待派單"
                // }, {
                //     "confirmBillID": "list5",
                //     "confirmBillNpvID": "20161129017",
                //     "confirmBillType": "促代-4G",
                //     "confirmBillSecondType": "Single(1)",
                //     "confirmBillTime": "2016/11/29 15:25",
                //     "confirmBillPM": "yiyang",
                //     "confirmBillStatus": "待派單"
                // }, {
                //     "confirmBillID": "list6",
                //     "confirmBillNpvID": "20161129018",
                //     "confirmBillType": "促代-4G",
                //     "confirmBillSecondType": "Single(1)",
                //     "confirmBillTime": "2016/11/29 16:55",
                //     "confirmBillPM": "yiyang",
                //     "confirmBillStatus": "待派單"
                // }, {
                //     "confirmBillID": "list7",
                //     "confirmBillNpvID": "20161129019",
                //     "confirmBillType": "促代-4G",
                //     "confirmBillSecondType": "Single(1)",
                //     "confirmBillTime": "2016/11/29 17:55",
                //     "confirmBillPM": "yiyang",
                //     "confirmBillStatus": "待派單"
                // }, {
                //     "confirmBillID": "list8",
                //     "confirmBillNpvID": "20161129020",
                //     "confirmBillType": "促代-4G",
                //     "confirmBillSecondType": "Single(1)",
                //     "confirmBillTime": "2016/11/29 17:55",
                //     "confirmBillPM": "yiyang",
                //     "confirmBillStatus": "待派單"
                // }

                [
                    //     {
                    //     "confirmBillID": "list0",
                    //     "second": {
                    //         "id": "1",
                    //         "type": "BB01",
                    //         "secondType": "Bundle(團結力量大)",
                    //         "time": "3G團體優惠專案"
                    //     }
                    // }, 
                    {
                        "confirmBillID": "list1",
                        "confirmBillNpvID": "20161129004",
                        "confirmBillType": "促代-4G",
                        "confirmBillSecondType": "Bundle(1)",
                        "confirmBillTime": "2016/11/29 11:55",
                        "confirmBillPM": "yiyang",
                        "confirmBillStatus": "待派單",
                        "second": {
                            "id": "1",
                            "type": "LVK00EN-YEN3",
                            "secondType": "Bundle(同生共死)",
                            "time": "G GOGORO方案_新絕配599限30手機案-預繳1200"
                        }
                    }, {
                        "confirmBillID": "list2",
                        "confirmBillNpvID": "20161129005",
                        "confirmBillType": "折扣 (2)",
                        "confirmBillSecondType": "N/A",
                        "confirmBillTime": "2016/11/29 14:21",
                        "confirmBillPM": "tatakao",
                        "confirmBillStatus": "待派單",
                        "second": [{
                            "id": "1",
                            "type": "N/A",
                            "secondType": "優惠折扣",
                            "time": "測試-3G大雙網165限24單門號送月租費方案-免預繳"
                        }, {
                            "id": "2",
                            "type": "N/A",
                            "secondType": "優惠折扣",
                            "time": "帳單優惠400元*3個月(N)"
                        }]
                    }, {
                        "confirmBillID": "list3",
                        "confirmBillNpvID": "20161129006",
                        "confirmBillType": "促代-4G／3G",
                        "confirmBillSecondType": "Single(3)",
                        "confirmBillTime": "2016/11/29 14:32",
                        "confirmBillPM": "tatakao",
                        "confirmBillStatus": "待派單",
                        "second": [{
                            "id": "1",
                            "type": "IXC00FP-YFY4",
                            "secondType": "Single",
                            "time": "4G GOGORO方案_新絕配599限30手機案-預繳2400"
                        }, {
                            "id": "2",
                            "type": "IXAVHE555435",
                            "secondType": "Single",
                            "time": "(附)4G新絕配599限30-手機"
                        }, {
                            "id": "3",
                            "type": "IXLVHE555436",
                            "secondType": "Single",
                            "time": "(附)4G新絕配1199限24-手機"
                        }]
                    }, {
                        "confirmBillID": "list4",
                        "confirmBillNpvID": "20161129007",
                        "confirmBillType": "促代-3G",
                        "confirmBillSecondType": "Single(1)",
                        "confirmBillTime": "2016/11/29 11:45",
                        "confirmBillPM": "yiyang",
                        "confirmBillStatus": "待派單",
                        "second": {
                            "id": "1",
                            "type": "CAOVH0555349",
                            "secondType": "Single",
                            "time": "遠傳視訊會議1500元"
                        }
                    }, {
                        "confirmBillID": "list5",
                        "confirmBillNpvID": "20161129017",
                        "confirmBillType": "促代-4G",
                        "confirmBillSecondType": "Single(1)",
                        "confirmBillTime": "2016/11/29 15:25",
                        "confirmBillPM": "yiyang",
                        "confirmBillStatus": "待派單",
                        "second": {
                            "id": "1",
                            "type": "TADVHF555789",
                            "secondType": "Single",
                            "time": "4G_新絕配799限30_手機"
                        }
                    }, {
                        "confirmBillID": "list6",
                        "confirmBillNpvID": "20161129018",
                        "confirmBillType": "促代-4G",
                        "confirmBillSecondType": "Single(1)",
                        "confirmBillTime": "2016/11/29 16:55",
                        "confirmBillPM": "yiyang",
                        "confirmBillStatus": "待派單",
                        "second": {
                            "id": "1",
                            "type": "EHELLFP-NFY4",
                            "secondType": "Single",
                            "time": "4G續約+新絕配799(30)_預繳6000"
                        }
                    }, {
                        "confirmBillID": "list7",
                        "confirmBillNpvID": "20161129019",
                        "confirmBillType": "促代-4G",
                        "confirmBillSecondType": "Single(1)",
                        "confirmBillTime": "2016/11/29 17:55",
                        "confirmBillPM": "yiyang",
                        "confirmBillStatus": "待派單",
                        "second": {
                            "id": "1",
                            "type": "FYGVHF555693",
                            "secondType": "Single",
                            "time": "(附)4G續約_新絕配799限30_手機"
                        }
                    }, {
                        "confirmBillID": "list8",
                        "confirmBillNpvID": "20161129020",
                        "confirmBillType": "促代-4G",
                        "confirmBillSecondType": "Single(1)",
                        "confirmBillTime": "2016/11/29 17:55",
                        "confirmBillPM": "yiyang",
                        "confirmBillStatus": "待派單",
                        "second": {
                            "id": "1",
                            "type": "MTU00FP-NFY4",
                            "secondType": "Single",
                            "time": "4G啟用+新絕配1199(30)_預繳10000"
                        }
                    }
                ]

            $('#datatable_confirmBill').DataTable().destroy();


            // 表格-2 內容資料
            // $scope.confirmBillTableData_2 = [{
            //     {
            //     "ID": "1",
            //     "confirmBillNpvID": "1",
            //     "confirmBillType": "BB01",
            //     "confirmBillSecondType": "Bundle(團結力量大)",
            //     "confirmBillTime": "3G團體優惠專案"
            // }, 

            // "id": [{
            //     "confirmBillNpvID": "1",
            //     "confirmBillType": "LVK00EN-YEN3",
            //     "confirmBillSecondType": "Bundle(同生共死)",
            //     "confirmBillTime": "G GOGORO方案_新絕配599限30手機案-預繳1200"
            // }, {
            //     "confirmBillNpvID": "1",
            //     "confirmBillType": "N/A",
            //     "confirmBillSecondType": "優惠折扣",
            //     "confirmBillTime": "測試-3G大雙網165限24單門號送月租費方案-免預繳"
            // }, {
            //     "confirmBillNpvID": "2",
            //     "confirmBillType": "N/A",
            //     "confirmBillSecondType": "優惠折扣",
            //     "confirmBillTime": "帳單優惠400元*3個月(N)"
            // }]


            // }];
            // $('#datatable_confirmBill_2').DataTable().destroy();
            /* 表格-2 end */

            /* 手風琴 begin*/
            $('#myCollapsible').collapse({
                toggle: false
            })
            /* 手風琴 end*/
        }
    ]);
    return app;
});