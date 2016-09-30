define([
    'btModule'
], function(btModule) {
    'use strict';
    var app = angular.module('btModule');
    // component setting
    var btNgTable = {
            bindings: {
                link: '<'
            },
            templateUrl: '../template/btNgTable.html',
            controller: btNgTableCtrl,
            controllerAs: 'vm',
        }
        // component
    app.component('btNgTable', btNgTable);

    // controller
    btNgTableCtrl.$inject = [];

    function btNgTableCtrl() {
        var vm = this;
        console.log(vm.link);
       vm.item = vm.link;
    }

    return app;
});