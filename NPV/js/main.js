(function() {
	'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl: '../NPV/',
		paths: {
			pokemon: 'assets/js/app',
			btModule: 'js/module/demoModule',
			btController: 'js/controller/demoBt',
			footer: 'js/component/footer',
			header: 'js/component/header',
			btPortlet: 'js/component/btPortlet',
		}
	});	
	require(['pokemon', 'btModule', 'btController', 'footer','header', 'btPortlet'], function(pokemon, btModule, btController, footer, header, btPortlet) {

		angular.bootstrap(document, ['btModule']);
	});
})();