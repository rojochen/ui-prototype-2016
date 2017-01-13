define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('promotingGenerationTypeCtrl', ['$scope', '$timeout', '$log', '$element',
        'ShoppingCartEntity', 'pnotifyService',

        function ($scope, $timeout, $log, $element, shoppingCartEntity, pnotifyService) {
            var vm = this;

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

            $scope.promotingGenerationTypeTableData = [{
                "promotingGenerationTypeSort": "3",
                "promotingGenerationTypeCodeName": "G2",
                "promotingGenerationType": "新啟用:(G1)",
                "promotingGenerationTypeName": "2G啟用",
                "promotingGenerationTypeIACODE": "",
                "promotingGenerationTypeMNP": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "promotingGenerationTypeSort": "2",
                "promotingGenerationTypeCodeName": "G3",
                "promotingGenerationType": "新啟用:(G1)",
                "promotingGenerationTypeName": "3G啟用",
                "promotingGenerationTypeIACODE": "",
                "promotingGenerationTypeMNP": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "promotingGenerationTypeSort": "7",
                "promotingGenerationTypeCodeName": "LP",
                "promotingGenerationType": "2轉3:(G2)",
                "promotingGenerationTypeName": "2G月租轉3G",
                "promotingGenerationTypeIACODE": "",
                "promotingGenerationTypeMNP": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "promotingGenerationTypeSort": "11",
                "promotingGenerationTypeCodeName": "Li",
                "promotingGenerationType": "2轉3:(G2)",
                "promotingGenerationTypeName": "IF轉3G",
                "promotingGenerationTypeIACODE": "",
                "promotingGenerationTypeMNP": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "03-4月 -10"
            }, {
                "promotingGenerationTypeSort": "12",
                "promotingGenerationTypeCodeName": "LC",
                "promotingGenerationType": "2轉3:(G2)",
                "promotingGenerationTypeName": "NC轉3G",
                "promotingGenerationTypeIACODE": "",
                "promotingGenerationTypeMNP": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "03-4月 -10"
            }, {
                "promotingGenerationTypeSort": "13",
                "promotingGenerationTypeCodeName": "LK",
                "promotingGenerationType": "2轉3:(G2)",
                "promotingGenerationTypeName": "KG轉3G",
                "promotingGenerationTypeIACODE": "",
                "promotingGenerationTypeMNP": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "03-4月 -10"
            }, {
                "promotingGenerationTypeSort": "6",
                "promotingGenerationTypeCodeName": "L2",
                "promotingGenerationType": "續約:(L1)",
                "promotingGenerationTypeName": "2G續約",
                "promotingGenerationTypeIACODE": "",
                "promotingGenerationTypeMNP": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "03-4月 -10"
            }, {
                "promotingGenerationTypeSort": "6",
                "promotingGenerationTypeCodeName": "L2",
                "promotingGenerationType": "續約:(L1)",
                "promotingGenerationTypeName": "2G續約",
                "promotingGenerationTypeIACODE": "",
                "promotingGenerationTypeMNP": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "03-4月 -10"
            }, {
                "promotingGenerationTypeSort": "6",
                "promotingGenerationTypeCodeName": "L2",
                "promotingGenerationType": "續約:(L1)",
                "promotingGenerationTypeName": "2G續約",
                "promotingGenerationTypeIACODE": "",
                "promotingGenerationTypeMNP": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "03-4月 -10"
            }, {
                "promotingGenerationTypeSort": "5",
                "promotingGenerationTypeCodeName": "L3",
                "promotingGenerationType": "續約:(L1)",
                "promotingGenerationTypeName": "3G續約",
                "promotingGenerationTypeIACODE": "",
                "promotingGenerationTypeMNP": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "03-4月 -10"
            }, {
                "promotingGenerationTypeSort": "20",
                "promotingGenerationTypeCodeName": "X1",
                "promotingGenerationType": "新啟用:(G1)",
                "promotingGenerationTypeName": "MonSIM啟用",
                "promotingGenerationTypeIACODE": "",
                "promotingGenerationTypeMNP": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "03-4月 -10"
            }, {
                "promotingGenerationTypeSort": "20",
                "promotingGenerationTypeCodeName": "k1",
                "promotingGenerationType": "新啟用:(G1)",
                "promotingGenerationTypeName": "統一超商新啟用",
                "promotingGenerationTypeIACODE": "",
                "promotingGenerationTypeMNP": "",
                "modifyPersonnel": "SPV",
                "modifyDate": "03-4月 -10"
            }];


            $('#datatable_promotingGenerationType').DataTable().destroy();

            $timeout(function () {
                $('#datatable_promotingGenerationType').DataTable(opt);
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

        }
    ]);
    return app;
});