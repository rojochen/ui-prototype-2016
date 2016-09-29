define(['btModule'], function (btModule) {
	'use strict';
	var app = angular.module('btModule');

	var btPanel = {
		bindings: {
			panelthem: '@',
			titlename: '@'
		},
		templateUrl: '../template/btPanel.html',
		controller: btPanelCtrl,
		controllerAs: 'vm',
		transclude: true,
		require: {

		}
	}

	app.component('btPanel', btPanel);

	function btPanelCtrl() {
		var vm = this;
		console.log(vm.panelthem);
		vm.class = vm.panelthem;
		switch (vm.panelthem) {
			case 'default':
				// vm.name = "default";
				vm.class = 'panel-default';
				break;
			case 'primary':
				// vm.name = "primary";
				vm.class = 'panel-primary';
				break;
			case 'success':
				// vm.name = "success";
				vm.class = 'panel-success';
				break;
			case 'info':
				// vm.name = "info";
				vm.class = 'panel-info';
				break;
			case 'warning':
				// vm.name = "warning";
				vm.class = 'panel-warning';
				break;
			case 'dark':
				// vm.name = "dark";
				vm.class = 'panel-dark';
				break;
			case 'danger':
				// vm.name = "danger";
				vm.class = 'panel-danger';
				break;
		}
	}
});