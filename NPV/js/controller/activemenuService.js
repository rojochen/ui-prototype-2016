define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('activemenuServiceCtrl', ['$scope', '$timeout', '$log', '$element',
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
            /* lightbox open */
            $(document).on('hidden.bs.modal', '.modal', function () {
                $('.modal:visible').length && $(document.body).addClass('modal-open');
            });
            /* lightbox end */
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

            $scope.activemenuServiceTableData = [{
                "activemenuServiceTypeSort": "3",
                "activemenuServiceDropOptionCode": "OR",
                "activemenuServiceDropdownName": "名單及條件任一符合",
                "activemenuServiceDropdownValue": "OR",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "2",
                "activemenuServiceDropOptionCode": "1",
                "activemenuServiceDropdownName": "多選一",
                "activemenuServiceDropdownValue": "1",
                "modifyPersonnel": "admin",
                "modifyDate": "23-3月 -16"
            }, {
                "activemenuServiceTypeSort": "4",
                "activemenuServiceDropOptionCode": "VIP",
                "activemenuServiceDropdownName": "VIP",
                "activemenuServiceDropdownValue": "E",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "7",
                "activemenuServiceDropOptionCode": "N",
                "activemenuServiceDropdownName": "否",
                "activemenuServiceDropdownValue": "N",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "1",
                "activemenuServiceDropOptionCode": "0",
                "activemenuServiceDropdownName": "全送",
                "activemenuServiceDropdownValue": "0",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "5",
                "activemenuServiceDropOptionCode": "GIFT",
                "activemenuServiceDropdownName": "申辦加碼禮",
                "activemenuServiceDropdownValue": "G",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "9",
                "activemenuServiceDropOptionCode": "PRODUCT",
                "activemenuServiceDropdownName": "實體贈品",
                "activemenuServiceDropdownValue": "PRODUCT",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "6",
                "activemenuServiceDropOptionCode": "Y",
                "activemenuServiceDropdownName": "是",
                "activemenuServiceDropdownValue": "Y",
                "modifyPersonnel": "admin",
                "modifyDate": "23-3月 -16"
            }, {
                "activemenuServiceTypeSort": "10",
                "activemenuServiceDropOptionCode": "DISCOUNT",
                "activemenuServiceDropdownName": "折扣項目",
                "activemenuServiceDropdownValue": "DISCOUNT",
                "modifyPersonnel": "admin",
                "modifyDate": "23-3月 -16"
            }, {
                "activemenuServiceTypeSort": "8",
                "activemenuServiceDropOptionCode": "AND",
                "activemenuServiceDropdownName": "名單及條件全部符合",
                "activemenuServiceDropdownValue": "AND",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "11",
                "activemenuServiceDropOptionCode": "POSDISCOUNT",
                "activemenuServiceDropdownName": "POS Discount",
                "activemenuServiceDropdownValue": "POSDISCOUNT",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "19",
                "activemenuServiceDropOptionCode": "ID",
                "activemenuServiceDropdownName": "身份證字號",
                "activemenuServiceDropdownValue": "ID",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "15",
                "activemenuServiceDropOptionCode": "BOOSTER",
                "activemenuServiceDropdownName": "4G上網計量包",
                "activemenuServiceDropdownValue": "B",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "12",
                "activemenuServiceDropOptionCode": "HAPPYGO",
                "activemenuServiceDropdownName": "HAPPY GO",
                "activemenuServiceDropdownValue": "HAPPYGO",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "14",
                "activemenuServiceDropOptionCode": "SALE_DISCOUNT",
                "activemenuServiceDropdownName": "自訂折扣或金額",
                "activemenuServiceDropdownValue": "SALE_DISCOUNT",
                "modifyPersonnel": "admin",
                "modifyDate": "23-3月 -16"
            }, {
                "activemenuServiceTypeSort": "13",
                "activemenuServiceDropOptionCode": "IDSERVICE",
                "activemenuServiceDropdownName": "服務",
                "activemenuServiceDropdownValue": "SERVICE",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "16",
                "activemenuServiceDropOptionCode": "QRCODE",
                "activemenuServiceDropdownName": "QR CODE",
                "activemenuServiceDropdownValue": "Q",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "20",
                "activemenuServiceDropOptionCode": "CONDITION",
                "activemenuServiceDropdownName": "條件類型",
                "activemenuServiceDropdownValue": "CONDITION",
                "modifyPersonnel": "admin",
                "modifyDate": "12-10月-16"
            }, {
                "activemenuServiceTypeSort": "18",
                "activemenuServiceDropOptionCode": "MSISDN",
                "activemenuServiceDropdownName": "門號",
                "activemenuServiceDropdownValue": "MSISDN",
                "modifyPersonnel": "admin",
                "modifyDate": "23-3月-16"
            }];


            $('#datatable_activemenuServiceTableData').DataTable().destroy();

            $timeout(function () {
                $('#datatable_activemenuServiceTableData').DataTable(opt);
            }, 100)

        }
    ]);
    return app;
});