define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.directive('btDatepickerRange', ['$timeout', function($timeout){
        function link(scope, element, attrs){
            var datepickerId = attrs['datepickerId'],
                format = attrs['format']?attrs['format']:"YYYY/MM/DD",
                drops = attrs['drops']?attrs['drops']:'down',
                opens = attrs['opens']?attrs['opens']:'right',
                minDate = attrs['minDate'],
                maxDate = attrs['maxDate'],
                showDropdowns = attrs['showDropdowns']?attrs['showDropdowns']=='true':false,
                timePicker = attrs['timePicker']?attrs['timePicker'] == 'true':false,
                timePickerIncrement = attrs['timePickerIncrement']?Number.parseInt(attrs['timePickerIncrement']):null,
                timePicker24Hour = attrs['timePicker24Hour']? attrs['timePicker24Hour'] == 'true':false,
                timePickerSeconds = attrs['timePickerSeconds']? attrs['timePickerSeconds'] == 'true':false,
                optionSet = {
                    locale: {
                        applyLabel: '送出',
                        cancelLabel: '清除',
                        format: format,
                        daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                    },
                    showDropdowns: showDropdowns,
                    timePicker: timePicker,
                    timePickerIncrement: timePickerIncrement,
                    timePicker24Hour: timePicker24Hour,
                    timePickerSeconds: timePickerSeconds,
                    drops: drops,
                    opens: opens
                },
                modelZIndex = $(element).parents('.modal').css('z-index');
            // console.log(datepickerId);
            // console.log(format);
            // console.log(drops);
            // console.log(opens);
            // console.log(minDate);
            // console.log(maxDate);
            // console.log(showDropdowns);
            // console.log(timePicker);
            // console.log(timePickerIncrement);
            // console.log(timePicker24Hour);
            // console.log(timePickerSeconds);


            if(datepickerId){
                scope.isShowDatepicker = true;
                scope.id = datepickerId;

                if(scope.ngModel && scope.ngModel.length !== 0){
                    if(scope.ngModel[0]) optionSet.startDate = scope.ngModel[0];
                    if(scope.ngModel[1]) optionSet.endDate = scope.ngModel[1];
                }

                if(minDate && minDate.replace(/\D/g, "").length >= 7) optionSet.minDate = minDate;
                if(maxDate && maxDate.replace(/\D/g, "").length >= 7) optionSet.maxDate = maxDate;

                if(modelZIndex)  optionSet.parentEl = '.modal';


                var unbindWatcher = scope.$watch('ngModel', function(newValue, oldValue) {
                    // console.log('$watch' + newValue);
                    if(newValue && newValue.length === 0){
                        scope.value = [];
                    }
                },true);


                element.on('$destroy', function () {
                    // console.log("on destroy");
                    unbindWatcher();
                    scope.$destroy();
                });
                

                $timeout(function(){
                    $('#'+ datepickerId).daterangepicker(optionSet,function(start, end, label){
                        scope.ngModel = [];
                        scope.ngModel.push(start._d);
                        scope.ngModel.push(end._d);
                        // console.log(scope.ngModel);
                    });

                    $('#'+ datepickerId).on('cancel.daterangepicker', function(ev, picker) {
                        $(this).val('');
                        scope.ngModel.length = 0;
                    });

                    $('#'+ datepickerId).on('showCalendar.daterangepicker', function(){
                        // console.log('open-1');
                        var zIndex = 2,
                            layuiLayerZIndex = $(this).parents('.layui-layer').css('z-index');
                        if(modelZIndex)  zIndex = modelZIndex;
                        if(layuiLayerZIndex) zIndex = layuiLayerZIndex;
                        // console.log(zIndex);
                        $(this).css('z-index', zIndex);
                        $('.daterangepicker').css('z-index', zIndex);
                    });

                    $('#'+ datepickerId).on('show.daterangepicker', function(){
                        // console.log('open-2');
                    });

                    $('#'+ datepickerId).on('hideCalendar.daterangepicker', function(){
                        console.log('close-1');
                    });

                    $('#'+ datepickerId).on('hide.daterangepicker', function(){
                        // console.log('close-2');
                        if(!scope.ngModel || scope.ngModel.length === 0){
                            $(this).val('');
                            scope.value = [];
                        }
                    });

                    if(!scope.ngModel || scope.ngModel.length === 0){
                        scope.value = [];
                    }
                },100);
            }else{
                scope.isShowDatepicker = false;
            }
        }

        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
            },
            link: link,
            template: `<div class="input-prepend input-group" ng-show="isShowDatepicker">
                            <span class="add-on input-group-addon">
                                <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
                            </span>
                            <input type="text" id="{{id}}" class="form-control" ng-model="value">
                        </div>
                        <span ng-show="!isShowDatepicker">請設定bt-datepicker-range的id。</span>`
        };
    }])

    return app;
});