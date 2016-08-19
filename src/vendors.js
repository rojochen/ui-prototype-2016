

var jqueryGroup = require.ensure(['../vendors/jquery/dist/jquery.min.js', '../vendors/bootstrap/dist/js/bootstrap.min.js'], function (require) {
    require('../vendors/fastclick/lib/fastclick.js');
    require('../vendors/nprogress/nprogress.js');
    require('bootstrap-daterangepicker');
    require('../vendors/bootstrap-progressbar/bootstrap-progressbar.js');
    // require('../vendors/Chart.js/dist/Chart.min.js');
    require('../vendors/gauge.js/dist/gauge.min.js');

    require('../vendors/iCheck/icheck.min.js');
    require('../vendors/skycons/skycons.js');

    require('../vendors/Flot/jquery.flot.js');
    require('../vendors/Flot/jquery.flot.pie.js');
    require('../vendors/Flot/jquery.flot.time.js');
    require('../vendors/Flot/jquery.flot.stack.js');
    require('../vendors/Flot/jquery.flot.resize.js');

    require('../vendors/flot.orderbars/js/jquery.flot.orderBars.js');
    require('../vendors/flot-spline/js/jquery.flot.spline.min.js');
    require('../vendors/flot.curvedlines/curvedLines.js');

    require('../vendors/DateJS/build/date.js');

    require('../vendors/jqvmap/dist/jquery.vmap.js');
    require('../vendors/jqvmap/dist/maps/jquery.vmap.world.js');
    require('../vendors/jqvmap/examples/js/jquery.vmap.sampledata.js');

    require('../vendors/moment/min/moment.min.js');
    require('../vendors/bootstrap-daterangepicker/daterangepicker.js');
 
    require('../build/js/custom.min.js');
     require('angular');
         require('angular-route');
     require('angular-resource');
});
 



