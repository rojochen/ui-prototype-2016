define(['btModule'], function (btModule) {
            'use strict';
            var app = angular.module("btModule");

            app.config(function ($logProvider) {
                $logProvider.debugEnabled(true);

            });

            app.controller('functionPermissionsSetCtrl', ['$scope', '$timeout', '$log', '$element',
                    'ShoppingCartEntity',
                    function ($scope, $timeout, $log, $element, shoppingCartEntity) {
                        var vm = this;

                       
                            $element.find('.flat').iCheck({
                                checkboxClass: 'icheckbox_flat-green',
                                radioClass: 'iradio_flat-green'
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
                                $('#datatable_functionPermissionSet').DataTable(opt);
                            }, 100)

                            $scope.roleTableData = [{
                                "roleId": "1",
                                "roleName": "System Admin",
                            }, {
                                "roleId": "2",
                                "roleName": "PM",
                            }, {
                                "roleId": "3",
                                "roleName": "Team Leader",
                            }, {
                                "roleId": "4",
                                "roleName": "Team Member",
                            }, {
                                "roleId": "5",
                                "roleName": "System Admin",
                            }, ];

                            $scope.functionPermissionSetData = [{
                                "functionList": "系統設定管理",
                                "function": "使用者設定",
                                "add": "新增 ",
                                "edit": "修改",
                                "delete": "刪除",
                                "discontinue": "停用",
                                "startUsing": "啟用",
                                "applyMechanically": ""
                            }, {
                                "functionList": "系統設定管理",
                                "function": "角色設定",
                                "add": "新增 ",
                                "edit": "修改",
                                "delete": "刪除",
                                "discontinue": "停用",
                                "startUsing": "啟用",
                                "applyMechanically": ""
                            }, {
                                "functionList": "系統設定管理",
                                "function": "部門設定",
                                "add": "新增 ",
                                "edit": "修改",
                                "delete": "刪除",
                                "discontinue": "停用",
                                "startUsing": "啟用",
                                "applyMechanically": ""
                            }, {
                                "functionList": "系統設定管理",
                                "function": "權限設定",
                                "add": "新增 ",
                                "edit": "修改",
                                "delete": "刪除",
                                "discontinue": "停用",
                                "startUsing": "啟用",
                                "applyMechanically": "套用"
                            }, {
                                "functionList": "促代維護",
                                "function": "折扣查詢",
                                "add": "查詢 ",
                                "edit": "重新上架",
                                "delete": "複製SPA單",
                            }, {
                                "functionList": "促代維護",
                                "function": "折扣查詢",
                                "add": "查詢 ",
                                "edit": "重新上架",
                                "delete": "複製SPA單",
                            }];

                            // console.log($scope.functionPermissionSetData);
                            // console.log($scope.functionPermissionSetData[0].applyMechanically);

                            // for (i = 0; i <= $scope.functionPermissionSetData.length; i++) {

                            //     if ($scope.functionPermissionSetData[i].applyMechanically == "") {
                            //         console.log($scope.functionPermissionSetData[0].applyMechanically);



                            //         document.getElementById('applyMechanically').style.display = "none";

                            //         //     } else {

                            //     }



                            // angular.forEach($scope.functionPermissionSetData, function (item) {

                            //     if (item.applyMechanically == "") {
                            //         // document.getElementById('applyMechanically').parentElement.parentElement.
                            //         document.getElementById('applyMechanically').style.display = "none";

                            //     } else {

                            //     }

                            // })





                            /* begin */
                            $scope.multiselectControl = false;
                            $scope.showMultiselect = function () {
                                    $scope.multiselectControl = true;
                                }
                                /* end */







                        }
                    ]);
                return app;
            });