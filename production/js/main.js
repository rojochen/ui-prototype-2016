(function() {'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl : '',
		paths : {
			pokemon : 'assets/js/app'
		} 
	});
	
	require(['pokemon'], function(pokemon) { 
		//var app =  angular.module("myApp",[pokemon]);
		console.log(pokemon);
		var app = angular.module('app',['pokemon']);
		app.controller('ctrl', function($scope){
			$scope.con = '給我angular';
		})

        	//angular.bootstrap(document, app);
	});
})();
