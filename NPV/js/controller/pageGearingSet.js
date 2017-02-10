define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('pageGearingSetCtrl', ['$scope', '$timeout', '$log', '$element',
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

            /* begin */
            $scope.btnShow1 = true;
            $scope.btnShow2 = false;
            $scope.advancedSearch = function () {
                if ($scope.advancedControl) {
                    $scope.advancedControl = false;
                    $scope.btnShow1 = true;
                } else {
                    $scope.advancedControl = true;
                    $scope.btnShow1 = true;
                }
            }
            // $scope.advancedSearch = function () {
            //     if ($scope.advancedControl) {
            //         $scope.advancedControl = false;
            //         $scope.btnShow1 = true;
            //         $scope.btnShow2 = false;
            //     } else {
            //         $scope.advancedControl = true;
            //         $scope.btnShow1 = false;
            //         $scope.btnShow2 = true;
            //     }
            // }
            /* end */

            /* begin */
            $scope.tableControl = true;
            $scope.tableControl2 = false;
            $scope.showTable = function () {
                $scope.tableControl = true;
            }
            $scope.showTable2 = function () {
                $scope.tableControl2 = true;
            }
            /* end */

            $scope.useTableData = [{
                "no": "VIP",
                "id": "groupSetGift",
                "name": "贈品設定(GROUP)",
                "isShow": "Y",
                "editMember": "admin",
                "editDate": "12-10月-16"
            }, ];

            $scope.useTableData2 = [{
                "no": "VIP",
                "id": "groupSetGift",
                "name": "贈品設定(GROUP)",
                "editMember": "admin",
                "editDate": "12-10月-16"
            }, ];


            $('#datatable_pageGearingSet').DataTable().destroy();

            $timeout(function () {
                $('#datatable_pageGearingSet').DataTable(opt);
            }, 100)

            $('#datatable_editGearingPage').DataTable().destroy();

            $timeout(function () {
                $('#datatable_editGearingPage').DataTable(opt);
            }, 100)

            /* notify 通知訊息 begin */
            // Success
            $scope.notifyAddSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '新增完成！');

            }

            $scope.notifyEditSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '修改完成！');
            }

            $scope.notifyDelSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '刪除完成！');
            }
            /* notify 通知訊息 end*/

            /* 重置 begin */

            $scope.reset = function () {

                $scope.controllItem = "";
                $scope.pageSelect = "";
                $scope.controlSelect = "";
                $scope.gearingId = "";
                $scope.gearingName = "";

            }

            $scope.reset2 = function () {

                $scope.pageId = "";
                $scope.pageName = "";

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

        }
    ]);
    return app;
});