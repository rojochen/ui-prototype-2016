define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('npvStatusQueryCtrl', ['$scope', '$timeout', '$log', '$element',
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
                $('#datatable_npvStatusQuery_1').DataTable(opt);
            }, 100)

            // 表格內容資料
            $scope.npvStatusQueryTableData_1 = [{
                "npvStatusQueryNpvID": "20161129001",
                "npvStatusQueryType": "促代",
                "npvStatusQueryStatus": "OET-Member審核",
                "npvStatusQueryTime": "2016/11/29 10:25",
                "npvStatusQueryRole": "yiyang（代理人：pm01）",

            }, {
                "npvStatusQueryNpvID": "20161129002",
                "npvStatusQueryType": "活動類別",
                "npvStatusQueryStatus": "OET-Leader指派",
                "npvStatusQueryTime": "2016/11/29 15:33",
                "npvStatusQueryRole": "yiyang（代理人：pm01）",

            }, {
                "npvStatusQueryNpvID": "20161129003",
                "npvStatusQueryType": "折扣",
                "npvStatusQueryStatus": "IT-Member審核",
                "npvStatusQueryTime": "2016/12/1 9:28",
                "npvStatusQueryRole": "yiyang",

            }, {
                "npvStatusQueryNpvID": "20161129004",
                "npvStatusQueryType": "XXXXXX",
                "npvStatusQueryStatus": "IT-Member審核",
                "npvStatusQueryTime": "2016/12/2 13:12",
                "npvStatusQueryRole": "yiyang",

            }, {
                "npvStatusQueryNpvID": "20161129005",
                "npvStatusQueryType": "促代",
                "npvStatusQueryStatus": "退件",
                "npvStatusQueryTime": "2016/11/29 13:05",
                "npvStatusQueryRole": "wsun",

            }];
            $('#datatable_npvStatusQuery_1').DataTable().destroy();
            /* 表格 end */

            // 表格-2 內容資料
            $scope.npvStatusQueryTableData_2 = [{
                "npvID": "20161129001",
                "npvType": "促代",
                "npvStatus": "草稿編輯",
                "npvSpec": "草稿編輯",
                "npvTime": "2016/11/29 10:10",
                "npvRole": "Mobility PM",
                "npvPeople": "pm01",
                "npvAgent": "yiyang"
            }, {
                "npvID": "20161129001",
                "npvType": "促代",
                "npvStatus": "草稿編輯",
                "npvSpec": "草稿編輯",
                "npvTime": "2016/11/29 10:15",
                "npvRole": "Mobility PM",
                "npvPeople": "pm01",
                "npvAgent": "yiyang"
            }, {
                "npvID": "20161129001",
                "npvType": "促代",
                "npvStatus": "待OET-Leader指派",
                "npvSpec": "草稿編輯",
                "npvTime": "2016/11/29 10:25",
                "npvRole": "Mobility PM",
                "npvPeople": "pm01",
                "npvAgent": "yiyang"
            }, {
                "npvID": "20161129001",
                "npvType": "促代",
                "npvStatus": "待OET-Leader指派",
                "npvSpec": "送審起單",
                "npvTime": "2016/11/29 10:25",
                "npvRole": "Mobility PM",
                "npvPeople": "pm01",
                "npvAgent": "yiyang"
            }, {
                "npvID": "20161129001",
                "npvType": "促代",
                "npvStatus": "草稿編輯",
                "npvSpec": "退件-草稿編輯(MPM/pm01)",
                "npvTime": "2016/11/29 10:30",
                "npvRole": "OET-Leader",
                "npvPeople": "oet01",
                "npvAgent": ""
            }, {
                "npvID": "20161129001",
                "npvType": "促代",
                "npvStatus": "待OET-Leader指派",
                "npvSpec": "退件重送",
                "npvTime": "2016/11/29 10:55",
                "npvRole": "Mobility PM",
                "npvPeople": "pm01",
                "npvAgent": ""
            }, {
                "npvID": "20161129001",
                "npvType": "促代",
                "npvStatus": "待OET-Member審核",
                "npvSpec": "指派",
                "npvTime": "2016/11/29 11:05",
                "npvRole": "OET-Leader",
                "npvPeople": "oet01",
                "npvAgent": ""
            }, {
                "npvID": "20161129001",
                "npvType": "促代",
                "npvStatus": "草稿編輯",
                "npvSpec": "退件-草稿編輯(MPM/pm01)",
                "npvTime": "2016/11/29 11:15",
                "npvRole": "OET-Member",
                "npvPeople": "oet01",
                "npvAgent": ""
            }, {
                "npvID": "20161129001",
                "npvType": "促代",
                "npvStatus": "待OET-Member審核",
                "npvSpec": "退件重送",
                "npvTime": "2016/11/29 11:30",
                "npvRole": "Mobility PM",
                "npvPeople": "pm01",
                "npvAgent": ""
            }, {
                "npvID": "20161129001",
                "npvType": "促代",
                "npvStatus": "待PM確認",
                "npvSpec": "審核",
                "npvTime": "2016/11/29 11:45",
                "npvRole": "OET-Member",
                "npvPeople": "oet01",
                "npvAgent": ""
            }, {
                "npvID": "20161129001",
                "npvType": "促代",
                "npvStatus": "待IA上傳",
                "npvSpec": "審核",
                "npvTime": "2016/11/29 12:10",
                "npvRole": "Mobility PM",
                "npvPeople": "pm01",
                "npvAgent": ""
            }, {
                "npvID": "20161129001",
                "npvType": "促代",
                "npvStatus": "檔案上傳",
                "npvSpec": "",
                "npvTime": "2016/11/30 12:00",
                "npvRole": "API",
                "npvPeople": "Batch API Name",
                "npvAgent": ""
            }];
            $('#datatable_npvStatusQuery_2').DataTable().destroy();
            /* 表格-2 end */

            /* modal begin */
            $(document).on('hidden.bs.modal', '.modal', function () {
                $('.modal:visible').length && $(document.body).addClass('modal-open');
            });

            $(document).on('show.bs.modal', '.modal', function () {
                $("element.style").css("padding-right", "0");
            });
            /* modal end */

            /* 手風琴 begin*/
            $('#myCollapsible').collapse({
                toggle: false
            })
            /* 手風琴 end*/

            /* 傳送時間 begin */
            // $('#npvStatusQueryTime-1').daterangepicker({
            //     singleDatePicker: true,
            //     // calender_style: "picker_4"
            // }, function (start, end, label) {
            //     console.log(start.toISOString(), end.toISOString(), label);
            // });

            // $('#npvStatusQueryTime-2').daterangepicker({
            //     singleDatePicker: true,
            //     // calender_style: "picker_4"
            // }, function (start, end, label) {
            //     console.log(start.toISOString(), end.toISOString(), label);
            // });
            /* 傳送時間 end */

            /* 日期選擇器 begin*/
            $scope.npvStatusDatePicker = new Date();
            /* 日期選擇器 end*/
        }
    ]);
    return app;
});