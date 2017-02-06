define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('forciblyCancellationCtrl', ['$scope', '$timeout', '$log', '$element', 'ShoppingCartEntity', 'pnotifyService', function ($scope, $timeout, $log, $element, ShoppingCartEntity, pnotifyService) {
        /* notify 通知訊息 begin */
        // Success
        $scope.forciblyCancellationOkOk = function () {
            pnotifyService.pnotifySuccess('Success', '退單完成！');
            $timeout(function () {
                $('#forciblyCancellationOk').modal('hide');
            }, 400);
        }
        /* notify 通知訊息 end*/
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

        /* lightbox open */
        $(document).on('hidden.bs.modal', '.modal', function () {
            $('.modal:visible').length && $(document.body).addClass('modal-open');
        });
        $(document).on('show.bs.modal', '.modal', function () {
            $('.modal:visible').css('padding-right', '0px');
        });

        /* lightbox end */
        // 強制退單 start
        $scope.forciblyCancellationData = [{
            'waitId': 'forciblyCancellation1',
            'waitNpv': '20161022201',
            'waitType1': '促代',
            'waitType2': 'N/A',
            'waitTime': '2016/10/21 20:00',
            'waitPM': 'yuind',
            'waitStatus': '代審核'
        }, {
            'waitId': 'forciblyCancellation2',
            'waitNpv': '20161022202',
            'waitType1': '促代-4G/3G',
            'waitType2': 'Single(8)',
            'waitTime': '2016/09/11 12:00',
            'waitPM': 'yuind',
            'waitStatus': '代審核'
        }, {
            'waitId': 'forciblyCancellation3',
            'waitNpv': '20161022203',
            'waitType1': '促代-3G',
            'waitType2': 'N/A',
            'waitTime': '2016/10/21 20:00',
            'waitPM': 'yuind',
            'waitStatus': '代審核'
        }];
        // 強制退單 end
        // 強制退單NPV單號詳細 start
        $scope.forciblyCancellationDetail = [{
            'id': 'forciblyCancellation1',
            'npvNo': '1',
            'npvCode': 'HSADSFER-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'forciblyCancellation1',
            'npvNo': '2',
            'npvCode': 'FSDF2FSD-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'forciblyCancellation1',
            'npvNo': '3',
            'npvCode': 'JKLYUJ4E5-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'forciblyCancellation1',
            'npvNo': '4',
            'npvCode': 'JER2JFLAWK-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'forciblyCancellation1',
            'npvNo': '5',
            'npvCode': 'HASLDFKE3-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'forciblyCancellation1',
            'npvNo': '6',
            'npvCode': 'RHLE24HL44-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'forciblyCancellation1',
            'npvNo': '7',
            'npvCode': '4G44RT66-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'forciblyCancellation1',
            'npvNo': '8',
            'npvCode': 'DFGHR3SDF-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }];
        // 強制退單NPV單號詳細 end
        // NPV單號詳細 start
        $scope.waitNpvItemData = [{
            'id': 'list1',
            'npvNo': '1',
            'npvCode': 'HSADSFER-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '2',
            'npvCode': 'FSDF2FSD-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '3',
            'npvCode': 'JKLYUJ4E5-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '4',
            'npvCode': 'JER2JFLAWK-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '5',
            'npvCode': 'HASLDFKE3-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '6',
            'npvCode': 'RHLE24HL44-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '7',
            'npvCode': '4G44RT66-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '8',
            'npvCode': 'DFGHR3SDF-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '9',
            'npvCode': '4R5SDFGH-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '10',
            'npvCode': '4G5G3G2E2-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '11',
            'npvCode': 'FHNXASF6HG-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvVer': '1.1'
        }, ];
        // NPV單號詳細 end
        // 表格第二欄樣式 start
        $scope.setStyle = {
            'padding': '0px'
        };
        // 表格第二欄樣式 end

        // 強制退單取消確定 start
        $scope.forciblyCancellationChecked = function () {
            $timeout(function () {
                $('#forciblyCancellationOk').modal('hide');
            }, 400);
        }
        // 強制退單取消確定 end
        //續約適用活動期間 start
        $('#renewalSuitableDateStart').daterangepicker({
            singleDatePicker: true
            // calender_style: "picker_4"
        }, function (start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });
        $('#renewalSuitableDateEnd').daterangepicker({
            singleDatePicker: true
            // calender_style: "picker_4"
        }, function (start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });
        //續約適用活動期間 end
        $('#datatable_multiEditServiceData').DataTable().destroy();

        $timeout(function () {
            $('#datatable_multiEditServiceData').DataTable(opt);
        }, 100)
        // 強制退單排序 start
        $('#datatable_forciblyCancellationData').DataTable().destroy();

        $timeout(function () {
            $('#datatable_forciblyCancellationData').DataTable(opt);
        }, 100)
        // 強制退單排序 end
        // 強制退單NPV單號詳細排序 end    
        $('#datatable_forciblyCancellationDetail').DataTable().destroy();

        $timeout(function () {
            $('#datatable_forciblyCancellationDetail').DataTable(opt);
        }, 100)
        // 強制退單NPV單號詳細排序 end
    }]);
    return app;
});