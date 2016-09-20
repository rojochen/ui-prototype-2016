define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    var btPortlet = {
        templateUrl: '../template/btPortlet.html',
        controller: btPortletCtrl,
        controllerAs: 'vm',
        transclude: true,
        bindings: {
            title: '<'
        }
    };
    app.component('btPortlet', btPortlet);

    btPortletCtrl.$inject = ['$http','$element'];
    function btPortletCtrl($http,$element) {
        var vm = this;
        //alert(vm.title);
        vm.$onInit = function(){
            //vm.title = '待辦事項';
             

            // Panel toolbox
            $element.on('click','.collapse-link', function () {
                var $BOX_PANEL = $(this).closest('.x_panel'),
                    $ICON = $(this).find('i'),
                    $BOX_CONTENT = $BOX_PANEL.find('.x_content');

                if ($BOX_PANEL.attr('style')) {
                    $BOX_CONTENT.slideToggle(200, function () {
                        $BOX_PANEL.removeAttr('style');
                    });
                } else {
                    $BOX_CONTENT.slideToggle(200);
                    $BOX_PANEL.css('height', 'auto');
                }
                $ICON.toggleClass('fa-chevron-up fa-chevron-down');
            });

            $element.on('click', '.close-link', function () {
                var $BOX_PANEL = $(this).closest('.x_panel');
                $BOX_PANEL.remove();
            });
            // /Panel toolbox
        };


        vm.$onChanges = function(){
            console.log(vm.title);
            if(vm.title !== '待辦事項aa'){
                console.log('sss');
            }
        }

        //差
    };

    return app;
});