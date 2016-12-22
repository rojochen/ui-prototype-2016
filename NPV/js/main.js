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
			useSetCtrl: 'js/controller/useSet'

		}
	});
	require(['pokemon', 'btModule', 'btController', 'demoCtrl', 'footer', 'header', 'shoppingCartEntity', 'ITParameterSetCtrl', 'roleSetCtrl','useSetCtrl'], function (pokemon, btModule, btController, demoCtrl, footer, header, shoppingCartEntity, ITParameterSetCtrl, roleSetCtrl,useSetCtrl) {
		angular.bootstrap(document, ['btModule']);
	});
})();