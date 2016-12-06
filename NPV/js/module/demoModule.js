define(['pokemon'], function(pokemon) {
    'use strict';
    var app = angular.module('btModule',['pokemon']);
    // 導頁路徑
    app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
				.when('/', {
					templateUrl: "../NPV/views/index.html"
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);

    return app;
});