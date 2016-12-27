define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('groupsSetCtrl', ['$scope', '$timeout', '$log', '$element',
        'ShoppingCartEntity',
        function ($scope, $timeout, $log, $element, shoppingCartEntity) {
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

            $scope.useTableData = [{
                "userId": "0057",
                "accountName": "RightLiu",
                "userName": "劉大尉",
                "userEamil": "rightliu@com.tw",
                "userGroup": "MPM",
                "userRole": "PM Leader",
                "userStatus": "啟用"
            }, {
                "userId": "1045",
                "accountName": "LeftHan",
                "userName": "韓政績",
                "userEamil": "LeftHan@com.tw",
                "userGroup": "MPM",
                "userRole": "PM Member",
                "userStatus": "啟用"
            }, {
                "userId": "4552",
                "accountName": "AndyHung",
                "userName": "黃石鎮",
                "userEamil": "AndyHung@com.tw",
                "userGroup": "OET",
                "userRole": "PM",
                "userStatus": "啟用"

            }, {
                "userId": "6055",
                "accountName": "AndyHung",
                "userName": "王小咪",
                "userEamil": "AmyHung@com.tw",
                "userGroup": "OET",
                "userRole": "Leader",
                "userStatus": "啟用"
            }, {
                "userId": "6078",
                "accountName": "PongLai",
                "userName": "賴帥哥",
                "userEamil": "PangLai@com.tw",
                "userGroup": "IT",
                "userRole": "Admin",
                "userStatus": "啟用"
            }, ];

            // $scope.showCommonTable = true;
            // $('#datatable').DataTable().destroy();

            // $timeout(function () {
            //     $('#datatable').DataTable(opt);
            //     // $log.debug($scope.saerchKeyInput);
            //     $scope.saerchKey = $scope.saerchKeyInput;
            // }, 100)


            // $scope.showActivities = false;
            // $scope.saerchAdvanced = function () {
            //     $('#datatable').DataTable().destroy();
            //     $scope.commonTableData = [];
            //     $scope.showCommonTable = false;
            //     $scope.showSearch = false;
            //     $log.debug($scope.selectType);
            //     if ($scope.selectType === $scope.selectTypeItem[0]) {
            //         $timeout(function () {
            //             $("#activityGroup").select2({
            //                 placeholder: "選擇活動群組",
            //                 allowClear: true
            //             });
            //             $("#numberType").select2({
            //                 placeholder: "選擇門號類型",
            //                 allowClear: true
            //             });
            //             $("#type").select2({
            //                 placeholder: "選擇種類",
            //                 allowClear: true
            //             });
            //         }, 100)
            //         $scope.showActivities = true;
            //     } else {
            //         $log.debug('next'); //未做...完
            //     }
            //     // $log.debug($scope.commonTableData);
            // }

            // $scope.showActivitiesTable = false;
            // $scope.activities_Advanced = function () { //未做...完
            //     $log.debug('進階查詢_活動');
            //     $log.debug($scope.SPV + " " + $scope.activityCode + " " + $scope.activityName + " " + $scope.groupCode + " " + $scope.activityGroup + " " + $scope.numberType + " " + $scope.type);
            //     $timeout(function () {
            //         $('#datatable_activities').DataTable(opt);
            //         // $scope.saerchKey = $scope.saerchKeyInput;  //search未做...
            //     }, 100)
            //     $log.debug($scope.activitiesTableData);
            //     $scope.showActivitiesTable = true;
            // }

            // $scope.changeSearch = function () {
            //     $scope.showSearch = true;
            //     $scope.showActivities = false;
            // }


            /* begin */
            $scope.multiselectControl = false;
            $scope.showMultiselect = function () {
                    $scope.multiselectControl = true;
                }
                /* end */


            /* begin menu tree */
            $('.tree-folder-content').css('display', 'none');
            $('body').on('click', '.tree-folder', function () {
                if ($(this).children('.tree-folder-content').css('display') == 'none') {
                    $(this).children('.tree-folder-content').css('display', 'block');
                    $(this).children('.tree-folder-header').children('i').removeClass('fa-plus-square-o');
                    $(this).children('.tree-folder-header').children('i').addClass('fa-minus-square-o');
                    return false;
                } else {
                    $(this).children('.tree-folder-header').children('i').removeClass('fa-minus-square-o');
                    $(this).children('.tree-folder-header').children('i').addClass('fa-plus-square-o');
                    $(this).children('.tree-folder-content').css('display', 'none');
                    return false;
                }
            });
            /* end menu tree */

            $scope.menutTreeData = [{
                "name": "MPM",
                "id": 1,
                "list": [{
                    "name": "MPM1",
                    "id": 3,
                    "list": []
                }, {
                    "name": "MPM2",
                    "id": 2,
                    "list": []
                }, {
                    "name": "MPM3",
                    "id": 2,
                    "list": [{
                        "name": "MPM3-1",
                        "id": 1
                    }, {
                        "name": "MPM3-2",
                        "id": 2
                    }]
                }]
            }, {
                "name": "OET",
                "id": 1,
                "list": [{
                    "name": "OET1",
                    "id": 1,
                    "list": []
                }, {
                    "name": "OET2",
                    "id": 2,
                    "list": []
                }]
            }, {
                "name": "IT",
                "id": 2,
                "list": []
            }, {
                "name": "FBI",
                "id": 2,
                "list": []
            }, {
                "name": "CIA",
                "id": 2,
                "list": []
            }]


        }
    ]);
    return app;
});