define(['btModule'], function(btModule) {
    'use strict';
    var app = angular.module('btModule');
    var btAlert = {
        bindings: {
            alertthem: '<'
        },
        templateUrl: '../template/btAlert.html',
        controller: btAlertCtrl,
        controllerAs: 'vm',
        require: {

        }
    }

    app.component('btAlert', btAlert);

    function btAlertCtrl() {
        var vm = this;
        console.log(vm.alertthem);
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