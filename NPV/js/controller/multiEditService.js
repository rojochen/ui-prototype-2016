define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    /*begin 版面縮合*/
    app.controller('multiEditServiceCtrl', ['$scope', '$timeout', '$log', '$element', 'ShoppingCartEntity', 'pnotifyService', function ($scope, $timeout, $log, $element, ShoppingCartEntity, pnotifyService) {
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
        /* notify 通知訊息 begin */
        // Success
        $scope.masterMultiItemEditUploadOk = function () {
            pnotifyService.pnotifySuccess('Success', '更新完成！');
            $timeout(function () {
                $('#masterMultiItemEdit').modal('hide');
            }, 400);
        }
        $scope.masterMultiItemEditResetOk = function () {
            pnotifyService.pnotifySuccess('Success', '重置完成！');
            $timeout(function () {
                $('#masterMultiItemEditReset').modal('hide');
            }, 400);
        }
        /* notify 通知訊息 end*/
        /*end 版面縮合*/
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
            "bLengthChange": false
            // "scrollX": true,

        };

        $scope.multiEditSeviceTableData = [{
            'multiEditSeviceNo': 1,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 21,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.2',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 2,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 20,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 19,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 3,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.2',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 18,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 4,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.2',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 17,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 16,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 5,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.2',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 15,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 6,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 13,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 7,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '1',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 8,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 9,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '2',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 14,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 11,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 10,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }, {
            'multiEditSeviceNo': 12,
            'multiEditSeviceSrNo': '',
            'multiEditSeviceSpvNo': '20100723005',
            'multiEditSeviceOfferId': '505166',
            'multiEditSeviceType': '主約促代',
            'multiEditSeviceVer': '0.0.3',
            'multiEditSeviceCode': 'OYFLWFN-YFY3',
            'multiEditSeviceName': '精選客戶筆電爆殺專案(特定機型)無限飆網775限36優惠A'
        }];
        // 違約金
        $scope.punitiveTableData = [{
            'punitiveNo': 1,
            'punitiveType': '電信折扣(月租型)',
            'punitiveStartDate': '0.0',
            'punitiveEndDate': '0.0',
            'punitiveGold': '0'
        }, {
            'punitiveNo': 2,
            'punitiveType': '電信折扣(月租型)',
            'punitiveStartDate': '0.0',
            'punitiveEndDate': '0.0',
            'punitiveGold': '0'
        }]
        //  折扣
        $scope.discountTableData = [{
            'discountItem': '166402-月租費優惠165元*30個月'
        }];

        /* lightbox open */
        $(document).on('hidden.bs.modal', '.modal', function () {
            $('.modal:visible').length && $(document.body).addClass('modal-open');
        });
        $(document).on('show.bs.modal', '.modal', function () {
            $("element.style").css("padding-right", "0");
        });

        /* lightbox end */
        //主約類型多筆編輯維護修改按鈕動作 start
        $scope.masterMultiItemEditUploadCancelOk = function () {
            $timeout(function () {
                $('#masterMultiItemEditUpload').modal('hide');
            }, 400);
        }
        //主約類型多筆編輯維護修改按鈕動作 end
        // 重置取消按鈕start
        $scope.mergeListResetCancelOk = function () {
            $timeout(function () {
                $('#masterMultiItemEditReset').modal('hide');
            }, 400);
        }

        // 重置取消按鈕end
        //續約適用活動期間 start
        $scope.renewalSuitableDateStart = new Date();
        //續約適用活動期間 end
        $('#datatable_multiEditServiceData').DataTable().destroy();

        $timeout(function () {
            $('#datatable_multiEditServiceData').DataTable(opt);
        }, 100)

    }]);
    return app;
});