define(['btModule'

], function (btModule) {
    'use strict';
    var app = angular.module('btModule');
    app.directive('button', function () {
        return {
            template: '<button>hello</button>'
        };
    });
});