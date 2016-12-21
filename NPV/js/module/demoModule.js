define(['pokemon'], function (pokemon) {
	'use strict';
	var app = angular.module('btModule', ['pokemon']);
	// 導頁路徑
	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: "../NPV/views/demo_1.html"
			})
			.when('/try', {
				templateUrl: "../NPV/views/try.html"
			})
			.when('/:id', {
				templateUrl: '../NPV/views/demo_2.html',

			})

		.otherwise({
			redirectTo: '/'
		});
	}]);

	return app;
});