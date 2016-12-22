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
			ITParameterSettingCtrl: 'js/controller/ITParameterSetting',
			roleSetCtrl: 'js/controller/roleSet'
		}
	});
	require(['pokemon', 'btModule', 'btController', 'demoCtrl', 'footer', 'header', 'shoppingCartEntity', 'ITParameterSettingCtrl', 'roleSetCtrl'], function (pokemon, btModule, btController, demoCtrl, footer, header, shoppingCartEntity, ITParameterSettingCtrl, roleSetCtrl) {
		angular.bootstrap(document, ['btModule']);
	});
})();