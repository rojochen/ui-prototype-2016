(function () {
	'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl: '../',
		paths: {
			pokemon: 'assets/js/app',
			btModule:'js/module/BTModule',
			btController:'js/controller/BTController'
		}
	});
	require(['pokemon','btModule','btController'], function (pokemon,btModule,btController) {
		angular.bootstrap(document, ['btModule']);
	});
})();
