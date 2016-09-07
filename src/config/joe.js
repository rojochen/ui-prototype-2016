define(function() {

    //blockUI.html
    require('../../vendors/blockUI/jquery.blockUI.js');
    require('../js/page/blockUI.js'); 


    //form.html
    // require('../../production/js/moment/moment.min.js');  //沒看出差異 先用原生的moment.js
    require('../../vendors/moment/moment.js');
    require('../../production/js/datepicker/daterangepicker.js');
    require('../../vendors/select2/dist/js/select2.full.min.js');
    require('../../vendors/jquery.tagsinput/src/jquery.tagsinput.js');
    require('../../vendors/parsleyjs/dist/parsley.min.js');
    require('../js/page/form.js');


    //form_layout.html
    require('../../production/js/moment/moment.min.js');  //沒看出差異 先用原生的moment.js
    require('../../vendors/moment/moment.js');
    require('../../production/js/datepicker/daterangepicker.js');
    require('../../vendors/select2/dist/js/select2.full.min.js'); 
    require('../../vendors/jquery.tagsinput/src/jquery.tagsinput.js'); 
    require('../../vendors/parsleyjs/dist/parsley.min.js'); 
    require('../js/page/form_layout.js');


    // //tables_dynamic.html
    require('../../vendors/datatables.net/js/jquery.dataTables.min.js'); 
    require('../../vendors/datatables.net-bs/js/dataTables.bootstrap.min.js');
    require('../js/page/tables_dynamic.js');


    // //gridslider.html
    require('../../vendors/ion.rangeSlider/js/ion.rangeSlider.min.js'); 
    require('../js/page/gridslider.js');


    //threeCol.html
    require('../../vendors/jquery-slimscroll/jquery.slimscroll.min.js');
    require('../js/page/threeCol.js');


    // //echarts.html
    require('../js/page/echarts.js');

    return {};
    
});

