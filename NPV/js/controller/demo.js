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
            $(".select2_single").select2({
                placeholder: "選擇類型",
                allowClear: true
            });
        }, 100)


        $scope.selectTypeItem = ['活動', '促代'];
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
        }];

        var unbindWatcher = $scope.$watch('selectType', function (newValue, oldValue) {  //unbindWatcher(); ..未做
            $log.debug(newValue, oldValue)
            if (newValue) {
                $scope.showSearch = true;
                $scope.showAdd = true;
            } else {
                $scope.showSearch = false;
                $scope.showAdd = false;
                $scope.showCommonTable = false;
                $scope.saerchKeyInput = '';
            }
            if (newValue !== oldValue) {
                $('#datatable').DataTable().destroy();  //重新順一下流程...
                $scope.commonTableData = [];
                // $scope.showCommonTable = false;
            }
        }, true)

        $scope.saerch = function () {
            $scope.commonTableData = [];
            // $log.debug($scope.saerchKeyInput);
            $scope.saerchKey = $scope.saerchKeyInput;
            $scope.showCommonTable = true;
            angular.forEach($scope.commonTable, function (item) {
                if (item.type === $scope.selectType) {
                    $scope.commonTableData.push(item);
                }
            })
            $timeout(function () {
                $log.debug($.fn.dataTable.isDataTable('#datatable'));
                if (!$.fn.dataTable.isDataTable('#datatable')) {
                    $('#datatable').DataTable();
                }
            }, 100)
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
            $log.debug($scope.defineItem);
        }

        $scope.view = function (x) {
            $log.debug(x);
        }

        $scope.edit = function (x) {
            $log.debug(x);
        }

        $scope.saerchAdvanced = function () {
            $log.debug('saerchAdvanced');
            if ($scope.selectType) {
                $log.debug('add-1');
                // $scope.selectType = '';  //??
            } else {
                swal({
                    title: '錯誤',
                    html: $('<div>')
                        .addClass('some-class')
                        .text('請選擇進階查詢類型!!')
                }).done();
            }
        }

        $scope.addItem = function () {
            if ($scope.selectType) {
                $log.debug('add-1');  //新增活動、促代未做...
                // $scope.selectType = '';  //??
            } else {
                swal({
                    title: '錯誤',
                    html: $('<div>')
                        .addClass('some-class')
                        .text('請選擇新增類型!!')
                }).done();
            }
        }
        /*end 問卷-查詢*/
    }]);
    return app;
});