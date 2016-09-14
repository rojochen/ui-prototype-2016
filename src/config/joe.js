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
    // require('../../production/js/moment/moment.min.js');  //沒看出差異 先用原生的moment.js
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


    //notifications.html - louis
    require('../../vendors/pnotify/dist/pnotify.js');
    require('../../vendors/sweetalert2/dist/sweetalert2.js');
    require('../js/page/notifications.js');


    //switch.html - louis
    require('../../vendors/bootstrap-switch/dist/js/bootstrap-switch.min.js');


    //projects.html - louis
    require('../../vendors/iCheck/icheck.min.js');
    require('../js/page/swtich.js');
        

    //form_advanced.html - louis
    require('../../vendors/moment/moment.js');
    require('../../production/js/datepicker/daterangepicker.js');
    require('../../vendors/ion.rangeSlider/js/ion.rangeSlider.min.js');
    require('../../vendors/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js');
    require('../../vendors/jquery.inputmask/dist/min/jquery.inputmask.bundle.min.js');
    require('../../vendors/jquery-knob/dist/jquery.knob.min.js');
    require('../../vendors/cropper/dist/cropper.min.js');
    require('../js/page/form_advanced.js');


    //echarts.html
    require('../js/page/echarts.js');
    require('../js/page/echarts2.js');


    //dragDrop.html
    require('../js/page/dragDrop.js');
    

    return {};
    
});

