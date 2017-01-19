define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('giftActivityItemCtrl', ['$scope', '$timeout', '$log', '$element',
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

            $scope.giftActivityItemTableData = [{
                "giftActivityItemSource": "KEY IN",
                "giftActivityItemNumber": "ALL",
                "giftActivityItemDescription": "全部客戶",
                "giftActivityItemMin": "ALL",
                "giftActivityItemMax": "ALL",
                "giftActivityItemDisplay": "Y",
                "modifyPersonnel": "admin",
                "modifyDate": "13-3月 -14"
            }, {
                "giftActivityItemSource": "KEY IN",
                "giftActivityItemNumber": "1",
                "giftActivityItemDescription": "白金會員1",
                "giftActivityItemMin": "1",
                "giftActivityItemMax": "1",
                "giftActivityItemDisplay": "Y",
                "modifyPersonnel": "admin",
                "modifyDate": "13-3月 -14"
            }, {
                "giftActivityItemSource": "KEY IN",
                "giftActivityItemNumber": "1",
                "giftActivityItemDescription": "白金會員1",
                "giftActivityItemMin": "1",
                "giftActivityItemMax": "1",
                "giftActivityItemDisplay": "Y",
                "modifyPersonnel": "admin",
                "modifyDate": "13-3月 -14"
            }, {
                "giftActivityItemSource": "KEY IN",
                "giftActivityItemNumber": "1",
                "giftActivityItemDescription": "白金會員1",
                "giftActivityItemMin": "1",
                "giftActivityItemMax": "1",
                "giftActivityItemDisplay": "Y",
                "modifyPersonnel": "admin",
                "modifyDate": "13-3月 -14"
            }, {
                "giftActivityItemSource": "KEY IN",
                "giftActivityItemNumber": "1",
                "giftActivityItemDescription": "白金會員1",
                "giftActivityItemMin": "1",
                "giftActivityItemMax": "1",
                "giftActivityItemDisplay": "Y",
                "modifyPersonnel": "admin",
                "modifyDate": "13-3月 -14"
            }, {
                "giftActivityItemSource": "KEY IN",
                "giftActivityItemNumber": "1",
                "giftActivityItemDescription": "白金會員1",
                "giftActivityItemMin": "1",
                "giftActivityItemMax": "1",
                "giftActivityItemDisplay": "Y",
                "modifyPersonnel": "admin",
                "modifyDate": "13-3月 -14"
            }, {
                "giftActivityItemSource": "KEY IN",
                "giftActivityItemNumber": "1",
                "giftActivityItemDescription": "白金會員1",
                "giftActivityItemMin": "1",
                "giftActivityItemMax": "1",
                "giftActivityItemDisplay": "Y",
                "modifyPersonnel": "admin",
                "modifyDate": "13-3月 -14"
            }, {
                "giftActivityItemSource": "KEY IN",
                "giftActivityItemNumber": "1",
                "giftActivityItemDescription": "白金會員1",
                "giftActivityItemMin": "1",
                "giftActivityItemMax": "1",
                "giftActivityItemDisplay": "Y",
                "modifyPersonnel": "admin",
                "modifyDate": "13-3月 -14"
            }, {
                "giftActivityItemSource": "KEY IN",
                "giftActivityItemNumber": "1",
                "giftActivityItemDescription": "白金會員1",
                "giftActivityItemMin": "1",
                "giftActivityItemMax": "1",
                "giftActivityItemDisplay": "Y",
                "modifyPersonnel": "admin",
                "modifyDate": "13-3月 -14"
            }, {
                "giftActivityItemSource": "KEY IN",
                "giftActivityItemNumber": "1",
                "giftActivityItemDescription": "白金會員1",
                "giftActivityItemMin": "1",
                "giftActivityItemMax": "1",
                "giftActivityItemDisplay": "Y",
                "modifyPersonnel": "admin",
                "modifyDate": "13-3月 -14"
            }];


            $('#datatable_giftActivityItem').DataTable().destroy();


            $timeout(function () {
                $('#datatable_giftActivityItem').DataTable(opt);

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

            // 取消鍵
            $scope.confirmCancel = function () {
                $timeout(function () {
                    $('#addModal').modal('hide')
                    $('#editModal').modal('hide')



                }, 100)


            }
            $scope.confirmCancel2 = function () {
                $timeout(function () {
                    $('#SQL').modal('hide')




                }, 100)


            }


            $scope.cancel = function () {
                $timeout(function () {
                    $('#cancelModal').modal('hide')
                    $('#cancelEditModal').modal('hide')
                }, 100)

            }


            // $('#datatable_editGroup').DataTable().destroy();




            // $timeout(function () {
            //         $('#datatable_editGroup').DataTable(opt2);
            //     }, 100)


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



        }
    ]);
    return app;
});