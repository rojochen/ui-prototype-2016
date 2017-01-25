define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('waitTreatmentListCtrl', ['$scope', '$timeout', '$log', '$element', 'ShoppingCartEntity', function ($scope, $timeout, $log, $element, ShoppingCartEntity) {
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
        /* lightbox end */

        // 確定修改生效日按鈕start
        $scope.dateOk = function () {
            $timeout(function () {
                $('#dataBecomeEffectiveSet').modal('hide');
            }, 100);
        }
        // 確定修改生效日按鈕end
        // 代處理 start
        $scope.waitTreatmentListData = [{
            'waitId': 'list1',
            'waitNpv': '20161022201',
            'waitType1': '促代',
            'waitType2': 'N/A',
            'waitTime': '2016/10/21 20:00',
            'waitPM': 'yuind',
            'waitStatus': '代審核',
            'waitDesignate': '核可'
        }, {
            'waitId': 'list2',
            'waitNpv': '20161022202',
            'waitType1': '促代-4G/3G',
            'waitType2': 'Single(8)',
            'waitTime': '2016/09/11 12:00',
            'waitPM': 'yuind',
            'waitStatus': '代審核',
            'waitDesignate': '指派'
        }, {
            'waitId': 'list3',
            'waitNpv': '20161022203',
            'waitType1': '促代-3G',
            'waitType2': 'N/A',
            'waitTime': '2016/10/21 20:00',
            'waitPM': 'yuind',
            'waitStatus': '代審核',
            'waitDesignate': '核可'
        }];
        // 代處理 end
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

        // 檔案生效日期select start
        $scope.dataBecomeEffectiveSelect = [{
            'dataName': '全部',
            'dataValue': '0'
        }, {
            'dataName': '促代',
            'dataValue': '1'
        }, {
            'dataName': '活動類別',
            'dataValue': '2'
        }, {
            'dataName': '贈品加碼',
            'dataValue': '3'
        }];
        // 檔案生效日期select end
        $scope.dataBecomeEffectiveSequence = [{
            'dateBecomeEffective': '20170111001',
            'dateCode': 'HY3DO50-FA3K',
            'dateType': '促代-4G/3G',
            'dateTwoType': 'Single',
            'dateName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'show': 'true'
        }, {
            'dateBecomeEffective': '20170111002',
            'dateCode': 'YYY34DFC-FA3K',
            'dateType': '活動類別',
            'dateTwoType': 'Single',
            'dateName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'show': 'true'
        }, {
            'dateBecomeEffective': '20170111003',
            'dateCode': 'H7JFAE4G-FA3K',
            'dateType': '促代-4G/3G',
            'dateTwoType': 'Single',
            'dateName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'show': 'true'
        }, {
            'dateBecomeEffective': '20170111004',
            'dateCode': 'YJ3ADF35-FA3K',
            'dateType': '贈品加碼',
            'dateTwoType': 'Single',
            'dateName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'show': 'true'
        }, {
            'dateBecomeEffective': '20170111005',
            'dateCode': 'YYY34DFC-FA3K',
            'dateType': '活動類別',
            'dateTwoType': 'Single',
            'dateName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'show': 'true'
        }, {
            'dateBecomeEffective': '20170111006',
            'dateCode': 'YJ3ADF35-FA3K',
            'dateType': '贈品加碼',
            'dateTwoType': 'Single',
            'dateName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'show': 'true'
        }, {
            'dateBecomeEffective': '20170111008',
            'dateCode': 'H7JFAE4G-FA3K',
            'dateType': '促代-4G/3G',
            'dateTwoType': 'Single',
            'dateName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'show': 'true'
        }, {
            'dateBecomeEffective': '20170111007',
            'dateCode': 'YYY34DFC-FA3K',
            'dateType': '活動類別',
            'dateTwoType': 'Single',
            'dateName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'show': 'true'
        }, {
            'dateBecomeEffective': '20170111010',
            'dateCode': 'YYY34DFC-FA3K',
            'dateType': '活動類別',
            'dateTwoType': 'Single',
            'dateName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'show': 'true'
        }, {
            'dateBecomeEffective': '20170111009',
            'dateCode': 'YYY34DFC-FA3K',
            'dateType': '贈品加碼',
            'dateTwoType': 'Single',
            'dateName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'show': 'true'
        }, {
            'dateBecomeEffective': '20170111011',
            'dateCode': 'H7JFAE4G-FA3K',
            'dateType': '促代-4G/3G',
            'dateTwoType': 'Single',
            'dateName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'show': 'true'
        }];

        // 檔案生效日期預設 start
        $scope.changeItemTypeFunction = $scope.dataBecomeEffectiveSelect[0];
        // 檔案生效日期預設 end
        // 檔案生效日查詢事件 start
        $scope.searchType = function () {
            $scope.tarValue = $scope.changeItemTypeFunction.dataValue;
            var name = "全部";
            if ($scope.tarValue == '1') {
                name = "促代-4G/3G";
                changeShow(name);
            } else if ($scope.tarValue == '2') {
                name = "活動類別";
                changeShow(name);
            } else if ($scope.tarValue == '3') {
                name = "贈品加碼";
                changeShow(name);
            } else if ($scope.tarValue == '0') {
                name = "全部";
                changeShow(name);
            }
        }

        function changeShow(val) {
            var xname = [];
            if (val.match("全部")) {
                for (var x = 0; x < $scope.dataBecomeEffectiveSequence.length; x++) {
                    $scope.dataBecomeEffectiveSequence[x].show = 'true';
                }
            } else {
                for (var x = 0; x < $scope.dataBecomeEffectiveSequence.length; x++) {
                    $scope.dataBecomeEffectiveSequence[x].show = 'true';
                    if (!val.match($scope.dataBecomeEffectiveSequence[x].dateType)) {
                        $scope.dataBecomeEffectiveSequence[x].show = 'false';
                    }
                }
            }
        }
        // 檔案生效日查詢事件 end
        // 檔案生效日期設定 start
        $('#dataBecomeEffectiveSetDate').daterangepicker({
            singleDatePicker: true
            // calender_style: "picker_4"
        }, function (start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });
        // 檔案生效日期設定 end
        // 表格第二欄樣式 start
        $scope.waitItemStyle = {
            'padding': '0px'
        };
        // 表格第二欄樣式 end

        $('#datatable_waitTreatmentListData').DataTable().destroy();

        $timeout(function () {
            $('#datatable_waitTreatmentListData').DataTable(opt);
        }, 100)

        $('#datatable_waitNpvItemData').DataTable().destroy();

        $timeout(function () {
            $('#datatable_waitNpvItemData').DataTable(opt);
        }, 100)




        // 檔案生效日期 start
        $('#datatable_dataBecomeEffectiveSequence').DataTable().destroy();

        $timeout(function () {
            $('#datatable_dataBecomeEffectiveSequence').DataTable(opt);
        }, 100)
        // 檔案生效日期 end
    }]);
    return app;
});