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
			yvonneController: 'js/controller/demoYvonne',
			indexComponent: 'js/component/indexComponent',
			demoComponent: 'js/component/demoComponent',
			indexComponent_2: 'js/component/indexComponent-2',
			footer: 'js/component/footer',
			header: 'js/component/header',
			btPortlet: 'js/component/btPortlet',
			btCheckList:'js/component/btCheckList',
			btNgTable:'js/component/btNgTable',
			btPanel:'js/component/btPanel',
			btAlert:'js/component/btAlert',
			layerjs: 'js/lib/layer/src/layer'
		}
	});	
	require(['pokemon', 'btModule', 'btController', 'louisController', 'joeController', 'yvonneController', 'indexComponent','demoComponent', 'indexComponent_2','footer','header','btPortlet','btCheckList','btNgTable','btPanel','btAlert', 'layerjs'], function(pokemon, btModule, btController, louisController, joeController, yvonneController, indexComponent,demoComponent, indexComponent_2, footer, header, btPortlet, btCheckList,btNgTable,btPanel,btAlert, layerjs) {

		angular.bootstrap(document, ['btModule']);
	});
})();