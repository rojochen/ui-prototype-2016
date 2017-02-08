define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('waitTreatmentListCtrl', ['$scope', '$timeout', '$log', '$element', 'ShoppingCartEntity', 'pnotifyService', function ($scope, $timeout, $log, $element, ShoppingCartEntity, pnotifyService) {
        /* notify 通知訊息 begin */
        // Success
        $scope.dataBecomeEffectiveSetOkOk = function () {
            pnotifyService.pnotifySuccess('Success', '修改完成！');
            $timeout(function () {
                // $('#dataBecomeEffectiveSet').modal('hide');
                $scope.showDate = false;
            }, 400);
        }
        $scope.designationDoubleOk = function () {
            pnotifyService.pnotifySuccess('Success', '指派完成！');
            $timeout(function () {
                $('#designationObjects').modal('hide');
            }, 400);
        }
        $scope.chargebackCauseDoubleOk = function () {
            pnotifyService.pnotifySuccess('Success', '退單完成！');
            $timeout(function () {
                $('#chargebackCause').modal('hide');
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
        // 代碼明細樹狀選單 start
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
        // 代碼明細樹狀選單 end

        /* lightbox open */
        $(document).on('hidden.bs.modal', '.modal', function () {
            $('.modal:visible').length && $(document.body).addClass('modal-open');
        });
        $(document).on('show.bs.modal', '.modal', function () {
            $('.modal:visible').css('padding-right', '0px');
        });
        /* lightbox end */
        // 代處理 start
        $scope.waitTreatmentListData = [{
            'waitId': 'list1',
            'waitNpv': '20161022201',
            'waitType1': '促代',
            'waitType2': 'N/A',
            'waitTime': '2016/10/21 20:00',
            'waitPM': 'yuind',
            'waitStatus': '待審核',
            'waitDesignate': '核可'
        }, {
            'waitId': 'list2',
            'waitNpv': '20161022202',
            'waitType1': '促代-4G/3G',
            'waitType2': 'Single(8)',
            'waitTime': '2016/09/11 12:00',
            'waitPM': 'yuind',
            'waitStatus': '待審核',
            'waitDesignate': '指派'
        }, {
            'waitId': 'list3',
            'waitNpv': '20161022203',
            'waitType1': '促代-3G',
            'waitType2': 'N/A',
            'waitTime': '2016/10/21 20:00',
            'waitPM': 'yuind',
            'waitStatus': '待審核',
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
            'npvTime': '2017/12/11',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '2',
            'npvCode': 'FSDF2FSD-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvTime': '2017/11/11',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '3',
            'npvCode': 'JKLYUJ4E5-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvTime': '2017/09/21',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '4',
            'npvCode': 'JER2JFLAWK-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvTime': '2017/09/22',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '5',
            'npvCode': 'HASLDFKE3-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvTime': '2017/07/18',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '6',
            'npvCode': 'RHLE24HL44-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvTime': '2017/09/23',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '7',
            'npvCode': '4G44RT66-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvTime': '2017/05/01',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '8',
            'npvCode': 'DFGHR3SDF-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvTime': '2017/03/02',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '9',
            'npvCode': '4R5SDFGH-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvTime': '2017/03/21',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '10',
            'npvCode': '4G5G3G2E2-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvTime': '2017/03/01',
            'npvVer': '1.1'
        }, {
            'id': 'list1',
            'npvNo': '11',
            'npvCode': 'FHNXASF6HG-KF3D4',
            'npvType': 'Single',
            'npvName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000',
            'npvTime': '2017/03/10',
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
        // $('#dataBecomeEffectiveSetDate').daterangepicker({
        //     singleDatePicker: true
        //     // calender_style: "picker_4"
        // }, function (start, end, label) {
        //     console.log(start.toISOString(), end.toISOString(), label);
        // });
        // 檔案生效日期設定 end
        // 點擊顯示修改日期輸入框及按鈕 start
        $scope.showDate = false;
        $scope.dataChangeShow = function () {
            $scope.showDate = true;
        };
        // 點擊顯示修改日期輸入框及按鈕 end
        // 表格第二欄樣式 start
        $scope.waitItemStyle = {
            'padding': '0px'
        };
        // 表格第二欄樣式 end
        // 指派對象選單 start
        $scope.designationObjectsSelect = [{
            'ObjectName': 'Chong, Luke 張立暉'
        }, {
            'ObjectName': 'Chen, Moggie 陳美玲'
        }, {
            'ObjectName': 'Chen, Moureen 陳杍宣'
        }, {
            'ObjectName': 'Chien, Teresa 簡茗芳'
        }, {
            'ObjectName': 'Fan, Moggie 范莉宣'
        }];
        // 指派對象選單 end
        $scope.designationObjectsSelectDefault = $scope.designationObjectsSelect[0];


        // 指派按鈕 start
        $scope.designation = function ($event) {
            $event.stopPropagation();
            $timeout(function () {
                $('#designationObjects').modal('show');
            }, 400);
        };
        // 指派按鈕 end
        // 指派對象OK按鈕 start
        $scope.designationOk = function () {
            $timeout(function () {
                $('#designationOk').modal('show');
            }, 400);
        };
        // 指派對象OK按鈕 end
        // 指派取消確定按鈕 start
        $scope.designationObjectsCancelOk = function () {
            $timeout(function () {
                $('#designationObjects').modal('hide');
            }, 400);
        }
        // 指派取消確定按鈕 end
        // 退單按鈕 start
        $scope.chargebackCause = function ($event, Npv) {
            $event.stopPropagation();
            $timeout(function () {
                $('#chargebackCause').modal('show');
            }, 400);
            $scope.npvTitle = Npv;
        };
        // 退單按鈕 end
        // 匯出SPV start
        $scope.exportSpv = function ($event) {
            $event.stopPropagation();
        };
        // 匯出SPV end
        // 退單確定按紐 start
        $scope.chargebackCauseOk = function () {
            $timeout(function () {
                $('#chargebackCauseOk').modal('show');
            }, 400);
        };
        // 退單確定按紐 end
        // 退單取消確定按鈕 start
        $scope.chargebackCauseCancelOk = function () {
            $timeout(function () {
                $('#chargebackCause').modal('hide');
            }, 400);
        };
        // 退單取消確定按鈕 end
        // 檔案生效日按鈕 start
        $scope.dataBecomeEffective = function () {
            $timeout(function () {
                $('#dataBecomeEffective').modal('show');
            }, 400);
        }
        // 檔案生效日按鈕 end
        // 修改檔案生效日 start
        // $scope.dataBecomeEffectiveSet = function () {
        //     $timeout(function () {
        //         $('#dataBecomeEffectiveSet').modal('show');
        //     }, 400);
        // }
        // 修改檔案生效日 end
        // 修改檔案生效日按鈕 start
        $scope.dataBecomeEffectiveSetOk = function () {
            $timeout(function () {
                $('#dataBecomeEffectiveSetOk').modal('show');
            }, 400);
        }
        // 修改檔案生效日按鈕 end
        $scope.dataBecomeEffectiveSetCancelOk = function () {
            $timeout(function () {
                // $("#dataBecomeEffectiveSet").modal('hide');
                $scope.showDate = false;
            }, 400);
        }

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