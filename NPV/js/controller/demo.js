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
                $ICON.toggleClass('fa-minus  fa-plus');
            });
            /*end 版面縮合*/

            $(document).on('hidden.bs.modal', '.modal', function () {

                $('.modal:visible').length && $(document.body).addClass('modal-open');

            });

            $(document).on('show.bs.modal', '.modal', function () {
                $("element.style").css("padding-right", "0");
            });


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
                "bInfo": true,
                "bPaginate": true,
                "bLengthChange": false,
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
                "NO": "01",
                "gateType": "FET",
                "sort": "3轉4",
                "activityCode": "A2696",
                "activityName": "3轉4_iPhone SE 絕配續約專案_預繳(測試)",
                "activityRange": "2016/09/08-2016/12/31",
                "groupCode": "G001",
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
                "NO": "02",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "03",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "04",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "D3633",
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
                "NO": "06",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "F3333",
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
                "NO": "07",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "G3333",
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
                "NO": "08",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "09",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "10",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "11",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "12",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "13",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "14",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "15",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "16",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "17",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "18",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "19",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                "NO": "20",
                "gateType": "AAA",
                "sort": "3轉4",
                "activityCode": "C3333",
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
                // if ($scope.offerItem) {
                //     $('#Modal4').modal('hide');
                //     $timeout(function () {
                //         if ($scope.offerItem === $scope.offerList[0]) {
                //             $('#Modal5-1').modal('show');
                //         }
                //         if ($scope.offerItem === $scope.offerList[1]) {
                //             $('#Modal5-2').modal('show');
                //         }
                //         $scope.offerItem = '';
                //     }, 400);
                // }

                if ($scope.offerItem) {
                    $('#Modal4').modal('hide');
                    $timeout(function () {
                        if ($scope.offerItem === "1") {
                            $('#generationEdit').modal('show');
                        }
                        if ($scope.offerItem === "2") {
                            $('#valueAdded').modal('show');
                        }
                        $scope.offerItem = '';
                    }, 400);
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

                $('#addSingleGeneration').modal('hide');

            }


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



            $scope.addList = function () {
                $timeout(function () {
                    $('#Modal2-2').modal('hide');
                    $('#Modal3-1').modal('show');
                }, 400);
            }
            /* end */


            $scope.inquiry = function () {
                $timeout(function () {
                    $('#Modal2-2').modal('hide');
                    $('#activityInquire').modal('show');
                }, 400);
            }
            /* end */


            $scope.downtimeCanRateData = [{
                "01": "高",
                "02": "學生方案",
                "activityCod": "D3600",
                "dateRange": "2016/07/01-2017/03/31"
            }, {
                "type": "促案",
                "name": "小資方案",
                "activityCode": "D3611",
                "dateRange": "2016/09/01-2017/12/31"
            }];

            $element.find('.flat').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            });




            $scope.openItem = function () {
                $timeout(function () {
                    $('#Modal2-2').modal('hide');
                    $('#Modal4').modal('show');
                }, 400);
            }
            /* end */



            $scope.offerList = ['POS3RP 大雙網哈拉550月租費 -- RP', 'POS3RV 來電答鈴69超值包 -- RV'];
            $scope.definiteOffer = function () {
                // $log.debug($scope.offerItem);
                // if ($scope.offerItem) {
                //     $('#Modal4').modal('hide');
                //     $timeout(function () {
                //         if ($scope.offerItem === $scope.offerList[0]) {
                //             $('#Modal5-1').modal('show');
                //         }
                //         if ($scope.offerItem === $scope.offerList[1]) {
                //             $('#Modal5-2').modal('show');
                //         }
                //         $scope.offerItem = '';
                //     }, 400);
                // }

                if ($scope.offerItem) {
                    $('#Modal4').modal('hide');
                    $timeout(function () {
                        if ($scope.offerItem === "1") {
                            $('#generationEdit').modal('show');
                        }
                        if ($scope.offerItem === "2") {
                            $('#valueAdded').modal('show');
                        }
                        $scope.offerItem = '';
                    }, 400);
                }
            }
            /* end */

            $('#datatable_draft').DataTable().destroy();

            $timeout(function () {
                $('#datatable_draft').DataTable(opt);
            }, 100)


            $scope.draftData = [{
                "number": "20170111001",
                "numberType": "促代-4G",
                "subType": "Bundle(1)",
            }, {
                "number": "20170111002",
                "numberType": "活動類型(1)",
                "subType": "Single(5)/Bundle(3)",
            }, {
                "number": "20170111003",
                "numberType": "促代-4G",
                "subType": "Single(1)",
            }, {
                "number": "20170111004",
                "numberType": "促代-4G/3G",
                "subType": "Single(3)",
            }, {
                "number": "20170111005",
                "numberType": "促代-4G",
                "subType": "Single(1)",
            }, {
                "number": "20170111006",
                "numberType": "促代-4G",
                "subType": "Single(1)",
            }, {
                "number": "20170111007",
                "numberType": "促代-4G",
                "subType": "Single(1)",
            }, {
                "number": "20170111008",
                "numberType": "促代-4G",
                "subType": "Single(1)",
            }, {
                "number": "20170111009",
                "numberType": "促代-4G",
                "subType": "Bundle(1)",
            }, {
                "number": "20170111010",
                "numberType": "促代3G",
                "subType": "Single(1)",
            }, {
                "number": "20170111011",
                "numberType": "促代4G",
                "subType": "Single(1)",
            }, {
                "number": "20170111012",
                "numberType": "促代4G",
                "subType": "Bundle(1)",
            }, {
                "number": "20170111013",
                "numberType": "促代3G",
                "subType": "Single(1)",
            }, {
                "number": "20170111014",
                "numberType": "促代3G",
                "subType": "Single(1)",
            }, {
                "number": "20170111015",
                "numberType": "促代4G",
                "subType": "Single(1)",
            }];




            $scope.inquire = function (numberType) {
                if (numberType === "促代-4G") {
                    $('#promotingGenerationInquire').modal('show');
                    $('#Modal3-1').modal('hide');
                } else {
                    $('#Modal3-1').modal('show');
                    $('#promotingGenerationInquire').modal('hide');
                }

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
                "name": "B001＿3G學生＿新啟用專案(同生共死)",
                "id": 1,
                "list": [{
                    "name": "S001_大雙網3G_599月租費方案(Single)",
                    "id": 3,
                    "list": []
                }, {
                    "name": "S002_行動上網優惠6個月(Single)",
                    "id": 2,
                    "list": []
                }]
            }, {
                "name": "B002＿3G學生＿新啟用專案(各自分飛)",
                "id": 1,
                "list": [{
                    "name": "S003_新絕配3G_599方案(Single)",
                    "id": 1,
                    "list": []
                }, {
                    "name": "S004_3G行動上網(Single)",
                    "id": 2,
                    "list": []
                }, {
                    "name": "S005_來電答鈴優惠2個月(Single)",
                    "id": 2,
                    "list": []
                }]
            }]


            $scope.menutTreeData2 = [{
                "name": "L2573續約＿新手機方案A",
                "id": 1,
                "list": [{
                    "name": "",
                    "id": 3,
                    "list": []
                }, {
                    "name": "",
                    "id": 2,
                    "list": []
                }]
            }, {
                "name": "",
                "id": 1,
                "list": [{
                    "name": "",
                    "id": 1,
                    "list": []
                }, {
                    "name": "",
                    "id": 2,
                    "list": []
                }, {
                    "name": "",
                    "id": 2,
                    "list": []
                }]
            }]
        }
    ]);
    return app;
});