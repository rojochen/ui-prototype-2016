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
			functionPermissionsSetCtrl: 'js/controller/functionPermissionsSet',
			activityGroupCtrl: 'js/controller/activityGroup',
			numberTypeCtrl: 'js/controller/numberType',
			promotingGenerationTypeCtrl: 'js/controller/promotingGenerationType',
			classificationOfferSetCtrl: 'js/controller/classificationOfferSet',
			agreementAddCtrl: 'js/controller/agreementAdd',
			suitableTargetCtrl: 'js/controller/suitableTarget',
			giftActivityTypeCtrl: 'js/controller/giftActivityType',
			offerMutexSetCtrl: 'js/controller/offerMutexSet',
			pnotifyService: 'js/service/pnotifyService',
			discountConditionsCtrl: 'js/controller/discountConditions',
			giftActivityItemCtrl: 'js/controller/giftActivityItem',
			activemenuServiceCtrl: 'js/controller/activemenuService',
			tableQueryCtrl: 'js/controller/tableQuery',
			importDeviceCtrl: 'js/controller/importDevice',
			exportTableXMLCtrl: 'js/controller/exportTableXML',
			aPasteBackupCtrl: 'js/controller/aPasteBackup',
			excelGlutChangeCtrl: 'js/controller/excelGlutChange',
			conversionListCtrl: 'js/controller/conversionList',
			multiEditServiceCtrl: 'js/controller/multiEditService',
			alreadyDealCtrl: 'js/controller/alreadyDeal',
			npvStatusQueryCtrl: 'js/controller/npvStatusQuery',
			confirmBillCtrl: 'js/controller/confirmBill',
			demoYvonneCtrl: 'js/controller/demoYvonne'
		}
	});
	require(['pokemon', 'btModule', 'btController', 'demoCtrl', 'footer', 'header', 'floatWindows', 'shoppingCartEntity', 'ITParameterSetCtrl', 'roleSetCtrl', 'userSetCtrl', 'groupsSetCtrl', 'marginSetCtrl', 'downtimeProbabilitySetCtrl', 'ARPBSetCtrl', 'renewalDateCtrl', 'changeLimitCtrl', 'salesSetCtrl', 'systemSetCtrl', 'classificationSetCtrl', 'activityClassificationCtrl', 'activityTypeCtrl', 'functionPermissionsSetCtrl', 'activityGroupCtrl', 'numberTypeCtrl', 'promotingGenerationTypeCtrl', 'classificationOfferSetCtrl', 'agreementAddCtrl', 'suitableTargetCtrl', 'giftActivityTypeCtrl', 'offerMutexSetCtrl', 'pnotifyService', 'discountConditionsCtrl', 'giftActivityItemCtrl', 'activemenuServiceCtrl', 'tableQueryCtrl', 'importDeviceCtrl', 'exportTableXMLCtrl', 'aPasteBackupCtrl', 'excelGlutChangeCtrl', 'conversionListCtrl', 'multiEditServiceCtrl', 'alreadyDealCtrl', 'demoYvonneCtrl', 'npvStatusQueryCtrl', 'confirmBillCtrl'], function (pokemon, btModule, btController, demoCtrl, footer, header, floatWindows, shoppingCartEntity, ITParameterSetCtrl, roleSetCtrl, userSetCtrl, groupsSetCtrl, marginSetCtrl, downtimeProbabilitySetCtrl, ARPBSetCtrl, renewalDateCtrl, changeLimitCtrl, salesSetCtrl, systemSetCtrl, classificationCtrl, activityClassificationCtrl, activityTypeCtrl, functionPermissionsSetCtrl, activityGroupCtrl, numberTypeCtrl, promotingGenerationTypeCtrl, classificationOfferSetCtrl, agreementAddCtrl, suitableTargetCtrl, giftActivityTypeCtrl, offerMutexSetCtrl, pnotifyService, discountConditionsCtrl, giftActivityItemCtrl, activemenuServiceCtrl, tableQueryCtrl, importDeviceCtrl, exportTableXMLCtrl, aPasteBackupCtrl, excelGlutChangeCtrl, conversionListCtrl, multiEditServiceCtrl, alreadyDealCtrl, demoYvonneCtrl, npvStatusQueryCtrl, confirmBillCtrl) {
		angular.bootstrap(document, ['btModule']);
	});
})();