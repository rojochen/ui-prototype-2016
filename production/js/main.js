(function() {'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl : '',
		paths : {
			pokemon : 'assets/js/app'
		} 
	});
	
	require(['pokemon','angular','jquery' ], function(pokemon,angular) { 
		//var app =  angular.module("myApp",[pokemon]);
		alert(pokemon);

        	//angular.bootstrap(document, app);
	});
})();
