define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('suitableTargetCtrl', ['$scope', '$timeout', '$log', '$element',
        'ShoppingCartEntity', 'pnotifyService',

        function ($scope, $timeout, $log, $element, shoppingCartEntity, pnotifyService) {
            var vm = this;


            $(document).on('hidden.bs.modal', '.modal', function () {

                $('.modal:visible').length && $(document.body).addClass('modal-open');

            });

            $(document).on('show.bs.modal', '.modal', function () {
                $("element.style").css("padding-right", "0");
            });

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


            $scope.editTargetTableData = [{
                "targetSort": "1",
                "targetNumber": "BAN",
                "targetName": "企業客戶",
                "modifyPersonnel": "lhchang",
                "modifyDate": "2015/1/3"
            }, {
                "targetSort": "2",
                "targetNumber": "VD_USERS",
                "targetName": "V+D Users",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "targetSort": "3",
                "targetNumber": "WBB不續約客戶",
                "targetName": "網外市話通話費折抵",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "targetSort": "4",
                "targetNumber": "WBB Data usage",
                "targetName": "他網通話(不含市話)",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "targetSort": "5",
                "targetNumber": "同證號三年一次(7日)",
                "targetName": "他網通話(不含市話)",
                "modifyPersonnel": "wsun",
                "modifyDate": "2015/1/3"
            }, {
                "targetSort": "6",
                "targetNumber": "SRVPRODDTYPE",
                "targetName": "用戶方案別",
                "modifyPersonnel": "wsun",
                "modifyDate": "2015/1/3"
            }, {
                "targetSort": "7",
                "targetNumber": "ONCE_CONTRACT_60",
                "targetName": "同證號三年一次(60日)",
                "modifyPersonnel": "wsun",
                "modifyDate": "2015/1/3"
            }, {
                "targetSort": "8",
                "targetNumber": "VIP",
                "targetName": "VIP",
                "modifyPersonnel": "wsun",
                "modifyDate": "2015/1/3"
            }, {
                "targetSort": "9",
                "targetNumber": "MNP",
                "targetName": "攜碼",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "targetSort": "10",
                "targetNumber": "TENURE",
                "targetName": "年資",
                "modifyPersonnel": "wsun",
                "modifyDate": "2015/1/3"
            }];


            // $('#datatable_editGroup').DataTable().destroy();




            // $timeout(function () {
            //         $('#datatable_editGroup').DataTable(opt2);
            //     }, 100)


            // $scope.editTarget = function () {

            //     // $timeout(function () {
            //     //     $('#datatable_editTarget').DataTable(opt2);
            //     // }, 100)

            //     $timeout(function () {
            //         // $('#addModal').modal('hide');

            //         $('#editTarget').modal('show');
            //     }, 400);


            // }

            // $scope.addEditTarget = function () {
            //     $timeout(function () {
            //         // $('#addModal').modal('hide');
            //         // $('#editGroup').modal('hide');
            //         $('#addEditTarget').modal('show');
            //     }, 400);
            // }

            // $scope.addGroupConfirm = function () {
            //     $timeout(function () {
            //         $('#addGroup').modal('hide');
            //         $('#editGroup').modal('show');
            //     }, 400);

            // }



            // 取消鍵
            $scope.confirmCancel = function () {
                $timeout(function () {
                    $('#addModal').modal('hide')
                    $('#editModal').modal('hide')
                    $('#addType').modal('hide')
                    $('#addTypeEdit').modal('hide')
                    $('#addGroup').modal('hide')
                    $('#addEditTarget').modal('hide')
                    $('#editEditTarget').modal('hide')



                }, 100)


            }

            $scope.cancel = function () {
                $timeout(function () {
                    $('#cancelModal').modal('hide')
                    $('#cancelEditModal').modal('hide')
                }, 100)

            }




        }
    ]);
    return app;
});