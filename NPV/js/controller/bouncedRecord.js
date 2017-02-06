define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('bouncedRecordCtrl', ['$scope', '$timeout', '$log', '$element', 'ShoppingCartEntity', 'pnotifyService', function ($scope, $timeout, $log, $element, shoppingCartEntity, pnotifyService) {
        /* notify 通知訊息 begin */
        // Success
        // $scope.pnotifyAddSuccess = function () {
        //     pnotifyService.pnotifySuccess('Success', '新增完成！');
        //     $timeout(function () {
        //         $('#addComplete').modal('hide');
        //     }, 400);
        // }

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
            $("element.style").css("padding-right", "0");
        });
        /* lightbox end */

        // 退單紀錄 start
        $scope.bouncedRecordListData = [{
            'bouncedId': 'list1',
            'bouncedNpv': '20161022201',
            'bouncedType1': '促代',
            'bouncedType2': 'N/A',
            'bouncedTime': '2016/10/21 20:00',
            'bouncedPM': 'yuind',
            'bouncedStatus': '代審核',
            'bouncedDesignate': '核可'
        }, {
            'bouncedId': 'list2',
            'bouncedNpv': '20161022202',
            'bouncedType1': '促代-4G/3G',
            'bouncedType2': 'Single(8)',
            'bouncedTime': '2016/09/11 12:00',
            'bouncedPM': 'yuind',
            'bouncedStatus': '代審核',
            'bouncedDesignate': '指派'
        }, {
            'bouncedId': 'list3',
            'bouncedNpv': '20161022203',
            'bouncedType1': '促代-3G',
            'bouncedType2': 'N/A',
            'bouncedTime': '2016/10/01 10:00',
            'bouncedPM': 'yuind',
            'bouncedStatus': '代審核',
            'bouncedDesignate': '核可'
        }, {
            'bouncedId': 'list4',
            'bouncedNpv': '20161022204',
            'bouncedType1': '促代-3G',
            'bouncedType2': 'N/A',
            'bouncedTime': '2016/10/21 20:00',
            'bouncedPM': 'yuind',
            'bouncedStatus': '代審核',
            'bouncedDesignate': '核可'
        }, {
            'bouncedId': 'list5',
            'bouncedNpv': '20161022205',
            'bouncedType1': '促代-3G',
            'bouncedType2': 'N/A',
            'bouncedTime': '2016/10/21 20:00',
            'bouncedPM': 'yuind',
            'bouncedStatus': '代審核',
            'bouncedDesignate': '核可'
        }, {
            'bouncedId': 'list6',
            'bouncedNpv': '20161022206',
            'bouncedType1': '促代-3G',
            'bouncedType2': 'N/A',
            'bouncedTime': '2016/10/21 20:00',
            'bouncedPM': 'yuind',
            'bouncedStatus': '代審核',
            'bouncedDesignate': '核可'
        }, {
            'bouncedId': 'list7',
            'bouncedNpv': '20161022207',
            'bouncedType1': '促代-3G',
            'bouncedType2': 'N/A',
            'bouncedTime': '2016/10/21 20:00',
            'bouncedPM': 'yuind',
            'bouncedStatus': '代審核',
            'bouncedDesignate': '核可'
        }];
        // 退單紀錄 end
        // NPV單號詳細 start
        $scope.bouncedRecordItemData = [{
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


        // 表格第二欄樣式 start
        $scope.waitItemStyle = {
            'padding': '0px'
        };
        // 表格第二欄樣式 end

        // 購物車顯示 start
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
        // 購物車顯示 end




        // 退件紀錄 start
        $('#datatable_bouncedRecordListData').DataTable().destroy();

        $timeout(function () {
            $('#datatable_bouncedRecordListData').DataTable(opt);
        }, 100)
        // 退件紀錄 end
        // 退件紀錄單筆表單 start
        $('#datatable_bouncedRecordItemData').DataTable().destroy();

        $timeout(function () {
            $('#datatable_bouncedRecordItemData').DataTable(opt);
        }, 100)
        // 退件紀錄單筆表單 end
    }]);
    return app;
});