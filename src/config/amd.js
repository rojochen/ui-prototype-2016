// var $ = require('../../vendors/jquery/dist/jquery.min.js');
define(['../../vendors/jquery/dist/jquery.min.js', '../../vendors/angular/angular.min.js'],
    function (jquery, angular) {
            // var app = angular.module('pikachu', []);
            // app.directive('helloWorld', function () {
            //     alert('hello world');
            //     return {
            //         restrict: 'AE',
            //         replace: 'true',
            //         template: '<h3>Hello World!!</h3>'
            //     };
            // });
            require('../../vendors/bootstrap/dist/js/bootstrap.min.js')
            // require('../../vendors/fastclick/lib/fastclick.js');
            require('../../vendors/nprogress/nprogress.js');
            // require('../../vendors/bootstrap-daterangepicker/daterangepicker.js');
            require('../../vendors/bootstrap-progressbar/bootstrap-progressbar.js');


            require('../../vendors/iCheck/icheck.min.js');
            require('../../vendors/skycons/skycons.js');



            require('../../vendors/bootstrap-daterangepicker/daterangepicker.js');

            require('../js/helpers/smartresize.js');
            require('../../vendors/echarts/dist/echarts.min.js');
            require('../js/custom.js');
  

        
            require('../../vendors/angular-route/angular-route.min.js');
 


        return app;
    });

