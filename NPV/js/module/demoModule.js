define(['pokemon'], function (pokemon) {
	'use strict';
	var app = angular.module('btModule', ['pokemon']);
	// 導頁路徑
	app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/', {
				templateUrl: "../NPV/views/demo_1.html"
			})
			.when('/try', {
				templateUrl: "../NPV/views/try.html"
			})
			.when('/roleSettings:id', {
				templateUrl: "../NPV/views/roleSettings.html"
			})
			.when('/ITParameterSetting:id', {
				templateUrl: "../NPV/views/ITParameterSetting.html"
			})

		.otherwise({
			redirectTo: '/'
		});
	}]);

	return app;
});