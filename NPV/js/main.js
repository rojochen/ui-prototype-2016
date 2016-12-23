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
			userSetCtrl: 'js/controller/userSet',
			groupsSetCtrl: 'js/controller/groupsSet',
			marginSetCtrl:'js/controller/marginSet'

		}
	});
	require(['pokemon', 'btModule', 'btController', 'demoCtrl', 'footer', 'header', 'shoppingCartEntity', 'ITParameterSetCtrl', 'roleSetCtrl', 'userSetCtrl', 'groupsSetCtrl'], function (pokemon, btModule, btController, demoCtrl, footer, header, shoppingCartEntity, ITParameterSetCtrl, roleSetCtrl, userSetCtrl, groupsSetCtrl) {
		angular.bootstrap(document, ['btModule']);
	});
})();