define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    var btPortlet = {
        templateUrl: '../template/btPortlet.html',
        controller: btPortletCtrl,
        controllerAs: 'vm',
        transclude: true,
        bindings: {
            fontclass: '@',
            fabarsbtn: '<',
            titlename: '<',
            refreshstyle: '<',
            refreshbtn: '<',
            switchbtn: '<',
            selectbtn: '<',
            closebtn: '<'
        }
    };
    app.component('btPortlet', btPortlet);

    btPortletCtrl.$inject = ['$http','$element','$scope'];
    function btPortletCtrl($http,$element,$scope) {
        var vm = this;

        vm.$onInit = function(){
            if(angular.isUndefined(vm.fabarsbtn)){
                vm.fabarsbtn = false;
            }
            if(angular.isUndefined(vm.refreshbtn)){
                vm.refreshbtn = true;
            }
            if(angular.isUndefined(vm.switchbtn)){
                vm.switchbtn = true;
            }
            if(angular.isUndefined(vm.selectbtn)){
                vm.selectbtn = true;
            }
            if(angular.isUndefined(vm.closebtn)){
                vm.closebtn = true;
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
            // Panel toolbox

            // blockUI
            var isBlock;
            vm.blockUIStyle = {
                mask: { message: null },
                circles: { 
                    message: '<img src="../images/default.svg" width="60%"/>',
                    centerY: false,
                    overlayCSS: { 
                        backgroundColor: '#ccc',
                        opacity:0.2
                    },
                    css:{
                        border: 'none',
                        top: '15%',
                        background: 'transparent' 
                    } 
                },
                battery: {
                  message: '<img src="../images/battery.svg" width="100px"/>',
                  centerY: false,
                  overlayCSS: { 
                        backgroundColor: '#ccc',
                        opacity:0.2
                  },
                  css:{
                        border: 'none',
                        top: '30%',
                        background: 'transparent' 
                    }
                },
                ball: {
                  message: '<img src="../images/ball.svg" width="100px"/>',
                  centerY: false,
                  overlayCSS: { 
                        backgroundColor: '#ccc',
                        opacity:0.2
                  },
                  css:{
                        border: 'none',
                        top: '30%',
                        background: 'transparent' 
                    }
                },
                textPrompt: { 
                    message: '<h3><li class="fa fa-clock-o"></li> Please Ｗait...</h3>',
                    css:{
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: .5, 
                        color: '#fff' 
                    }
                }
            }

            if(angular.isUndefined(vm.refreshstyle) || vm.refreshstyle === ''){
                vm.blockUIStyleUrl = vm.blockUIStyle.battery;
            }
            if(vm.refreshstyle === 'circles'){
                vm.blockUIStyleUrl = vm.blockUIStyle.circles;
            }
            if(vm.refreshstyle === 'battery'){
                vm.blockUIStyleUrl = vm.blockUIStyle.battery;
            }
            if(vm.refreshstyle === 'ball'){
                vm.blockUIStyleUrl = vm.blockUIStyle.ball;
            }
            if(vm.refreshstyle === 'textPrompt'){
                vm.blockUIStyleUrl = vm.blockUIStyle.textPrompt;
            }

            $element.on('click','.refresh-link', function(){
                // console.log(vm.refreshstyle);
                var _this = $(this).parents('.x_panel').find('.x_content'),
                    unblock = function(){
                        _this.unblock();
                    };

                if(angular.isUndefined(isBlock)){
                    isBlock = true;
                }else{
                    isBlock = !isBlock;
                }
                // console.log(isBlock);

                if(isBlock === true){
                    _this.block(vm.blockUIStyleUrl);
                }else{
                    unblock();
                }
                // setTimeout(unblock, 2000);   // 開關改為isBlock布林子控制
            })
            // blockUI
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