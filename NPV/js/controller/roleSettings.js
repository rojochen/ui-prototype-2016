define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('roleSettingsCtrl', ['$scope', '$timeout', '$log', '$element',
        'ShoppingCartEntity',
        function ($scope, $timeout, $log, $element, shoppingCartEntity) {
            var vm = this;
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
                "scrollX": true,

            };

            // 左右多選框 
            $(function () {
                $("#add").click(function () {
                    var option = $("#select1 option:selected");
                    option.appendTo("#select2");
                });
                $("#add_all").click(function () {
                    var $option = $("#select1 option");
                    $option.appendTo("#select2");
                });
                $("#remove").click(function () {
                    var $option = $("#select2 option:selected");
                    $option.appendTo("#select1");
                });
                $("#remove_all").click(function () {
                    var $option = $("#select2 option");
                    $option.appendTo("#select1");
                });
            });
            $(function () {
                $("#add1").click(function () {
                    var $option = $("#select3 option:selected");
                    $option.appendTo("#select4");
                });
                $("#add_all1").click(function () {
                    var $option = $("#select3 option");
                    $option.appendTo("#select4");
                });
                $("#remove1").click(function () {
                    var $option = $("#select4 option:selected");
                    $option.appendTo("#select3");
                });
                $("#remove_all1").click(function () {
                    var $option = $("#select4 option");
                    $option.appendTo("#select3");
                });
            });
            $(function () {
                $("#add2").click(function () {
                    var $option = $("#select5 option:selected");
                    $option.appendTo("#select6");
                });
                $("#add_all2").click(function () {
                    var $option = $("#select5 option");
                    $option.appendTo("#select6");
                });
                $("#remove2").click(function () {
                    var $option = $("#select6 option:selected");
                    $option.appendTo("#select5");
                });
                $("#remove_all2").click(function () {
                    var $option = $("#select6 option");
                    $option.appendTo("#select5");
                });
            });
            $(function () {
                $("#add3").click(function () {
                    var $option = $("#select7 option:selected");
                    $option.appendTo("#select8");
                });
                $("#add_all3").click(function () {
                    var $option = $("#select7 option");
                    $option.appendTo("#select8");
                });
                $("#remove3").click(function () {
                    var $option = $("#select8 option:selected");
                    $option.appendTo("#select7");
                });
                $("#remove_all3").click(function () {
                    var $option = $("#select8 option");
                    $option.appendTo("#select7");
                });
            });

            // 左右多選框選項
            $scope.names = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9"];
            $scope.names1 = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9"];
            $scope.names2 = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9"];
            $scope.names3 = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9"];
            $scope.names4 = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9"];
            $scope.names5 = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9"];
            $scope.names6 = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9"];
            $scope.names7 = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9"];

            $scope.activitiesTableData = [{
                "gateType": "FET",
                "sort": "3轉4",

            }, {
                "gateType": "AAA",
                "sort": "3轉4",
            }, {

                "gateType": "AAA",
                "sort": "3轉4",

            }, {
                "gateType": "AAA",
                "sort": "3轉4",
            }, {
                "NO": "05",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "E3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案",
                "useOfPersonnel": " N",
                "pmOwner": "pm01",
                "fileEffectiveDate": "2016/09/09",
                "stateEffective": "活動設定中，上傳IA等待排程",
                "downtimeCanRate": "高",
                "arpb": "0-999",
                "expirationData": "93",
                "relationship": "",
                "species": "",
                "item": "",
                "pm": "",
            }, {
                "gateType": "AAA",
                "sort": "3轉4",

            }, {
                "gateType": "AAA",
                "sort": "3轉4",
            }, ];

            $scope.showCommonTable = true;
            $('#datatable').DataTable().destroy();

            $timeout(function () {
                $('#datatable').DataTable(opt);
                // $log.debug($scope.saerchKeyInput);
                $scope.saerchKey = $scope.saerchKeyInput;
            }, 100)


            $scope.showActivities = false;
            $scope.saerchAdvanced = function () {
                $('#datatable').DataTable().destroy();
                $scope.commonTableData = [];
                $scope.showCommonTable = false;
                $scope.showSearch = false;
                $log.debug($scope.selectType);
                if ($scope.selectType === $scope.selectTypeItem[0]) {
                    $timeout(function () {
                        $("#activityGroup").select2({
                            placeholder: "選擇活動群組",
                            allowClear: true
                        });
                        $("#numberType").select2({
                            placeholder: "選擇門號類型",
                            allowClear: true
                        });
                        $("#type").select2({
                            placeholder: "選擇種類",
                            allowClear: true
                        });
                    }, 100)
                    $scope.showActivities = true;
                } else {
                    $log.debug('next'); //未做...完
                }
                // $log.debug($scope.commonTableData);
            }

            $scope.showActivitiesTable = false;
            $scope.activities_Advanced = function () { //未做...完
                $log.debug('進階查詢_活動');
                $log.debug($scope.SPV + " " + $scope.activityCode + " " + $scope.activityName + " " + $scope.groupCode + " " + $scope.activityGroup + " " + $scope.numberType + " " + $scope.type);
                $timeout(function () {
                    $('#datatable_activities').DataTable(opt);
                    // $scope.saerchKey = $scope.saerchKeyInput;  //search未做...
                }, 100)
                $log.debug($scope.activitiesTableData);
                $scope.showActivitiesTable = true;
            }

            $scope.changeSearch = function () {
                $scope.showSearch = true;
                $scope.showActivities = false;
            }



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


        }
    ]);
    return app;
});