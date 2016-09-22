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
    btNgTableCtrl.$inject = ['DTOptionsBuilder', 'DTColumnDefBuilder', '$resource'];

    function btNgTableCtrl($resource, DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;
        vm.persons = [];
        vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
        vm.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0),
            DTColumnDefBuilder.newColumnDef(1).notVisible(),
            DTColumnDefBuilder.newColumnDef(2).notSortable()
        ];
        $resource(vm.link).query().$promise.then(function(persons) {
            vm.items = persons;
        });
    }

    return app;
});