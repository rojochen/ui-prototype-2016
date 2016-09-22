define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    var btPortlet = {
        templateUrl: '../template/btPortlet.html',
        controller: btPortletCtrl,
        controllerAs: 'vm',
        transclude: true,
        bindings: {
            title: '<',
            switchbut: '<',
            selectbut: '<',
            closebut: '<'
        }
    };
    app.component('btPortlet', btPortlet);

    btPortletCtrl.$inject = ['$http','$element','$scope'];
    function btPortletCtrl($http,$element,$scope) {
        var vm = this;

        vm.$onInit = function(){
            if(angular.isUndefined(vm.switchbut)){
                vm.switchbut = true;
            }
            if(angular.isUndefined(vm.selectbut)){
                vm.selectbut = true;
            }
            if(angular.isUndefined(vm.closebut)){
                vm.closebut = true;
            }
            
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
                var $BOX_PANEL = $element.find(this).closest('.x_panel');
                $element.remove();
            });
            // /Panel toolbox
        };

        $element.on('$destroy', function () {
            $scope.$destroy();
        });

        
        vm.$onChanges = function(obj){
            // console.log(obj);
        };

        vm.$onDestroy = function(){
           //off event 
           $element.off('click');
        };
    };

    return app;
});