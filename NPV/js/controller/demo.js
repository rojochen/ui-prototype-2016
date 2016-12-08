define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);

    });

    app.controller('demoCtrl', ['$scope', '$timeout', '$log', '$element', function ($scope, $timeout, $log, $element) {
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
                "dateRange": "2016/07/01-2017/03/31"
            }, {
                "type": "活動",
                "name": "小資方案",
                "dateRange": "2016/09/01-2017/12/31"
            }, {
                "type": "促代",
                "name": "匯入-遠傳e書城149限12設備補貼",
                "dateRange": "2016/09/15-2017/04/30"
            }, {
                "type": "促代",
                "name": "3G單辦終極管家plus月租699A限24",
                "dateRange": "2016/12/01-2017/03/31"
            }, {
                "type": "活動",
                "name": "長青方案",
                "dateRange": "2016/10/01-2016/12/31"
            }, {
                "type": "促代",
                "name": "行動理財3G續約專案-590",
                "dateRange": "2016/11/01-2017/04/30"
            }, {
                "type": "促代",
                "name": "行動理財4G續約專案-790",
                "dateRange": "2016/11/01-2017/04/30"
            }, {
                "type": "促代",
                "name": "行動理財4G續約專案-1190",
                "dateRange": "2016/11/01-2017/04/30"
            }, {
                "type": "促代",
                "name": "3G單辦終極管家plus月租899A限24",
                "dateRange": "2016/12/01-2017/03/31"
            }, {
                "type": "促代",
                "name": "3G單辦終極管家plus月租399A限24",
                "dateRange": "2016/12/01-2017/03/31"
            }, {
                "type": "活動",
                "name": "小資方案",
                "dateRange": "2016/12/01-2017/04/23"
            }, {
                "type": "活動",
                "name": "學生方案",
                "dateRange": "2016/12/08-2017/04/26"
            }, {
                "type": "活動",
                "name": "學生方案",
                "dateRange": "2016/12/03-2017/02/26"
            }

        ];

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
                $('#datatable').DataTable();
                // $log.debug($scope.saerchKeyInput);
                $scope.saerchKey = $scope.saerchKeyInput;
            }, 100)
            $scope.showCommonTable = true;
            // $log.debug($scope.commonTableData);
        }

        $scope.defineItem = [];
        $scope.selectItem = function (x) {
            if ($scope.defineItem.length === 0) {
                $scope.defineItem.push(x);
            } else {
                var sameData = [];
                angular.forEach($scope.defineItem, function (item) {
                    if (item.name === x.name) {
                        sameData.push(item);
                    }
                })
                if (sameData.length === 0) {
                    $scope.defineItem.push(x);
                }
            }
            $log.debug($scope.defineItem); //後續要傳右方的值...
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
                $('#datatable_activities').DataTable();
                // $scope.saerchKey = $scope.saerchKeyInput;  //search未做...
            }, 100)
            $log.debug($scope.activitiesTableData);
            $scope.showActivitiesTable = true;
        }

        $scope.changeSearch = function () {
            $scope.showSearch = true;
            $scope.showActivities = false;
        }

        $scope.addItem = function () { //未做...
                $log.debug('新增');
            }
            /*end 問卷-查詢*/
    }]);
    return app;
});