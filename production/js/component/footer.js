define([
    'btModule',
], function(btModule) {
    'use strict';
    var app = angular.module("btModule");

    var footerComponent = {
        templateUrl: '../template/footer.html',
        controller: footerComponentCtrl,
        controllerAs: 'vm',
        bindings: {
            name: '@'
        }
    };
    app.component('btFooter', footerComponent);

    function footerComponentCtrl(){
        var vm = this;
        // vm.name = "New Prototype - 2010";
    };

    return app;
});