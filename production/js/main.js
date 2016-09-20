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
			louisController: 'js/controller/demoLouis',
			demoComponent:'js/controller/demoComponent'
		}
	});
	require(['pokemon', 'btModule', 'btController', 'louisController', 'joeController','demoComponent'], function(pokemon, btModule, btController, louisController, joeController,demoComponent) {
		angular.bootstrap(document, ['btModule']);
	});
})();