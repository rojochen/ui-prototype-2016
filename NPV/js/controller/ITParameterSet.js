define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('ITParameterSetCtrl', ['$scope', '$timeout', '$log', '$element',
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

            $scope.ITParameterSetTableData = [{
                "ITParameterSetSort": "1",
                "ITParameterSetList": "FET",
                "ITParameterSetClassification": "F",
                "ITParameterSetType": "DISC_EFFECTIVE_METHOD",
                "ITParameterSetKEY": "Now",
                "ITParameterSetValue": "立即",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "ITParameterSetSort": "2",
                "ITParameterSetList": "FET",
                "ITParameterSetClassification": "F",
                "ITParameterSetType": "DISC_EFFECTIVE_METHOD",
                "ITParameterSetKEY": "cycle",
                "ITParameterSetValue": "下一個cycle勿選",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "ITParameterSetSort": "3",
                "ITParameterSetList": "FET",
                "ITParameterSetClassification": "F",
                "ITParameterSetType": "REMOVE_METHOD",
                "ITParameterSetKEY": "y",
                "ITParameterSetValue": "雙向簡訊移除",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "ITParameterSetSort": "4",
                "ITParameterSetList": "FET",
                "ITParameterSetClassification": "F",
                "ITParameterSetType": "REMOVE_METHOD",
                "ITParameterSetKEY": "N",
                "ITParameterSetValue": "不移除",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "ITParameterSetSort": "5",
                "ITParameterSetList": "FET",
                "ITParameterSetClassification": "F",
                "ITParameterSetType": "REMOVE_METHOD",
                "ITParameterSetKEY": "48",
                "ITParameterSetValue": "無限制",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "ITParameterSetSort": "6",
                "ITParameterSetList": "FET",
                "ITParameterSetClassification": "F",
                "ITParameterSetType": "VAS_VALIDITY",
                "ITParameterSetKEY": "49",
                "ITParameterSetValue": "一個月",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "ITParameterSetSort": "7",
                "ITParameterSetList": "FET",
                "ITParameterSetClassification": "F",
                "ITParameterSetType": "VAS_VALIDITY",
                "ITParameterSetKEY": "50",
                "ITParameterSetValue": "二個月",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "ITParameterSetSort": "8",
                "ITParameterSetList": "FET",
                "ITParameterSetClassification": "F",
                "ITParameterSetType": "VAS_VALIDITY",
                "ITParameterSetKEY": "51",
                "ITParameterSetValue": "三個月",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "ITParameterSetSort": "9",
                "ITParameterSetList": "FET",
                "ITParameterSetClassification": "F",
                "ITParameterSetType": "VAS_VALIDITY",
                "ITParameterSetKEY": "Now",
                "ITParameterSetValue": "值",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "ITParameterSetSort": "10",
                "ITParameterSetList": "FET",
                "ITParameterSetClassification": "F",
                "ITParameterSetType": "DISC_EFFECTIVE_METHOD",
                "ITParameterSetKEY": "Now",
                "ITParameterSetValue": "值",
                "ITParameterSetPARAMETE": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }];


            $('#datatable_ITParameterSet').DataTable().destroy();


            $scope.ITParameterSetTable = false;
            $scope.inquireTable = function () {
                $timeout(function () {
                    $('#datatable_ITParameterSet').DataTable(opt);

                }, 100)
                $scope.ITParameterSetTable = true;
            }


            $scope.editTypeTableData = [{
                "groupSort": "1",
                "groupType": "REMOVE_METHOD",
                "groupName": "合約到期移除方式",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "2",
                "groupType": "VAS_VALIDITY",
                "groupName": "　服務合約有效期限",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "3",
                "groupType": "CARRYING_AMOUNT",
                "groupName": "帳面金額",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "4",
                "groupType": "DISC_SMS_ELEMENT",
                "groupName": "簡訊費用",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "5",
                "groupType": "DISC_MMS_ELEMENT",
                "groupName": "MMS費用",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "6",
                "groupType": "DOMESTIC_CALING",
                "groupName": "國內通話費",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "7",
                "groupType": "DOMESTIC_IDD_ELEMENT",
                "groupName": "IDD",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "8",
                "groupType": "DISC_OC_ELEMENT",
                "groupName": "OC Charge",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "9",
                "groupType": "VAS_VOICE_ELEMENT",
                "groupName": "語音(Voice)加值服務",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }, {
                "groupSort": "10",
                "groupType": "VAS_VOICE_ELEMENT",
                "groupName": "影音(Voice)加值服務",
                "modifyPersonnel": "admin",
                "modifyDate": "2015/1/3"
            }];


            $('#datatable_editType').DataTable().destroy();

            $timeout(function () {
                $('#datatable_editType').DataTable(opt2);
            }, 100)


            // $scope.editGroup = function () {
            //     $timeout(function () {
            //         // $('#addModal').modal('hide');
            //         $('#editGroup').modal('show');
            //     }, 400);

            // }

            // $scope.addGroup = function () {
            //     $timeout(function () {
            //         // $('#addModal').modal('hide');
            //         // $('#editGroup').modal('hide');
            //         $('#addGroup').modal('show');
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