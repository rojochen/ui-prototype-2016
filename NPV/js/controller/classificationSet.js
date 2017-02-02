define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('classificationSetCtrl', ['$scope', '$timeout', '$log', '$element',
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

            /* 促代類別設定表格 begin */
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
                "bPaginate": false
                // "scrollX": true,
                // "scrollY": true
            };

            $timeout(function () {
                $('#datatable_classificationSet').DataTable(opt);
            }, 100)

            // 表格內容資料
            $scope.classificationTableData = [{
                "classificationSorting": "1",
                "classificationID": "V",
                "classificationName": "Voice類促代",
                "classificationRole": "SPV",
                "classificationDate": "08-3月 -10"
            }, {
                "classificationSorting": "2",
                "classificationID": "D",
                "classificationName": "Data類促代",
                "classificationRole": "SPV",
                "classificationDate": "08-3月 -10"
            }, {
                "classificationSorting": "3",
                "classificationID": "X",
                "classificationName": "Non SIM類促代",
                "classificationRole": "SPV",
                "classificationDate": "08-3月 -10"
            }];

            $('#datatable_classificationSet').DataTable().destroy();
            /* 促代類別設定表格 end */

            /* notify 通知訊息 begin */
            // Success
            // $(document).ready(function () {
            //     $('body').on('click', '.pnotifyAddSuccess', function () {
            //         pnotifyService.pnotifySuccess('Success', '新增完成！');
            //     })
            // });

            // $(document).ready(function () {
            //     $('body').on('click', '.pnotifyEditSuccess', function () {
            //         pnotifyService.pnotifySuccess('Success', '修改完成！');
            //     })
            // });

            // $(document).ready(function () {
            //     $('body').on('click', '.pnotifyDelSuccess', function () {
            //         pnotifyService.pnotifySuccess('Success', '刪除完成！');
            //     })
            // });

            $scope.pnotifyAddSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '新增完成！');

                // 取消鍵
                $timeout(function () {
                    $('#classifcationAdd').modal('hide')
                    $('#classAddConfirmCancel').modal('hide')
                }, 100)
            }

            $scope.pnotifyEditSuccess = function () {
                pnotifyService.pnotifySuccess('Success', '修改完成！');

                // 取消鍵
                $timeout(function () {
                    $('#classifcationEdit').modal('hide')
                    $('#classEditConfirmCancel').modal('hide')
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
                    $('#classifcationAdd').modal('hide')
                    $('#classAddConfirmCancel').modal('hide')
                }, 100)
            }

            $scope.cancel2 = function () {
                $timeout(function () {
                    $('#classifcationEdit').modal('hide')
                    $('#classEditConfirmCancel').modal('hide')
                }, 100)
            }
            /* 取消鍵 end */
        }
    ]);
    return app;
});