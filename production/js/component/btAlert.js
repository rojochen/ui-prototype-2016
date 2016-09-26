define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module('btModule');
    var btAlert = {
        bindings: {
            alertthem: '<',
            alertshow: '<',
            alerthidetime: '<'
        },
        templateUrl: '../template/btAlert.html',
        controller: btAlertCtrl,
        controllerAs: 'vm',
        require: {

        }
    }

    app.component('btAlert', btAlert);
    btAlertCtrl.$inject = ['$timeout'];

    function btAlertCtrl($timeout) {
        var vm = this;


        vm.$onInit = function () {
            if (angular.isUndefined(vm.alertthem)) {
                vm.cssClass = 'alert-default';
            }
            if (angular.isUndefined(vm.alertshow)) {
                vm.alertshow = true;
            }

            if (!angular.isUndefined(vm.alerthidetime) && vm.alertshow == false) {
                vm.alertshow = true;
                $timeout(function () {
                    vm.alertshow = false;
                }, vm.alerthidetime);
            }

        }

        switch (vm.alertthem) {
            case 'default':
                vm.cssClass = "alert-default";
                break;
            case 'primary':
                vm.cssClass = "alert-primary";
                break;
            case 'success':
                vm.cssClass = "alert-success";
                break;
            case 'info':
                vm.cssClass = "alert-info";
                break;
            case 'warning':
                vm.cssClass = "alert-warning";
                break;
            case 'danger':
                vm.cssClass = "alert-danger";
                break;
            case 'dark':
                vm.cssClass = "alert-dark";
                break;
        }
    }
    return app;
});