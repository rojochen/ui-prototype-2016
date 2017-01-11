define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    paginationService.$inject = ['$log'];

    function paginationService($log) {
        var paginationInfo = null;
        var paginationService = {
            setInfo: function(data){
                paginationInfo = angular.copy(data);
            },
            getInfo: function(){
                return paginationInfo;
            },
            goFirst: function (id) {
                $('#'+id).triggerHandler('goFirst');
            }
        };
        return paginationService;
    }

    app.factory('paginationService', paginationService);

    return app;
});