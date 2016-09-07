(function() {'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl : '',
		paths : {
			app : 'assets/js/app'
		} 
	});
	
	require(['app'], function(app) {
           
        angular.bootstrap(document, app);
	});
})();
