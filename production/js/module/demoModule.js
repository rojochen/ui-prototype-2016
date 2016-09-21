define(['pokemon'], function(pokemon) {
    'use strict';
    var app = angular.module('btModule',['pokemon']);
    // 導頁路徑
    app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
				.when('/', {
					templateUrl: "../template/index.html"
				})
				.when('/grids', {
					templateUrl: '../template/grids.html'
				})
				.when('/form', {
					templateUrl: '../template/form.html'
				})
				.when('/form_advanced', {
					templateUrl: '../template/form_advanced.html'
				})
				.when('/form_layout', {
					templateUrl: '../template/form_layout.html'
				})
				.when('/form_buttons', {
					templateUrl: '../template/form_buttons.html'
				})
				.when('/glyphicons', {
					templateUrl: '../template/glyphicons.html'
				})
				.when('/icons', {
					templateUrl: '../template/icons.html'
				})
				.when('/general_elements', {
					templateUrl: '../template/general_elements.html'
				})
				.when('/switch', {
					templateUrl: '../template/switch.html'
				})
				.when('/list', {
					templateUrl: '../template/list.html'
				})
				.when('/gridslider', {
					templateUrl: '../template/gridslider.html'
				})
				.when('/panel', {
					templateUrl: '../template/panel.html'
				})
				.when('/dragDrop', {
					templateUrl: '../template/dragDrop.html'
				})
				.when('/blockUI', {
					templateUrl: '../template/blockUI.html'
				})
				.when('/echarts', {
					templateUrl: '../template/echarts.html'
				})
				.when('/echarts2', {
					templateUrl: '../template/echarts2.html'
				})
				.when('/tables', {
					templateUrl: '../template/tables.html'
				})
				.when('/tables_dynamic', {
					templateUrl: '../template/tables_dynamic.html'
				})
				.when('/fixed_sidebar', {
					templateUrl: '../template/fixed_sidebar.html'
				})
				.when('/fixed_footer', {
					templateUrl: '../template/fixed_footer.html'
				})
				.when('/notifications', {
					templateUrl: '../template/notifications.html'
				})
				.when('/alert', {
					templateUrl: '../template/alert.html'
				})
				.when('/projects', {
					templateUrl: '../template/projects.html'
				})
				.when('/level2', {
					templateUrl: '../template/level2.html'
				})
				.when('/component', {
					templateUrl: '../template/component.html'
				})
				.when('/tables_dynamic2', {
					templateUrl: '../template/tables_dynamic2.html'
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);

    return app;
});