define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('numberTypeCtrl', ['$scope', '$timeout', '$log', '$element',
        'ShoppingCartEntity',
        function ($scope, $timeout, $log, $element, shoppingCartEntity) {
            var vm = this;

            $scope.newMarginSetTableData = {};

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



            /*begin 問卷-查詢*/
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

            };

            $scope.marginSetTableData = [{
                "marginSort": "1",
                "marginMoney": "2400",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "marginSort": "2",
                "marginMoney": "3000",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "marginSort": "3",
                "marginMoney": "0",
                "modifyPersonnel": "SPV",
                "modifyDate": "08-3月 -10"
            }, {
                "marginSort": "4",
                "marginMoney": "1200",
                "modifyPersonnel": "SPV",
                "modifyDate": "03-4月 -10"
            }, {
                "marginSort": "5",
                "marginMoney": "2000",
                "modifyPersonnel": "SPV",
                "modifyDate": "03-4月 -10"
            }, {
                "marginSort": "5",
                "marginMoney": "2500",
                "modifyPersonnel": "SPV",
                "modifyDate": "03-4月 -10"
            }, {
                "marginSort": "6",
                "marginMoney": "1500",
                "modifyPersonnel": "SPV",
                "modifyDate": "03-4月 -10"
            }];


            $('#datatable_marginSet').DataTable().destroy();

            $timeout(function () {
                $('#datatable_marginSet').DataTable(opt);
            }, 100)


            $scope.saveMarginSetTable = function () {
                $scope.marginSetTableData.push($scope.newMarginSetTableData);
                $scope.newMarginSetTableData = {};

                // $scope.alertMassege = "New item add on list successfully!!";
            };

            // -----編輯-----
            $scope.editInfo = function (x) {
                $scope.info = {
                    'marginSort': x.marginSort,
                    'marginMoney': x.marginMoney,
                    'marginMoney': x.marginMoney,
                };
            };

        }
    ]);
    return app;
});