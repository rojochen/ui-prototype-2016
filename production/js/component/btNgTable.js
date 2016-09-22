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
    btNgTableCtrl.$inject = ['$resource','DTOptionsBuilder', 'DTColumnDefBuilder'];

    function btNgTableCtrl($resource, DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;
        vm.persons = [];
        
        $resource(vm.link).query().$promise.then(function(persons) {
            vm.items = persons;
        });
    }

    return app;
});