define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('demoCtrl', ['$scope', '$timeout', '$log', '$element',
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
                $ICON.toggleClass('fa-chevron-up fa-chevron-down');
            });
            /*end 版面縮合*/


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
                "searching": false
            };

            $timeout(function () {
                $("#selectType").select2({
                    placeholder: "選擇類型",
                    allowClear: true
                });
            }, 100)


            $scope.selectTypeItem = ['活動', '促代'];
            $scope.activityGroupItem = ['G0141-4G續約-iPhone預繳方案'];
            $scope.numberTypeItem = ['FET', 'AAA'];
            $scope.typeItem = ['3轉4', '2轉3'];
            $scope.commonTable = [{
                "type": "活動",
                "name": "學生方案",
                "activityCode": "D3600",
                "dateRange": "2016/07/01-2017/03/31"
            }, {
                "type": "活動",
                "name": "小資方案",
                "activityCode": "D3611",
                "dateRange": "2016/09/01-2017/12/31"
            }, {
                "type": "促代",
                "name": "匯入-遠傳e書城149限12設備補貼",
                "activityCode": "D3622",
                "dateRange": "2016/09/15-2017/04/30"
            }, {
                "type": "促代",
                "name": "3G單辦終極管家plus月租699A限24",
                "activityCode": "D3633",
                "dateRange": "2016/12/01-2017/03/31"
            }, {
                "type": "活動",
                "name": "長青方案",
                "activityCode": "D3644",
                "dateRange": "2016/10/01-2016/12/31"
            }, {
                "type": "促代",
                "name": "行動理財3G續約專案-590",
                "activityCode": "D3655",
                "dateRange": "2016/11/01-2017/04/30"
            }, {
                "type": "促代",
                "name": "行動理財4G續約專案-790",
                "activityCode": "D3666",
                "dateRange": "2016/11/01-2017/04/30"
            }, {
                "type": "促代",
                "name": "行動理財4G續約專案-1190",
                "activityCode": "D3677",
                "dateRange": "2016/11/01-2017/04/30"
            }, {
                "type": "促代",
                "name": "3G單辦終極管家plus月租899A限24",
                "activityCode": "D3688",
                "dateRange": "2016/12/01-2017/03/31"
            }, {
                "type": "促代",
                "name": "3G單辦終極管家plus月租399A限24",
                "activityCode": "D3699",
                "dateRange": "2016/12/01-2017/03/31"
            }, {
                "type": "活動",
                "name": "小資方案",
                "activityCode": "A1111",
                "dateRange": "2016/12/01-2017/04/23"
            }, {
                "type": "活動",
                "name": "學生方案",
                "activityCode": "B2222",
                "dateRange": "2016/12/08-2017/04/26"
            }, {
                "type": "活動",
                "name": "學生方案",
                "activityCode": "C3333",
                "dateRange": "2016/12/03-2017/02/26"
            }];

            $scope.activitiesTableData = [{
                "SPV": "001",
                "gateType": "FET",
                "sort": "3轉4",
                "activityCode": "A2696",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳(測試)",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G001",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "002",
                "gateType": "FET",
                "sort": "2轉3",
                "activityCode": "B2222",
                "activityName": "2轉3_iPhone SE 絕配續約專案_預繳(測試)",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G002",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "003",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "004",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "D3633",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "005",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "E3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "006",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "F3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "007",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "G3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "008",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "009",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "010",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "011",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "012",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "013",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "014",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "015",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "016",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "017",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "018",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "019",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }, {
                "SPV": "020",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G003",
                "groupName": "G0141-4G續約-iPhone預繳方案"
            }];

            var unbindWatcher = $scope.$watch('selectType', function (newValue, oldValue) { //unbindWatcher(); ..未做
                // $log.debug(newValue, oldValue);
                if (newValue) {
                    $scope.showSearch = true;
                    $scope.showAdd = true;
                } else {
                    $scope.showSearch = false;
                    $scope.showAdd = false;
                    $scope.showCommonTable = false;
                    $scope.saerchKeyInput = '';
                }
                if (newValue !== oldValue) { //要再順一下流程...
                    $('#datatable').DataTable().destroy();
                    $scope.commonTableData = [];
                    $scope.saerchKeyInput = '';
                    $scope.showCommonTable = false;
                }
            }, true)

            $scope.saerch = function () {
                $scope.commonTableData = [];
                angular.forEach($scope.commonTable, function (item) {
                    if (item.type === $scope.selectType) {
                        $scope.commonTableData.push(item);
                    }
                })
                $timeout(function () {
                    $('#datatable').DataTable(opt);
                    // $log.debug($scope.saerchKeyInput);
                    $scope.saerchKey = $scope.saerchKeyInput;
                }, 100)
                $scope.showCommonTable = true;
                // $log.debug($scope.commonTableData);
            }


            $scope.defineItem = [];
            $scope.selectItem = function (x) {
                if (shoppingCartEntity.getList().length === 0) {
                    shoppingCartEntity.addItem(x);
                } else {
                    var sameData = [];
                    angular.forEach(shoppingCartEntity.getList(), function (item) {
                        if (item.activityCode === x.activityCode) {
                            sameData.push(item);
                        }
                    })
                    if (sameData.length === 0) {
                        shoppingCartEntity.addItem(x);
                    }
                }
                // $log.debug(shoppingCartEntity.getList());

                var index = shoppingCartEntity.getCartID();
                // $log.debug(index);
                if (index === null) {
                    index = shoppingCartEntity.openShoppingCart();
                    shoppingCartEntity.setCartID(index);
                }
            }


            $scope.view = function (x) {
                $log.debug(x);
                // $('#myModal').modal('show');  //未做....
            }

            $scope.edit = function (x) {
                $log.debug(x);
                // $('#myModal').modal('show');  //未做....
            }

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

            $scope.addItem = function () {
                    // $log.debug($scope.selectType);
                    if ($scope.selectType === '活動') {
                        $('#Modal2-1').modal('show');
                    }
                    if ($scope.selectType === '促代') {
                        $('#Modal4').modal('show');
                    }
                }
                /*end 問卷-查詢*/


            /* begin */
            $scope.offerList = ['POS3RP 大雙網哈拉550月租費 -- RP', 'POS3RV 來電答鈴69超值包 -- RV'];
            $scope.definiteOffer = function () {
                    // $log.debug($scope.offerItem);
                    if ($scope.offerItem) {
                        $('#Modal4').modal('hide');
                        $('#Modal4').on('hidden.bs.modal', function () {
                            if ($scope.offerItem === $scope.offerList[0]) {
                                $('#Modal5-1').modal('show');
                            }
                            if ($scope.offerItem === $scope.offerList[1]) {
                                $('#Modal5-2').modal('show');
                            }
                        });
                    }
                }
                /* end */

           



            $scope.openbuy = function () {

                $scope.actionData = [{
                    "type": "活動",
                    "name": "學生方案",
                    "activityCode": "D3600",
                    "dateRange": "2016/07/01-2017/03/31"
                }, {
                    "type": "促案",
                    "name": "小資方案",
                    "activityCode": "D3611",
                    "dateRange": "2016/09/01-2017/12/31"
                }];


                angular.forEach($scope.actionData, function (item) {
                    shoppingCartEntity.addItem(item);

                })



                var index = shoppingCartEntity.getCartID();
                // $log.debug(index);
                if (index === null) {
                    index = shoppingCartEntity.openShoppingCart();
                    shoppingCartEntity.setCartID(index);
                }





            }



        }
    ]);
    return app;
});