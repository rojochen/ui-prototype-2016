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
			.when('/roleSet', {
				templateUrl: "../NPV/views/roleSet.html"
			})
			.when('/userSet', {
				templateUrl: "../NPV/views/userSet.html"
			})
			.when('/groupsSet', {
				templateUrl: "../NPV/views/groupsSet.html"
			})
			.when('/ITParameterSet', {
				templateUrl: "../NPV/views/ITParameterSet.html"
			})
			.when('/marginSet', {
				templateUrl: "../NPV/views/marginSet.html"
			})
			.when('/downtimeProbabilitySet', {
				templateUrl: "../NPV/views/downtimeProbabilitySet.html"
			})
			.when('/ARPBSet', {
				templateUrl: "../NPV/views/ARPBSet.html"
			})
			.when('/renewalDate', {
				templateUrl: "../NPV/views/renewalDate.html"
			})
			.when('/changeLimit', {
				templateUrl: "../NPV/views/changeLimit.html"
			})
			.when('/salesSet', {
				templateUrl: "../NPV/views/salesSet.html"
			})
			.when('/systemSet', {
				templateUrl: "../NPV/views/systemSet.html"
			})
			.when('/classificationSet', {
				templateUrl: "../NPV/views/classificationSet.html"
			})
			.when('/activityClassification', {
				templateUrl: "../NPV/views/activityClassification.html"
			})
			.when('/activityType', {
				templateUrl: "../NPV/views/activityType.html"
			})
			.when('/functionPermissionsSet', {
				templateUrl: "../NPV/views/functionPermissionsSet.html"
			})
			.when('/activityGroup', {
				templateUrl: "../NPV/views/activityGroup.html"
			})
			.when('/numberType', {
				templateUrl: "../NPV/views/numberType.html"
			})
			.when('/promotingGenerationType', {
				templateUrl: "../NPV/views/promotingGenerationType.html"
			})





			.otherwise({
				redirectTo: '/'
			});
	}]);

	return app;
});