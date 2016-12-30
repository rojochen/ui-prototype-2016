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
			floatWindows: 'js/component/floatWindows',
			shoppingCartEntity: 'js/entity/ShoppingCart',
			ITParameterSetCtrl: 'js/controller/ITParameterSet',
			roleSetCtrl: 'js/controller/roleSet',
			userSetCtrl: 'js/controller/userSet',
			groupsSetCtrl: 'js/controller/groupsSet',
			marginSetCtrl: 'js/controller/marginSet',
			downtimeProbabilitySetCtrl: 'js/controller/downtimeProbabilitySet',
			ARPBSetCtrl: 'js/controller/ARPBSet',
			renewalDateCtrl: 'js/controller/renewalDate',
			changeLimitCtrl: 'js/controller/changeLimit',
			salesSetCtrl: 'js/controller/salesSet',
			systemSetCtrl: 'js/controller/systemSet',
			classificationSetCtrl: 'js/controller/classificationSet',
			activityClassificationCtrl: 'js/controller/activityClassification',
			activityTypeCtrl: 'js/controller/activityType',
			functionPermissionsSetCtrl: 'js/controller/functionPermissionsSet'

		}
	});
	require(['pokemon', 'btModule', 'btController', 'demoCtrl', 'footer', 'header', 'floatWindows', 'shoppingCartEntity', 'ITParameterSetCtrl', 'roleSetCtrl', 'userSetCtrl', 'groupsSetCtrl', 'marginSetCtrl', 'downtimeProbabilitySetCtrl', 'ARPBSetCtrl', 'renewalDateCtrl', 'changeLimitCtrl', 'salesSetCtrl', 'systemSetCtrl', 'classificationSetCtrl', 'activityClassificationCtrl', 'activityTypeCtrl', 'functionPermissionsSetCtrl'], function (pokemon, btModule, btController, demoCtrl, footer, header, floatWindows, shoppingCartEntity, ITParameterSetCtrl, roleSetCtrl, userSetCtrl, groupsSetCtrl, marginSetCtrl, downtimeProbabilitySetCtrl, ARPBSetCtrl, renewalDateCtrl, changeLimitCtrl, salesSetCtrl, systemSetCtrl, classificationCtrl, activityClassificationCtrl, activityTypeCtrl, functionPermissionsSetCtrl) {
		angular.bootstrap(document, ['btModule']);
	});
})();