define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('numberTypeCtrl', ['$scope', '$timeout', '$log', '$element',
        'ShoppingCartEntity', 'pnotifyService',
        function ($scope, $timeout, $log, $element, shoppingCartEntity, pnotifyService) {
            var vm = this;

            // $scope.newMarginSetTableData = {};

            $(document).on('hidden.bs.modal', '.modal', function () {

                $('.modal:visible').length && $(document.body).addClass('modal-open');

            });

            $(document).on('show.bs.modal', '.modal', function () {
                $("element.style").css("padding-right", "0");
            });

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


            /*begin 表格設定*/
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
                "bLengthChange": false
                // "scrollX": true,

            };
            /*end 表格設定*/



            /*begin 門號類型表格*/
            $scope.numberTypeTableData = [{
                "numberTypeSort": "1",
                "codeNumber": "4G",
                "numberType": "4G",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "09-12月 -15"
            }, {
                "numberTypeSort": "2",
                "codeNumber": "3G",
                "numberType": "3G",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "02-4月 -12"
            }, {
                "numberTypeSort": "3",
                "codeNumber": "2G",
                "numberType": "2G",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "04-3月 -13"
            }, {
                "numberTypeSort": "4",
                "codeNumber": "king",
                "numberType": "統一超商",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "23-12月 -15"
            }, {
                "numberTypeSort": "5",
                "codeNumber": "wala",
                "numberType": "全虹",
                "specialNumberType": "Y",
                "modifyPersonnel": "SPV",
                "modifyDate": "31-3月 -14"
            }, {
                "numberTypeSort": "7",
                "codeNumber": "K",
                "numberType": "KG",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "09-12月 -15"
            }, {
                "numberTypeSort": "6",
                "codeNumber": "X",
                "numberType": "Non SIM",
                "specialNumberType": "Y",
                "modifyPersonnel": "SPV",
                "modifyDate": "23-12月 -15"
            }, {
                "numberTypeSort": "8",
                "codeNumber": "ELD",
                "numberType": "ELD",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "09-12月 -15"
            }, {
                "numberTypeSort": "9",
                "codeNumber": "CLD",
                "numberType": "CLD",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "31-12月 -14"
            }];


            /*begin 草稿資料表格*/
            $scope.numberTypeTableData = [{
                "numberTypeSort": "1",
                "codeNumber": "4G",
                "numberType": "4G",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "09-12月 -15"
            }, {
                "numberTypeSort": "2",
                "codeNumber": "3G",
                "numberType": "3G",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "02-4月 -12"
            }, {
                "numberTypeSort": "3",
                "codeNumber": "2G",
                "numberType": "2G",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "04-3月 -13"
            }, {
                "numberTypeSort": "4",
                "codeNumber": "king",
                "numberType": "統一超商",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "23-12月 -15"
            }, {
                "numberTypeSort": "5",
                "codeNumber": "wala",
                "numberType": "全虹",
                "specialNumberType": "Y",
                "modifyPersonnel": "SPV",
                "modifyDate": "31-3月 -14"
            }, {
                "numberTypeSort": "7",
                "codeNumber": "K",
                "numberType": "KG",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "09-12月 -15"
            }, {
                "numberTypeSort": "6",
                "codeNumber": "X",
                "numberType": "Non SIM",
                "specialNumberType": "Y",
                "modifyPersonnel": "SPV",
                "modifyDate": "23-12月 -15"
            }, {
                "numberTypeSort": "8",
                "codeNumber": "ELD",
                "numberType": "ELD",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "09-12月 -15"
            }, {
                "numberTypeSort": "9",
                "codeNumber": "CLD",
                "numberType": "CLD",
                "specialNumberType": "N",
                "modifyPersonnel": "SPV",
                "modifyDate": "31-12月 -14"
            }];
            /*end 草稿資料表格*/

            $('#datatable_numberType').DataTable().destroy();

            $timeout(function () {
                $('#datatable_numberType').DataTable(opt);
            }, 100)



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

            /* 重置 begin */

            $scope.reset = function () {
                $scope.number = "";
                $scope.name = "";
            }


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


            /* 重置  end*/

            // $scope.saveMarginSetTable = function () {
            //     $scope.marginSetTableData.push($scope.newMarginSetTableData);
            //     $scope.newMarginSetTableData = {};

            //     // $scope.alertMassege = "New item add on list successfully!!";
            // };

            // -----編輯-----
            // $scope.editInfo = function (x) {
            //     $scope.info = {
            //         'marginSort': x.marginSort,
            //         'marginMoney': x.marginMoney,
            //         'marginMoney': x.marginMoney,
            //     };
            // };

        }
    ]);
    return app;
});