(function() {
	'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl: '../',
		paths: {
			pokemon: 'assets/js/app',
			btModule: 'js/module/BTModule',
			btController: 'js/controller/BTController',
			joeController: 'js/controller/JoeController',
			louisController: 'js/controller/LouisController'
		}
	});

	require(['pokemon', 'btModule', 'btController', 'louisController'], function(pokemon, btModule, btController, louisController) {
		angular.bootstrap(document, ['btModule']);
	});
})();