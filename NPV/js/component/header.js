define([
    'btModule',
], function(btModule) {
    'use strict';
    var app = angular.module("btModule");

    var headerComponent = {
        templateUrl: '../NPV/js/component/template/top-menu.html',
        controller: headerComponentCtrl,
        controllerAs: 'vm',
        bindings: {
            
        }
    };
    app.component('btHeader', headerComponent);
    
    function headerComponentCtrl(){
        var vm = this;
    };

    return app;
});