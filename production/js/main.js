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
			checkList:'js/component/checkList'
		}
	});
	require(['pokemon', 'btModule', 'btController', 'louisController', 'joeController', 'indexComponent','demoComponent', 'indexComponent_2','checkList'], function(pokemon, btModule, btController, louisController, joeController, indexComponent,demoComponent, indexComponent_2,checkList) {
		angular.bootstrap(document, ['btModule']);
	});
})();