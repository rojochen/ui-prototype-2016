define(['btModule'], function (btModule) {
	'use strict';
	var app = angular.module('btModule');
	var btAlert = {
		bindings: {
			alertthem: '@',
			autohide: '<',
			alerthidetime: '<'
		},
		templateUrl: '../template/btAlert.html',
		controller: btAlertCtrl,
		controllerAs: 'vm',
		transclude: true,
		require: {

		}
	}

	app.component('btAlert', btAlert);
	btAlertCtrl.$inject = ['$timeout'];

	function btAlertCtrl($timeout) {
		var vm = this;

		vm.$onInit = function () {
			if (angular.isUndefined(vm.alertthem)) {
				vm.cssClass = 'alert-default';
			}
			if (angular.isUndefined(vm.autohide)) {
				vm.autohide = true;
			}
			if (!angular.isUndefined(vm.alerthidetime) && vm.autohide == true) {
				vm.hide = false;
				$timeout(function () {
					vm.hide = true;
				}, vm.alerthidetime);
			} else if (angular.isUndefined(vm.alerthidetime) && vm.autohide == true) {
				vm.hide = false;
				$timeout(function () {
					vm.hide = true;
				}, 3000);
			}

			switch (vm.alertthem) {
				case 'default':
					vm.cssClass = "alert-default";
					break;
				case 'primary':
					vm.cssClass = "alert-primary";
					break;
				case 'success':
					vm.cssClass = "alert-success";
					break;
				case 'info':
					vm.cssClass = "alert-info";
					break;
				case 'warning':
					vm.cssClass = "alert-warning";
					break;
				case 'danger':
					vm.cssClass = "alert-danger";
					break;
				case 'dark':
					vm.cssClass = "alert-dark";
					break;
			}
		}
	}
	return app;
});