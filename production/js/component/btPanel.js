define(['btModule'], function(btModule) {
    'use strict';
    var app = angular.module('btModule');

    var btPanel = {
        bindings: {
            panelthem: '<'
        },
        templateUrl: '../template/btPanel.html',
        controller: btPanelCtrl,
        controllerAs: 'vm',
        require: {

        }
    }

    app.component('btPanel', btPanel);

    function btPanelCtrl() {
        var vm = this;
        console.log(vm.panelthem);
        vm.class = vm.panelthem;
        switch (vm.panelthem) {
            case vm.panelthem:
                vm.name = "Default";
                vm.class = 'panel-Default';
                break;
            case vm.panelthem:
                vm.name = "primary";
                vm.class = 'panel-primary';
                break;
            case vm.panelthem:
                vm.name = "success";
                vm.class = 'panel-success';
                break;
            case vm.panelthem:
                vm.name = "info";
                vm.class = 'panel-info';
                break;
            case vm.panelthem:
                vm.name = "warning";
                vm.class = 'panel-warning';
                break;
            case vm.panelthem:
                vm.name = "dark";
                vm.class = 'panel-dark';
                break;
            case vm.panelthem:
                vm.name = "danger";
                vm.class = 'panel-danger';
                break;
        }
    }
});