define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('excelGlutChangeCtrl', ['$scope', '$timeout', '$log', '$element', 'ShoppingCartEntity', 'pnotifyService', function ($scope, $timeout, $log, $element, ShoppingCartEntity, pnotifyService) {
        /* notify 通知訊息 begin */
        // Success
        // $scope.upDataExcelOk = function () {
        //     pnotifyService.pnotifySuccess('Success', '上傳完成！');
        //     $timeout(function () {
        //         $('#addExcel').modal('hide');
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
        /* lightbox open */
        $(document).on('hidden.bs.modal', '.modal', function () {
            $('.modal:visible').length && $(document.body).addClass('modal-open');
        });
        $(document).on('show.bs.modal', '.modal', function () {
            $('.modal:visible').css('padding-right', '0px');
        });
        /* lightbox end */
        // 確定按鈕跳窗動作
        $scope.confirmCancel = function () {
            $timeout(function () {
                $('#addExcel').modal('hide')
            }, 400)


        }
        // 取消按鈕跳窗動作
        $scope.cancel = function () {
            $timeout(function () {
                $('#addExcelCancel').modal('hide')
            }, 400)

        }
        // 匯入成功確認按鈕
        $scope.addExcelOk = function () {
            $timeout(function () {
                $('#addExcel').modal('hide')
            }, 400)

        }
    }]);
    return app;
});