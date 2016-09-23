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
    }
    return app;
});