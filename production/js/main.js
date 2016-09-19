(function () {
	'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl: '../',
		paths: {
			pokemon: 'assets/js/app',
			btModule: 'js/module/demo/btModule',
			btController: 'js/controller/demo/btController',
			joeController: 'js/controller/demo/joe',
			louisController: 'js/controller/LouisController'
		}
	});

	require(['pokemon','btModule','btController','louisController', 'joeController'], function (pokemon,btModule,btController,louisController, joeController) {
		angular.bootstrap(document, ['btModule']);
	});
})();
