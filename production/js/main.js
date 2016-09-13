(function () {
	'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl: '../',
		paths: {
			pokemon: 'assets/js/app',
			btModule:'js/module/btModule',
			btController:'js/controller/btController'
		}
	});
	require(['pokemon','btController'], function (pokemon,btController) {
		angular.bootstrap(document, ['btModule']);
	});
})();
