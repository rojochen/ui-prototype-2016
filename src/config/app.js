// var $ = require('../../vendors/jquery/dist/jquery.min.js');
define(['jquery', 'angular', 'moment', 'PNotify'], function (jquery, angular, moment, PNotify) {
    console.log(angular);

    var $ = jquery;
    global.jQuery = $;
    global.$ = $;
    jQuery = jquery;
    window.jQuery = $;
    window.$ = $;
    global.moment = moment;
    global.PNotify = PNotify;



    require('bootstrap')
    // require('../../vendors/fastclick/lib/fastclick.js');
    require('nprogress');
    // require('../../vendors/bootstrap-daterangepicker/daterangepicker.js');
    require('bootstrap-progressbar');
    // require('../../vendors/Chart.js/dist/Chart.min.js');
    //require('../../vendors/gauge.js/dist/gauge.min.js');


    //left mune scrollbar
    require('../../vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js');


    require('iCheck');
    require('skycons');

    // require('../../vendors/Flot/jquery.flot.js');
    // require('../../vendors/Flot/jquery.flot.pie.js');
    // require('../../vendors/Flot/jquery.flot.time.js');
    // require('../../vendors/Flot/jquery.flot.stack.js');
    // require('../../vendors/Flot/jquery.flot.resize.js');

    // require('../../vendors/flot.orderbars/js/jquery.flot.orderBars.js');
    // require('../../vendors/flot-spline/js/jquery.flot.spline.min.js');
    // require('../../vendors/flot.curvedlines/curvedLines.js');

    // require('../../vendors/DateJS/build/date.js');

    // require('../../vendors/jqvmap/dist/jquery.vmap.js');
    // require('../../vendors/jqvmap/dist/maps/jquery.vmap.world.js');
    // require('../../vendors/jqvmap/examples/js/jquery.vmap.sampledata.js');


    require('bootstrap-daterangepicker');

    require('../js/helpers/smartresize.js');
    // require('../js/custom.js');
    global.echarts = require('echarts');
    // require('../../src/config/joe.js');


    //blockUI.html
    require('../../vendors/blockUI/jquery.blockUI.js');

    //form.html and form_layout.html
    require('../../vendors/moment/moment.js');
    require('../../vendors/select2/dist/js/select2.full.min.js');
    require('../../vendors/jquery.tagsinput/src/jquery.tagsinput.js');
    require('../../vendors/parsleyjs/dist/parsley.min.js');

    // //tables_dynamic.html
    require('../../vendors/datatables.net/js/jquery.dataTables.min.js'); 
    require('../../vendors/datatables.net-bs/js/dataTables.bootstrap.min.js');

    // //gridslider.html
    require('../../vendors/ion.rangeSlider/js/ion.rangeSlider.min.js');

    //threeCol.html
    require('../../vendors/jquery-slimscroll/jquery.slimscroll.min.js');
    require('../js/page/threeCol.js');

    //notifications.html - louis
    require('../../vendors/pnotify/dist/pnotify.js');
    require('../../vendors/sweetalert2/dist/sweetalert2.js');

    //switch.html - louis
    require('../../vendors/bootstrap-switch/dist/js/bootstrap-switch.min.js');

    //projects.html - louis
    require('../../vendors/iCheck/icheck.min.js');
    
    //form_advanced.html - louis
    require('../../vendors/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js');
    require('../../vendors/jquery.inputmask/dist/min/jquery.inputmask.bundle.min.js');
    require('../../vendors/jquery-knob/dist/jquery.knob.min.js');
    require('../../vendors/cropper/dist/cropper.min.js');

    //dragDrop.html
    require('../js/page/dragDrop.js');


    // require('../../vendors/angular/angular.min.js');
    //require("expose?angular!../../vendors/angular/angular.min.js");

    require('angular-route');
    require('angular-datatables');
    require('promise-finally');


    //layer
    var layer = require('../../vendors/layer/build/layer.js');
    layer.config({
        path: false
    })
    // require('../../production/js/lib/layer/build/layer.js');
    //require('../../production/js/lib/layer/src/layer.js');


    angular.module('pokemon', ['ngRoute', 'datatables']);

    return angular;
});
// require(['../../vendors/jquery/dist/jquery.min.js'], function(jquery) {
//    require('../../vendors/bootstrap/dist/js/bootstrap.min.js')
//         // require('../../vendors/fastclick/lib/fastclick.js');
//     require('../../vendors/nprogress/nprogress.js');
//     // require('../../vendors/bootstrap-daterangepicker/daterangepicker.js');
//     require('../../vendors/bootstrap-progressbar/bootstrap-progressbar.js');
//     // require('../../vendors/Chart.js/dist/Chart.min.js');
//     //require('../../vendors/gauge.js/dist/gauge.min.js');

//     require('../../vendors/iCheck/icheck.min.js');
//     require('../../vendors/skycons/skycons.js');

//     // require('../../vendors/Flot/jquery.flot.js');
//     // require('../../vendors/Flot/jquery.flot.pie.js');
//     // require('../../vendors/Flot/jquery.flot.time.js');
//     // require('../../vendors/Flot/jquery.flot.stack.js');
//     // require('../../vendors/Flot/jquery.flot.resize.js');

//     // require('../../vendors/flot.orderbars/js/jquery.flot.orderBars.js');
//     // require('../../vendors/flot-spline/js/jquery.flot.spline.min.js');
//     // require('../../vendors/flot.curvedlines/curvedLines.js');

//     // require('../../vendors/DateJS/build/date.js');

//     // require('../../vendors/jqvmap/dist/jquery.vmap.js');
//     // require('../../vendors/jqvmap/dist/maps/jquery.vmap.world.js');
//     // require('../../vendors/jqvmap/examples/js/jquery.vmap.sampledata.js');


//     require('../../vendors/bootstrap-daterangepicker/daterangepicker.js');

//     require('../js/helpers/smartresize.js');
//     require('../js/custom.js');
//         require('../../vendors/echarts/dist/echarts.min.js');
//             require('../../src/config/joe.js');
//             require('../../vendors/angular/angular.min.js');
//              require('../../vendors/angular-route/angular-route.min.js');

// });

// require(['../../vendors/angular/angular.min.js', '../../vendors/bootstrap/dist/js/bootstrap.min.js'], function(angular) {

// });

// require(['../../vendors/jquery/dist/jquery.min.js'], function(jquery) {

// });

// require(['../../vendors/jquery/dist/jquery.min.js'], function (jquery) {

// });


// require('../../vendors/blockUI/jquery.blockUI.js');
// require('../../vendors/echarts/dist/echarts.min.js');
//remove [name].js
// require('../../build/js/custom.min.js');

// require('angular-resource');


// require('../js/page/blockUI.js');
// require('../js/page/echarts.js');

// require(['../../vendors/jquery/dist/jquery.min.js'], function(jquery) {
//     require('../config/louis.js');
// });