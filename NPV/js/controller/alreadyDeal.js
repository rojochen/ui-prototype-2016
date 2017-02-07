define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('alreadyDealCtrl', ['$scope', '$timeout', '$log', '$element',
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

            /* 傳送時間 begin */
            $('#alreadyDealTime-1').daterangepicker({
                singleDatePicker: true,
                // calender_style: "picker_4"
            }, function (start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
            });

            $('#alreadyDealTime-2').daterangepicker({
                singleDatePicker: true,
                // calender_style: "picker_4"
            }, function (start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
            });
            /* 傳送時間 end */

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
                "bInfo": false,
                "bPaginate": true,
                "bLengthChange": false
            };
            $timeout(function () {
                $('#datatable_alreadyDeal').DataTable(opt);
            }, 100)

            // 表格內容資料
            $scope.alreadyDealTableData = [{
                "alreadyDealNpvID": "20161129001",
                "alreadyDealType": "促代",
                "alreadyDealStatus": "OET-Member審核",
                "alreadyDealTime": "2016/11/29 10:25",
                "alreadyDealRole": "yiyang（代理人：pm01）",

            }, {
                "alreadyDealNpvID": "20161129002",
                "alreadyDealType": "活動類別",
                "alreadyDealStatus": "OET-Leader指派",
                "alreadyDealTime": "2016/11/29 15:33",
                "alreadyDealRole": "yiyang（代理人：pm01）",

            }, {
                "alreadyDealNpvID": "20161129003",
                "alreadyDealType": "折扣",
                "alreadyDealStatus": "IT-Member審核",
                "alreadyDealTime": "2016/12/1 9:28",
                "alreadyDealRole": "yiyang",

            }, {
                "alreadyDealNpvID": "20161129004",
                "alreadyDealType": "XXXXXX",
                "alreadyDealStatus": "IT-Member審核",
                "alreadyDealTime": "2016/12/2 13:12",
                "alreadyDealRole": "yiyang",

            }, {
                "alreadyDealNpvID": "20161129005",
                "alreadyDealType": "促代",
                "alreadyDealStatus": "退件",
                "alreadyDealTime": "2016/11/29 13:05",
                "alreadyDealRole": "wsun",

            }];
            $('#datatable_alreadyDeal').DataTable().destroy();
            /* 表格 end */

            /* 手風琴 begin*/
            $('#myCollapsible').collapse({
                toggle: false
            })
            /* 手風琴 end*/

            $scope.aa = function () {
                alert('hello');
            }
        }
    ]);
    return app;
});