define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('LOASetCtrl', ['$scope', '$timeout', '$log', '$element', 'ShoppingCartEntity', function ($scope, $timeout, $log, $element, ShoppingCartEntity) {
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

        // 退單紀錄 start
        $scope.LOASetListData = [{
            'LOASetId': '1',
            'LOASetName': 'OED Leader 派單',
            'LOASetGuid': '退單參數一',
            'LOASetParameter': ''
        }, {
            'LOASetId': '2',
            'LOASetName': 'OET Member 審單',
            'LOASetGuid': '退單參數一',
            'LOASetParameter': 'SKIP'
        }, {
            'LOASetId': '3',
            'LOASetName': 'IT Leader 派單',
            'LOASetGuid': '退單參數一',
            'LOASetParameter': 'SKIP'
        }, {
            'LOASetId': '4',
            'LOASetName': 'IT Member 審單',
            'LOASetGuid': '退單參數一',
            'LOASetParameter': ''
        }];
        // 退單紀錄 end
        // 退單方式 start
        $scope.chargebackFunction = [{
            'chargeName': '退單方式一'
        }, {
            'chargeName': '退單方式二'
        }, {
            'chargeName': '退單方式三'
        }, {
            'chargeName': '退單方式四'
        }];
        $scope.LOADefaultCharacter = $scope.chargebackFunction[0]
        // 退單方式 end


        // 指定角色 start
        $scope.LOASetCharacter = [{
            'LOASetCharacterName': 'OET Leader'
        }, {
            'LOASetCharacterName': 'OET Member'
        }, {
            'LOASetCharacterName': 'IT Leader'
        }, {
            'LOASetCharacterName': 'IT Member'
        }]
        $scope.LOADefaultCharacter = $scope.LOASetCharacter[0];
        // 指定角色 end

        // LOA表單排序 start
        $('#datatable_LOASetListData').DataTable().destroy();

        $timeout(function () {
            $('#datatable_LOASetListData').DataTable(opt);
        }, 100)
        // LOA表單排序 end
    }]);
    return app;
});