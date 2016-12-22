(function () {
	'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl: '../NPV/',
		paths: {
			pokemon: 'assets/js/app',
			btModule: 'js/module/demoModule',
			btController: 'js/controller/demoBT',
			demoCtrl: 'js/controller/demo',
			footer: 'js/component/footer',
			header: 'js/component/header',
			shoppingCartEntity: 'js/entity/ShoppingCart',
			ITParameterSetCtrl: 'js/controller/ITParameterSet',
			roleSetCtrl: 'js/controller/roleSet',
			userSetCtrl: 'js/controller/userSet'

		}
	});
	require(['pokemon', 'btModule', 'btController', 'demoCtrl', 'footer', 'header', 'shoppingCartEntity', 'ITParameterSetCtrl', 'roleSetCtrl','userSetCtrl'], function (pokemon, btModule, btController, demoCtrl, footer, header, shoppingCartEntity, ITParameterSetCtrl, roleSetCtrl,userSetCtrl) {
		angular.bootstrap(document, ['btModule']);
	});
})();