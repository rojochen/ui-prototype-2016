(function() {
	'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl: '../NPV/',
		paths: {
			pokemon: 'assets/js/app',
			btModule: 'js/module/demoModule',
			btController: 'js/controller/demoBt',
			demoCtrl: 'js/controller/demo',
			footer: 'js/component/footer',
			header: 'js/component/header',
			shoppingCartEntity : 'js/entity/ShoppingCart'
		}
	});	
	require(['pokemon', 'btModule', 'btController', 'demoCtrl', 'footer','header','shoppingCartEntity'], function(pokemon, btModule, btController, demoCtrl, footer, header,shoppingCartEntity) {
		angular.bootstrap(document, ['btModule']);
	});
})();