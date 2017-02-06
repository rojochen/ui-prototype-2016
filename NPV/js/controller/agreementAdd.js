define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('agreementAddCtrl', ['$scope', '$timeout', '$log', '$element',
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

            $(document).on('hidden.bs.modal', '.modal', function () {
                $('.modal:visible').length && $(document.body).addClass('modal-open');
            });

            $(document).on('show.bs.modal', '.modal', function () {
                $("element.style").css("padding-right", "0");
            });

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
            };
            /* end */

            /* 合約相關新增/維護 begin */
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
                "bPaginate": false,
                "bLengthChange": false
            };

            $timeout(function () {
                $('#datatable_agreementAdd').DataTable(opt);
            }, 100)

            // 表格內容資料
            $scope.agreementAddTableData = [{
                "agreementAddSorting": "1",
                "agreementAddID": "W00002",
                "agreementAddName": "續約",
                "agreementAddEnter": "N",
                "agreementAddCount": "1",
                "agreementAddYEdit": "Y",
                "agreementAddRole": "admin",
                "agreementAddDate": "12-10月-16",
            }, {
                "agreementAddSorting": "2",
                "agreementAddID": "W00001",
                "agreementAddName": "移除前約",
                "agreementAddEnter": "N",
                "agreementAddCount": "1",
                "agreementAddYEdit": "N",
                "agreementAddRole": "admin",
                "agreementAddDate": "23-3月 -16",
            }, {
                "agreementAddSorting": "3",
                "agreementAddID": "T00001",
                "agreementAddName": "Test",
                "agreementAddEnter": "N",
                "agreementAddCount": "1",
                "agreementAddYEdit": "Y",
                "agreementAddRole": "admin",
                "agreementAddDate": "12-10月-16",
            }, {
                "agreementAddSorting": "4",
                "agreementAddID": "W00003",
                "agreementAddName": "test",
                "agreementAddEnter": "N",
                "agreementAddCount": "1",
                "agreementAddYEdit": "Y",
                "agreementAddRole": "admin",
                "agreementAddDate": "12-10月-16",
            }];

            $('#datatable_agreementAdd').DataTable().destroy();
            /* 合約相關新增/維護表格 end */

            /* 新增-編輯群組  begin */
            $timeout(function () {
                $('#datatable_agreementAddGroup').DataTable(opt);
            }, 100)

            // 新增-編輯群組 表格內容資料
            $scope.agreementAddGroupTableData = [{
                "agreementAddGroupSorting": "1",
                "agreementAddGroupID": "W",
                "agreementAddGroupName": "WAIVED",
                "agreementAddGroupRole": "admin",
                "agreementAddGroupDate": "2015/01/04",
            }, {
                "agreementAddGroupSorting": "2",
                "agreementAddGroupID": "T",
                "agreementAddGroupName": "TEST",
                "agreementAddGroupRole": "admin",
                "agreementAddGroupDate": "2015/01/04",
            }];

            $('#datatable_agreementAddGroup').DataTable().destroy();
            /* 新增-編輯群組  end */

            /* 修改-編輯群組  begin */
            $timeout(function () {
                $('#datatable_agreementAddEditGroup').DataTable(opt);
            }, 100)

            $('#datatable_agreementAddEditGroup').DataTable().destroy();
            /* 修改-編輯群組  end */

            /* notify 通知訊息 begin */
            // Success
            $scope.pnotifyAddSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '新增完成！');

                // 取消鍵
                $timeout(function () {
                    $('#agreementAddAdd').modal('hide')
                    $('#agreementConfirmCancelAdd').modal('hide')
                }, 100)
            }

            $scope.pnotifyEditSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '修改完成！');

                // 取消鍵
                $timeout(function () {
                    $('#agreementAddEdit').modal('hide')
                    $('#actTypeAddConfirmCancel').modal('hide')
                }, 100)
            }

            $scope.pnotifyDelSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '刪除完成！');
            }
            /* notify 通知訊息 end*/

            /* begin */
            $scope.tableControl = false;
            $scope.showTable = function () {
                $scope.tableControl = true;
            };
            /* end */

            /* 取消鍵 begin */
            $scope.cancel = function () {
                $timeout(function () {
                    $('#agreementAddAdd').modal('hide')
                    $('#agreementConfirmCancelAdd').modal('hide')
                }, 100)
            }

            $scope.cancel2 = function () {
                $timeout(function () {
                    $('#agreementAddEdit').modal('hide')
                    $('#agreementConfirmCancelEdit').modal('hide')
                }, 100)
            }
            /* 取消鍵 end */
        }
    ]);
    return app;
});