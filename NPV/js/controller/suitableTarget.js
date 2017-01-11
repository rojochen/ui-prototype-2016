define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('suitableTargetCtrl', ['$scope', '$timeout', '$log', '$element',
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
            }
            /* end */

            /* begin */
            $scope.tableControl = false;
            $scope.showTable = function () {
                $scope.tableControl = true;
            }
            /* end */

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
                "scrollX": true,

            };

            var opt2 = {
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


            };

            $scope.suitableTargetTableData = [{
                "suitableTargetSort": "1",
                "suitableTargetName": "AGE-年齡",
                "suitableTargetClassification": ">=|60",
                "systemName": "消費者年齡60歲(含)以上",
                "classification": ";1;2;",
                "ITParameterSetValue": "立即",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "admin",
                "modifyDate": "08-3月 -10"
            }, {
                "suitableTargetSort": "2",
                "suitableTargetName": "BAN-企業客戶",
                "suitableTargetClassification": "=|36518140",
                "systemName": "中國人壽(36518140)",
                "classification": ";1;2;",
                "ITParameterSetValue": "下一個cycle勿選",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "admin",
                "modifyDate": "08-3月 -10"
            }, {
                "suitableTargetSort": "3",
                "suitableTargetName": "BAN-企業客戶",
                "suitableTargetClassification": "=|03434016",
                "systemName": "中國人壽(03434016)",
                "classification": ";1;2;",
                "ITParameterSetValue": "雙向簡訊移除",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "admin",
                "modifyDate": "08-3月 -10"
            }, {
                "suitableTargetSort": "4",
                "suitableTargetName": "BAN-企業客戶",
                "suitableTargetClassification": "=|84443471",
                "systemName": "三商美邦人壽(84443471)",
                "classification": ";1;2;",
                "ITParameterSetValue": "不移除",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "admin",
                "modifyDate": "08-3月 -10"
            }, {
                "suitableTargetSort": "5",
                "suitableTargetName": "BAN-企業客戶",
                "suitableTargetClassification": "=|01061004",
                "systemName": "士林靈糧堂(01061004)",
                "classification": ";1;2;",
                "modifyPersonnel": "admin",
                "modifyDate": "08-3月 -10"
            }, {
                "suitableTargetSort": "6",
                "suitableTargetName": "BAN-企業客戶",
                "suitableTargetClassification": "=|23060248",
                "systemName": "全家便利商店(23060248)",
                "classification": ";1;2;",
                "ITParameterSetValue": "一個月",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "admin",
                "modifyDate": "08-3月 -10"
            }, {
                "suitableTargetSort": "7",
                "suitableTargetName": "BAN-企業客戶",
                "suitableTargetClassification": "=|22819125",
                "systemName": "中部汽車(22819125)",
                "classification": ";1;2;",
                "ITParameterSetValue": "二個月",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "admin",
                "modifyDate": "08-3月 -10"
            }, {
                "suitableTargetSort": "8",
                "suitableTargetName": "BAN-企業客戶",
                "suitableTargetClassification": "=|31275691",
                "systemName": "三商電腦(31275691)",
                "classification": ";1;2;",
                "ITParameterSetValue": "三個月",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "admin",
                "modifyDate": "08-3月 -10"
            }, {
                "suitableTargetSort": "9",
                "suitableTargetName": "BAN-企業客戶",
                "suitableTargetClassification": "=|23224657",
                "systemName": "台灣屈臣氏(23224657)",
                "classification": ";1;2;",
                "ITParameterSetValue": "值",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "admin",
                "modifyDate": "08-3月 -10"
            }, {
                "suitableTargetSort": "10",
                "suitableTargetName": "BAN-企業客戶",
                "suitableTargetClassification": "=|23471299",
                "systemName": "統聯客運(23471299)",
                "classification": ";1;2;",
                "ITParameterSetValue": "值",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "admin",
                "modifyDate": "08-3月 -10"
            }];


            $('#datatable_suitableTarget').DataTable().destroy();



            $timeout(function () {
                $('#datatable_suitableTarget').DataTable(opt);

            }, 100)


            $scope.editGroupTableData = [{
                "groupSort": "1",
                "groupNumber": "9ebaf8",
                "groupName": "一般國內通話金額",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "2",
                "groupNumber": "7ae716",
                "groupName": "EBU - 一般國內通話金額",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "3",
                "groupNumber": "cedf83",
                "groupName": "網外市話通話費折抵",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "4",
                "groupNumber": "83e5b9",
                "groupName": "他網通話(不含市話)",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "5",
                "groupNumber": "f67ce1",
                "groupName": "他網通話(不含市話)",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "6",
                "groupNumber": "f67ce1",
                "groupName": "他網通話(不含市話)",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }];


            // $('#datatable_editGroup').DataTable().destroy();




            // $timeout(function () {
            //         $('#datatable_editGroup').DataTable(opt2);
            //     }, 100)


            $scope.editGroup = function () {
                $timeout(function () {
                    // $('#addModal').modal('hide');
                    $('#editGroup').modal('show');
                }, 400);

            }

            $scope.addGroup = function () {
                $timeout(function () {
                    // $('#addModal').modal('hide');
                    // $('#editGroup').modal('hide');
                    $('#addGroup').modal('show');
                }, 400);
            }

            $scope.addGroupConfirm = function () {
                $timeout(function () {
                    $('#addGroup').modal('hide');
                    $('#editGroup').modal('show');
                }, 400);

            }



        }
    ]);
    return app;
});