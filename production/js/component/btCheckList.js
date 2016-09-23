define(['btModule'], function(btModule) {
    'use strict';
    var app = angular.module('btModule');

    var btCheckList = {
        bindings: {
            item: '<'
        },
        transclude: true,
        templateUrl: '../template/btCheckList.html',
        controller: checkList,
        controllerAs: 'vm',
        require: {
            parentCtrl: '^?btPortlet'
        }
    }
    app.component('btCheckList', btCheckList);

    btCheckList.$inject = ['$element', '$scope'];
    function checkList($element, $scope) {
        var vm = this;

        vm.$onInit = function() {
            $element.find('.flat').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            });


            if (vm.parentCtrl !== 'undefined') {

                $element.on('ifChecked', 'input', function(){
                    console.log('qq');
                    console.log(vm.item.value);
                    // vm.parentCtrl.titlename = item;
                    // vm.listName(vm.item.value);
                });

                
                // vm.listName = function(item) {
                //     console.log('ww');
                //     console.log(item);
                //     vm.parentCtrl.titlename = item;
                // }

            }
        }


        $element.on('$destroy', function() {
            //  alert('hello element');
            $scope.$destroy();
        });

        
        vm.$onDestroy = function() {
            //off event 
            $element.off('click');
        };

    }

    return app;
});