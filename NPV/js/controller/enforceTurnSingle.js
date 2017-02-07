define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('enforceTurnSingleCtrl', ['$scope', '$timeout', '$log', '$element', 'ShoppingCartEntity', 'pnotifyService', function ($scope, $timeout, $log, $element, shoppingCartEntity, pnotifyService) {


        /* notify 通知訊息 begin */
        // Success
        $scope.turnSingleDoubleOk = function () {
            pnotifyService.pnotifySuccess('Success', '轉單完成！');
            $timeout(function () {
                $('#turnSingleObjects').modal('hide');
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
        // 轉單按鈕 and 下方清單顯示 start
        $scope.isShow = false;
        $scope.isShowTable = false;
        $scope.showTurnSingle = function () {
            $scope.isShow = true;
            $scope.isShowTable = true;
        }
        // 轉單按鈕 and 下方清單顯示 end
        // 轉單下方清單Data start
        $scope.enforceTurnSingleData = [{
            'enforceTurnSingleNo': 'enforceTurnSingle1',
            'enforceTurnSingleNpv': '20161022201',
            'enforceTurnSingleType1': '促代',
            'enforceTurnSingleType2': 'N/A',
            'enforceTurnSingleTime': '2016/10/21 20:00',
            'enforceTurnSingleStatus': '草稿',
            'enforceTurnSinglePM': 'yuind'
        }, {
            'enforceTurnSingleNo': 'enforceTurnSingle2',
            'enforceTurnSingleNpv': '20161022202',
            'enforceTurnSingleType1': '促代-4G/3G',
            'enforceTurnSingleType2': 'Single(8)',
            'enforceTurnSingleTime': '2016/10/22 12:00',
            'enforceTurnSingleStatus': '代審核',
            'enforceTurnSinglePM': 'yuind'
        }, {
            'enforceTurnSingleNo': 'enforceTurnSingle3',
            'enforceTurnSingleNpv': '20161022203',
            'enforceTurnSingleType1': '促代-3G',
            'enforceTurnSingleType2': 'N/A',
            'enforceTurnSingleTime': '2016/10/11 09:00',
            'enforceTurnSingleStatus': '代審核',
            'enforceTurnSinglePM': 'yuind'
        }, {
            'enforceTurnSingleNo': 'enforceTurnSingle4',
            'enforceTurnSingleNpv': '20161022204',
            'enforceTurnSingleType1': '促代-4G',
            'enforceTurnSingleType2': 'Single(1)',
            'enforceTurnSingleTime': '2016/10/30 15:00',
            'enforceTurnSingleStatus': '草稿',
            'enforceTurnSinglePM': 'yuind'
        }, {
            'enforceTurnSingleNo': 'enforceTurnSingle5',
            'enforceTurnSingleNpv': '20161022205',
            'enforceTurnSingleType1': '贈品加碼活動',
            'enforceTurnSingleType2': 'N/A',
            'enforceTurnSingleTime': '2016/11/02 09:34',
            'enforceTurnSingleStatus': '草稿',
            'enforceTurnSinglePM': 'yuind'
        }];
        // 轉單下方清單Data end
        // 轉單下方清單Data單向詳細start
        $scope.enforceTurnSingleItemDetail = [{
            'ItemDetailNo': '1',
            'ItemDetailCode': 'JER2JFLAWK-KF3D4',
            'ItemDetailType': 'Single',
            'ItemDetailName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000'
        }, {
            'ItemDetailNo': '2',
            'ItemDetailCode': 'FSDF2FSD-KF3D4',
            'ItemDetailType': 'Single',
            'ItemDetailName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000'
        }, {
            'ItemDetailNo': '3',
            'ItemDetailCode': 'JKLYUJ4E5-KF3D4',
            'ItemDetailType': 'Single',
            'ItemDetailName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000'
        }, {
            'ItemDetailNo': '4',
            'ItemDetailCode': 'JER2JFLAWK-KF3D4',
            'ItemDetailType': 'Single',
            'ItemDetailName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000'
        }, {
            'ItemDetailNo': '5',
            'ItemDetailCode': 'HASLDFKE3-KF3D4',
            'ItemDetailType': 'Single',
            'ItemDetailName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000'
        }, {
            'ItemDetailNo': '6',
            'ItemDetailCode': 'RHLE24HL44-KF3D4',
            'ItemDetailType': 'Single',
            'ItemDetailName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000'
        }, {
            'ItemDetailNo': '7',
            'ItemDetailCode': '4G44RT66-KF3D4',
            'ItemDetailType': 'Single',
            'ItemDetailName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000'
        }, {
            'ItemDetailNo': '8',
            'ItemDetailCode': 'DFGHR3SDF-KF3D4',
            'ItemDetailType': 'Single',
            'ItemDetailName': '4G續約_企業98_MVPN門市_4G新絕配1399_限24手機案-預繳12000'
        }];
        // 轉單下方清單Data單向詳細end

        // 轉單對象選單 start
        $scope.turnSingleObjectsSelect = [{
            'ObjectName': 'Chong, Luke 張立暉',
            'id': '1'
        }, {
            'ObjectName': 'Chen, Moggie 陳美玲',
            'id': '2'
        }, {
            'ObjectName': 'Chen, Moureen 陳杍宣',
            'id': '3'
        }, {
            'ObjectName': 'Chien, Teresa 簡茗芳',
            'id': '4'
        }, {
            'ObjectName': 'Fan, Moggie 范莉宣',
            'id': '5'
        }];
        // 轉單對象選單 end
        $scope.turnSingleObjectsSelectDefault = $scope.turnSingleObjectsSelect[0];

        // 已停用帳號 start
        $scope.disableNumber = [{
            'number': 'asdfdd',
            'id': '1'
        }, {
            'number': 'gggrgr',
            'id': '2'
        }, {
            'number': 'fasdf3r',
            'id': '3'
        }, {
            'number': '42fsdf',
            'id': '4'
        }, {
            'number': 'hfghj44',
            'id': '5'
        }];
        // 已停用帳號 end
        // 已停用帳號預設 start
        $scope.disableNumberDefault = $scope.disableNumber[0];
        // 已停用帳號預設 end
        // 轉單按鈕 start
        $scope.turnSingleObjects = function () {
            $timeout(function () {
                $('#turnSingleObjects').modal('show');
            }, 400);
        }
        // 轉單按鈕 end
        // 輸入轉單確定按鈕 start
        $scope.turnSingleOk = function () {
            $timeout(function () {
                $('#turnSingleOk').modal('show');
            }, 400);
        }
        // 輸入轉單確定按鈕 end
        // 取消、重置 start
        $scope.closeAll = function () {
            $timeout(function () {
                $('#turnSingleObjects:visible').length && $('#turnSingleObjects').modal('hide');
            }, 400);
        }
        //取消、重置 end
        // 匯出SPV start
        $scope.exportSpv = function ($event) {
            $event.stopPropagation();
        }
        // 匯出SPV end
        /* lightbox open */
        $(document).on('hidden.bs.modal', '.modal', function () {
            $('.modal:visible').length && $(document.body).addClass('modal-open');
        });
        $(document).on('show.bs.modal', '.modal', function () {
            $('.modal:visible').css('padding-right', '0px');
        });
        /* lightbox end */


        // 表格第二欄樣式 start
        $scope.enforceItemStyle = {
            'padding': '0px'
        };
        // 表格第二欄樣式 end

        $('#datatable_enforceTurnSingleData').DataTable().destroy();

        $timeout(function () {
            $('#datatable_enforceTurnSingleData').DataTable(opt);
        }, 100)

        $('#datatable_enforceTurnSingleItemDetail').DataTable().destroy();

        $timeout(function () {
            $('#datatable_enforceTurnSingleItemDetail').DataTable(opt);
        }, 100)

    }]);
    return app;
});