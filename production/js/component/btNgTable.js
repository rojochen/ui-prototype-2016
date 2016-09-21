define([
    'btModule'
], function(btModule) {
    'use strict';
    var app = angular.module('btModule');
    // component setting
    var btNgTable = {
            bindings: {
                items: '<'
            },
            templateUrl: '../template/btNgTable.html',
            controller: btNgTableCtrl,
            controllerAs: 'vm',
        }
        // component
    app.component('btNgTable', btNgTable);

    // controller
    btNgTableCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder'];

    function btNgTableCtrl(DTOptionsBuilder, DTColumnBuilder) {
        var vm = this;
        vm.dtOptions = DTOptionsBuilder.fromSource('../data/ngDataTable.json')
            .withPaginationType('full_numbers');
        vm.dtColumns = [
            DTColumnBuilder.newColumn('id').withTitle('ID'),
            DTColumnBuilder.newColumn('firstName').withTitle('First name'),
            DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
        ];
    }

    return app;
});