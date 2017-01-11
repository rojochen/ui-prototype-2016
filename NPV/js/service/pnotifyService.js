define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    pnotifyService.$inject = ['$log'];

    function pnotifyService($log) {
        var paginationInfo = null;
        var pnotifyService = {
            pnotifySuccess: function (title ,content) {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'success',
                    styling: 'bootstrap3'
                });
            },
            pnotifyInfo: function (title ,content) {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'info',
                    styling: 'bootstrap3'
                });
            },
            pnotifyError: function (title ,content) {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'error',
                    styling: 'bootstrap3'
                });
            },
            pnotifyWarn: function (title ,content) {
                new PNotify({
                    title: title,
                    text: content,
                    type: 'warn',
                    styling: 'bootstrap3'
                });
            },
            pnotifyDark: function (title ,content) {
                new PNotify({
                    title: title,
                    text: content,
                    styling: 'bootstrap3',
                    addclass: 'dark'
                });
            }
        };
        return pnotifyService;
    }

    app.factory('pnotifyService', pnotifyService);

    return app;
});