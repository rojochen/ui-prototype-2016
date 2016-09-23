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
			indexComponent: 'js/component/indexComponent',
			demoComponent: 'js/component/demoComponent',
			indexComponent_2: 'js/component/indexComponent-2',
			footer: 'js/component/footer',
			header: 'js/component/header',
			btPortlet: 'js/component/btPortlet',
			btCheckList:'js/component/btCheckList',
			btNgTable:'js/component/btNgTable',
			btPanel:'js/component/btPanel'
		}
	});
	require(['pokemon', 'btModule', 'btController', 'louisController', 'joeController', 'indexComponent','demoComponent', 'indexComponent_2','footer','header','btPortlet','btCheckList','btNgTable','btPanel'], function(pokemon, btModule, btController, louisController, joeController, indexComponent,demoComponent, indexComponent_2, footer, header, btPortlet, btCheckList,btNgTable,btPanel) {

		angular.bootstrap(document, ['btModule']);
	});
})();