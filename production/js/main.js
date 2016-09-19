(function() {
	'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl: '../',
		paths: {
			pokemon: 'assets/js/app',
			btModule: 'js/module/demoModule',
			btController: 'js/controller/demoBt',
			joeController: 'js/controller/demoJoe',
			louisController: 'js/controller/demoLouis'
		}
	});
	require(['pokemon', 'btModule', 'btController', 'louisController', 'joeController'], function(pokemon, btModule, btController, louisController, joeController) {
		angular.bootstrap(document, ['btModule']);
	});
})();