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
			.when('/roleSet:id', {
				templateUrl: "../NPV/views/roleSet.html"
			})
			.when('/userSet:id', {
				templateUrl: "../NPV/views/userSet.html"
			})
			.when('/groupsSet:id', {
				templateUrl: "../NPV/views/groupsSet.html"
			})
			.when('/ITParameterSet:id', {
				templateUrl: "../NPV/views/ITParameterSet.html"
			})
			.when('/marginSet:id', {
				templateUrl: "../NPV/views/marginSet.html"
			})
			.when('/downtimeProbabilitySet:id', {
				templateUrl: "../NPV/views/downtimeProbabilitySet.html"
			})
			.when('/ARPBSet:id', {
				templateUrl: "../NPV/views/ARPBSet.html"
			})
			.when('/renewalDate:id', {
				templateUrl: "../NPV/views/renewalDate.html"
			})
			.when('/changeLimit:id', {
				templateUrl: "../NPV/views/changeLimit.html"
			})
			.when('/salesSet:id', {
				templateUrl: "../NPV/views/salesSet.html"
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);

	return app;
});