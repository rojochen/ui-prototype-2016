define(['btModule'], function(btModule) {
    'use strict';
    // var app = btController;
    var app = angular.module("btModule");
    // switch
    app.controller('switch', ['$scope', '$timeout', function($scope, $timeout) {
        $timeout(function() {
            $(document).ready(function() {
                $("[name='my-checkbox']").bootstrapSwitch();
            });
        });
    }]);
    // 表單元件
    app.controller('formAdvanced', ['$scope', '$timeout', function($scope, $timeout) {
        $timeout(function() {

            $(document).ready(function() {
                console.log(moment);
                // knob
                $(".knobColor1").knob({
                    'width': 100,
                    'height': 120,
                    'fgColor': '#26B99A',
                    change: function(value) {
                        //console.log("change : " + value);
                    },
                    release: function(value) {
                        //console.log(this.$.attr('value'));
                        console.log("release : " + value);
                    },
                    cancel: function() {
                        console.log("cancel : ", this);
                    },
                    /*format : function (value) {
                     return value + '%';
                     },*/
                    draw: function() {

                        // "tron" case
                        if (this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv) // Arc
                                ,
                                pa // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });
                $(".knobColor2").knob({
                    'width': 100,
                    'height': 120,
                    'fgColor': '#34495E',
                    change: function(value) {
                        //console.log("change : " + value);
                    },
                    release: function(value) {
                        //console.log(this.$.attr('value'));
                        console.log("release : " + value);
                    },
                    cancel: function() {
                        console.log("cancel : ", this);
                    },
                    /*format : function (value) {
                     return value + '%';
                     },*/
                    draw: function() {

                        // "tron" case
                        if (this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv) // Arc
                                ,
                                pa // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

                // inputmask
                $(":input").inputmask();

                //  bootstrap-daterangepicker
                var cb = function(start, end, label) {
                    console.log(start.toISOString(), end.toISOString(), label);
                    $('#reportrange_right span').html(start.format('MM DD, YYYY') + ' - ' + end.format('MM DD, YYYY'));
                };

                var optionSet1 = {
                    startDate: moment().subtract(29, 'days'),
                    endDate: moment(),
                    minDate: '01/01/2012',
                    maxDate: '12/31/2015',
                    dateLimit: {
                        days: 60
                    },
                    showDropdowns: true,
                    showWeekNumbers: true,
                    timePicker: false,
                    timePickerIncrement: 1,
                    timePicker12Hour: true,
                    ranges: {
                        'Today': [moment(), moment()],
                        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    },
                    opens: 'right',
                    buttonClasses: ['btn btn-default'],
                    applyClass: 'btn-small btn-primary',
                    cancelClass: 'btn-small',
                    format: 'MM/DD/YYYY',
                    separator: ' to ',
                    locale: {
                        applyLabel: '送出',
                        cancelLabel: '清除',
                        fromLabel: '從',
                        toLabel: '至',
                        customRangeLabel: '自訂',
                        daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                        firstDay: 1
                    }
                };
                $('#reportrange_right span').html(moment().subtract(29, 'days').format('MM DD, YYYY') + ' - ' + moment().format('MM DD, YYYY'));

                $('#reportrange_right').daterangepicker(optionSet1, cb);

                $('#reportrange_right').on('show.daterangepicker', function() {
                    console.log("show event fired");
                });
                $('#reportrange_right').on('hide.daterangepicker', function() {
                    console.log("hide event fired");
                });
                $('#reportrange_right').on('apply.daterangepicker', function(ev, picker) {
                    console.log("apply event fired, start/end dates are " + picker.startDate.format('MM DD, YYYY') + " to " + picker.endDate.format('MM DD, YYYY'));
                });
                $('#reportrange_right').on('cancel.daterangepicker', function(ev, picker) {
                    console.log("cancel event fired");
                });

                $('#options1').click(function() {
                    $('#reportrange_right').data('daterangepicker').setOptions(optionSet1, cb);
                });

                $('#options2').click(function() {
                    $('#reportrange_right').data('daterangepicker').setOptions(optionSet2, cb);
                });

                $('#destroy').click(function() {
                    $('#reportrange_right').data('daterangepicker').remove();
                });
                // ---------------------------------
                var cb = function(start, end, label) {
                    console.log(start.toISOString(), end.toISOString(), label);
                    $('#reportrange span').html(start.format('MM DD, YYYY') + ' - ' + end.format('MM DD, YYYY'));
                };

                var optionSet1 = {
                    startDate: moment().subtract(29, 'days'),
                    endDate: moment(),
                    minDate: '01/01/2012',
                    maxDate: '12/31/2015',
                    dateLimit: {
                        days: 60
                    },
                    showDropdowns: true,
                    showWeekNumbers: true,
                    timePicker: false,
                    timePickerIncrement: 1,
                    timePicker12Hour: true,
                    ranges: {
                        'Today': [moment(), moment()],
                        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    },
                    opens: 'left',
                    buttonClasses: ['btn btn-default'],
                    applyClass: 'btn-small btn-primary',
                    cancelClass: 'btn-small',
                    format: 'MM/DD/YYYY',
                    separator: ' to ',
                    locale: {
                        applyLabel: '送出',
                        cancelLabel: '清除',
                        fromLabel: '從',
                        toLabel: '至',
                        customRangeLabel: '自訂',
                        daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                        firstDay: 1
                    }
                };
                $('#reportrange span').html(moment().subtract(29, 'days').format('MM DD, YYYY') + ' - ' + moment().format('MM DD, YYYY'));
                $('#reportrange').daterangepicker(optionSet1, cb);
                $('#reportrange').on('show.daterangepicker', function() {
                    console.log("show event fired");
                });
                $('#reportrange').on('hide.daterangepicker', function() {
                    console.log("hide event fired");
                });
                $('#reportrange').on('apply.daterangepicker', function(ev, picker) {
                    console.log("apply event fired, start/end dates are " + picker.startDate.format('MM DD, YYYY') + " to " + picker.endDate.format('MM DD, YYYY'));
                });
                $('#reportrange').on('cancel.daterangepicker', function(ev, picker) {
                    console.log("cancel event fired");
                });
                $('#options1').click(function() {
                    $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
                });
                $('#options2').click(function() {
                    $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
                });
                $('#destroy').click(function() {
                    $('#reportrange').data('daterangepicker').remove();
                });
                // ---------------------------------
                $('#single_cal1').daterangepicker({
                    singleDatePicker: true,
                    calender_style: "picker_1"
                }, function(start, end, label) {
                    console.log(start.toISOString(), end.toISOString(), label);
                });
                $('#single_cal2').daterangepicker({
                    singleDatePicker: true,
                    calender_style: "picker_2"
                }, function(start, end, label) {
                    console.log(start.toISOString(), end.toISOString(), label);
                });
                $('#single_cal3').daterangepicker({
                    singleDatePicker: true,
                    calender_style: "picker_3"
                }, function(start, end, label) {
                    console.log(start.toISOString(), end.toISOString(), label);
                });
                $('#single_cal4').daterangepicker({
                    singleDatePicker: true,
                    calender_style: "picker_4"
                }, function(start, end, label) {
                    console.log(start.toISOString(), end.toISOString(), label);
                });
                $('#reservation').daterangepicker(null, function(start, end, label) {
                    console.log(start.toISOString(), end.toISOString(), label);
                });
            });
        });
    }]);
    // 進階圖表
    app.controller('echarts2', ['$scope', '$timeout', function($scope, $timeout) {
        $timeout(function() {
            $(document).ready(function() {
                var theme = {
                    color: ['rgba(38,185,154,0.88)', 'rgba(52,152,219,0.88)', 'rgba(243,156,18,0.88)', 'rgba(231,76,60,0.88)', '#5bc0de', '#4b5f71'],
                    title: {
                        textStyle: {
                            // fontWeight: 'normal',
                            color: '#1ABB9C'
                        }
                    }
                };
                // rectangleTreesChart
                if ($('#rectangleTreesChart').length > 0) {
                    var rectangleTreesChart = echarts.init(document.getElementById("rectangleTreesChart"), theme);
                    var app = {};
                    $scope.option = null;
                    rectangleTreesChart.showLoading();
                    var household_america_2012 = 113616229;
                    $.get('../data/rectangleTreesChart.json', function(obama_budget_2012) {
                        console.log('rectangleTreesChart success');
                        rectangleTreesChart.hideLoading();

                        var formatUtil;

                        function buildData(mode, originList) {
                            var out = [];

                            for (var i = 0; i < originList.length; i++) {
                                var node = originList[i];
                                var newNode = out[i] = cloneNodeInfo(node);
                                var value = newNode.value;

                                if (!newNode) {
                                    continue;
                                }

                                // Calculate amount per household.
                                value[3] = value[0] / household_america_2012;

                                // if mode === 0 and mode === 2 do nothing
                                if (mode === 1) {
                                    // Set 'Change from 2010' to value[0].
                                    var tmp = value[1];
                                    value[1] = value[0];
                                    value[0] = tmp;
                                }

                                if (node.children) {
                                    newNode.children = buildData(mode, node.children);
                                }
                            }

                            return out;
                        }

                        function cloneNodeInfo(node) {
                            if (!node) {
                                return;
                            }

                            var newNode = {};
                            newNode.name = node.name;
                            newNode.id = node.id;
                            newNode.discretion = node.discretion;
                            newNode.value = (node.value || []).slice();
                            return newNode;
                        }

                        function getLevelOption(mode) {
                            return [{
                                color: mode === 2 ? [
                                    '#c23531', '#314656', '#61a0a8', '#dd8668',
                                    '#91c7ae', '#6e7074', '#61a0a8', '#bda29a',
                                    '#44525d', '#c4ccd3'
                                ] : null,
                                colorMappingBy: 'id',
                                itemStyle: {
                                    normal: {
                                        borderWidth: 3,
                                        gapWidth: 3
                                    }
                                }
                            }, {
                                colorAlpha: mode === 2 ? [0.5, 1] : null,
                                itemStyle: {
                                    normal: {
                                        gapWidth: 1
                                    }
                                }
                            }];
                        }

                        function isValidNumber(num) {
                            return num != null && isFinite(num);
                        }

                        function getTooltipFormatter(mode) {
                            var amountIndex = mode === 1 ? 1 : 0;
                            var amountIndex2011 = mode === 1 ? 0 : 1;

                            return function(info) {
                                var value = info.value;

                                var amount = value[amountIndex];
                                amount = isValidNumber(amount) ?
                                    formatUtil.addCommas(amount * 1000) + '$' :
                                    '-';

                                var amount2011 = value[amountIndex2011];
                                amount2011 = isValidNumber(amount2011) ?
                                    formatUtil.addCommas(amount2011 * 1000) + '$' :
                                    '-';

                                var perHousehold = value[3];
                                perHousehold = isValidNumber(perHousehold) ?
                                    formatUtil.addCommas((+perHousehold.toFixed(4)) * 1000) + '$' :
                                    '-';

                                var change = value[2];
                                change = isValidNumber(change) ?
                                    change.toFixed(2) + '%' :
                                    '-';

                                return [
                                    '<div class="tooltip-title">' + formatUtil.encodeHTML(info.name) + '</div>',
                                    '2012 Amount: &nbsp;&nbsp;' + amount + '<br>',
                                    'Per Household: &nbsp;&nbsp;' + perHousehold + '<br>',
                                    '2011 Amount: &nbsp;&nbsp;' + amount2011 + '<br>',
                                    'Change From 2011: &nbsp;&nbsp;' + change
                                ].join('');
                            };
                        }

                        function createSeriesCommon() {
                            return {
                                type: 'treemap',
                                label: {
                                    show: true,
                                    formatter: "{b}",
                                    normal: {
                                        textStyle: {
                                            ellipsis: true
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        borderColor: 'black'
                                    }
                                },
                                levels: getLevelOption(0)
                            };
                        }

                        formatUtil = echarts.format;
                        var modes = ['2012Budget', '2011Budget', 'Growth'];

                        rectangleTreesChart.setOption($scope.option = {
                            title: {
                                left: 'center',
                                text: 'How $3.7 Trillion is Spent',
                                subtext: 'Obama’s 2012 Budget Proposal'
                            },

                            legend: {
                                data: modes,
                                selectedMode: 'single',
                                top: 50,
                                itemGap: 5
                            },

                            tooltip: {
                                formatter: getTooltipFormatter(0)
                            },

                            series: modes.map(function(mode, idx) {
                                var seriesOpt = createSeriesCommon();
                                seriesOpt.name = mode;
                                seriesOpt.top = 80;
                                seriesOpt.visualDimension = idx === 2 ? 2 : null;
                                seriesOpt.data = buildData(idx, obama_budget_2012);
                                seriesOpt.levels = getLevelOption(idx);
                                return seriesOpt;
                            })
                        });
                    });
                    if ($scope.option && typeof $scope.option === "object") {
                        myChart.setOption($scope.option, true);
                    }
                }
                // sankeyChart
                if ($('#sankeyChart').length > 0) {
                    var sankeyChart = echarts.init(document.getElementById("sankeyChart"), theme);
                    var app = {};
                    $scope.option = null;
                    sankeyChart.showLoading();
                    $.get('../data/sankeyChart.json', function(data) {
                        console.log('sankeyChart success');
                        sankeyChart.hideLoading();
                        sankeyChart.setOption($scope.option = {
                            title: {
                                text: 'Sankey Diagram'
                            },
                            tooltip: {
                                trigger: 'item',
                                triggerOn: 'mousemove'
                            },
                            series: [{
                                type: 'sankey',
                                layout: 'none',
                                data: data.nodes,
                                links: data.links,
                                itemStyle: {
                                    normal: {
                                        borderWidth: 1,
                                        borderColor: '#aaa'
                                    }
                                },
                                lineStyle: {
                                    normal: {
                                        color: 'source',
                                        curveness: 0.5
                                    }
                                }
                            }]
                        });
                    });
                    if ($scope.option && typeof $scope.option === "object") {
                        sankeyChart.setOption($scope.option, true);
                    }
                }
                // funnelChart
                if ($('#funnelChart').length > 0) {
                    var funnelChart = document.getElementById("funnelChart");
                    var myChart = echarts.init(funnelChart, theme);
                    var app = {};
                    $scope.option = null;
                    $scope.option = {
                        title: {
                            text: '漏斗圖',
                            subtext: '純屬虛構'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c}%"
                        },
                        toolbox: {
                            feature: {
                                dataView: {
                                    readOnly: false
                                },
                                restore: {},
                                saveAsImage: {}
                            }
                        },
                        legend: {
                            data: ['展現', '點擊', '訪問', '諮詢', '訂單']
                        },
                        calculable: true,
                        series: [{
                            name: '漏斗图',
                            type: 'funnel',
                            left: '10%',
                            top: 60,
                            //x2: 80,
                            bottom: 60,
                            width: '80%',
                            // height: {totalHeight} - y - y2,
                            min: 0,
                            max: 100,
                            minSize: '0%',
                            maxSize: '100%',
                            sort: 'descending',
                            gap: 2,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                },
                                emphasis: {
                                    textStyle: {
                                        fontSize: 20
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    length: 10,
                                    lineStyle: {
                                        width: 1,
                                        type: 'solid'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: '#fff',
                                    borderWidth: 1
                                }
                            },
                            data: [{
                                value: 100,
                                name: '展現'
                            }, {
                                value: 80,
                                name: '點擊'
                            }, {
                                value: 40,
                                name: '諮詢'
                            }, {
                                value: 60,
                                name: '訪問'
                            }, {
                                value: 20,
                                name: '訂單'
                            }]
                        }]
                    };
                    if ($scope.option && typeof $scope.option === "object") {
                        myChart.setOption($scope.option, true);
                    }

                }
                window.onresize = function() {
                    if ($('#rectangleTreesChart').length > 0) {
                        rectangleTreesChart.resize();
                    }
                    if ($('#sankeyChart').length > 0) {
                        sankeyChart.resize();
                    }
                    if ($('#funnelChart').length > 0) {
                        myChart.resize();
                    }
                };



            });
        });
    }]);
    // 訊息通知
    app.controller('notifications', ['$scope', '$timeout', function($scope, $timeout) {
        $timeout(function() {
            // TabbedNotification

            $('body').on('click', '.TabbedNotification', function() {
                var title = $(this).attr('data-title');
                var text = $(this).attr('data-text');
                var type = $(this).attr('data-type');
                var sound = $(this).attr('data-sound');
                var options = {
                    title: title,
                    text: text,
                    type: type,
                    sound: sound
                }
                console.log(options);
                $scope.TabbedNotification(options);
            });
            var cnt = 10; //$("#custom_notifications ul.notifications li").length + 1;
            $scope.TabbedNotification = function(options) {
                var message = "<div id='ntf" + cnt + "' class='text alert-" + options.type + "' style='display:none'><h2><i class='fa fa-bell'></i> " + options.title + "</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>" + options.text + "</p></div>";

                if (document.getElementById('custom_notifications') == null) {
                    alert('doesnt exists');
                } else {
                    $('#custom_notifications ul.notifications').append("<li><a id='ntlink" + cnt + "' class='alert-" + options.type + "' href='#ntf" + cnt + "'><i class='fa fa-bell animated shake'></i></a></li>");
                    $('#custom_notifications #notif-group').append(message);
                    cnt++;
                    $scope.CustomTabs(options);
                }
            }

            $scope.CustomTabs = function(options) {
                $('.tabbed_notifications > div').hide();
                $('.tabbed_notifications > div:first-of-type').show();
                $('#custom_notifications').removeClass('dsp_none');
                $('.notifications a').click(function(e) {
                    e.preventDefault();
                    var $this = $(this),
                        tabbed_notifications = '#' + $this.parents('.notifications').data('tabbed_notifications'),
                        others = $this.closest('li').siblings().children('a'),
                        target = $this.attr('href');
                    others.removeClass('active');
                    $this.addClass('active');
                    $(tabbed_notifications).children('div').hide();
                    $(target).show();
                });
            }
            $scope.CustomTabs();
            var tabid = $scope.idname = '';
            $(document).on('click', '.notification_close', function(e) {
                $scope.idname = $(this).parent().parent().attr("id");
                tabid = $scope.idname.substr(-2);
                $('#ntf' + tabid).remove();
                $('#ntlink' + tabid).parent().remove();
                $('.notifications a').first().addClass('active');
                $('#notif-group div').first().css('display', 'block');
            });


            // sweetAlert

            $('.x_content .sweet').on('click', function() {
                var num = $(".x_content .sweet").index(this);
                console.log(num);
                switch (num) {
                    case 0:
                        swal({
                            type: 'question',
                            title: 'Are you sure?',
                            text: 'You will not be able to recover this imaginary file1!',
                            showCancelButton: true,
                            confirmButtonText: 'Question!'
                        }).done();
                        break;
                    case 1:
                        swal({
                            type: 'info',
                            title: 'Are you sure?',
                            text: 'You will not be able to recover this imaginary file1!',
                            showCancelButton: true,
                            confirmButtonText: 'Info!'
                        }).done();
                        break;
                    case 2:
                        swal({
                            type: 'success',
                            title: 'Are you sure?',
                            text: 'You will not be able to recover this imaginary file1!',
                            showCancelButton: true,
                            confirmButtonText: 'Success!'
                        }).done();
                        break;
                    case 3:
                        swal({
                            type: 'warning',
                            title: 'Are you sure?',
                            text: 'You will not be able to recover this imaginary file1!',
                            showCancelButton: true,
                            confirmButtonText: 'Warning!'
                        }).done();
                        break;
                    case 4:
                        swal({
                            type: 'error',
                            title: 'Are you sure?',
                            text: 'You will not be able to recover this imaginary file1!',
                            showCancelButton: true,
                            confirmButtonText: 'Danger!'
                        }).done();
                        break;
                    case 5:
                        swal({
                            title: 'Auto close alert!',
                            text: 'I will close in 2 seconds.',
                            timer: 2000
                        }).done();
                        break;
                    case 6:
                        swal({
                            title: '<i>HTML</i> <u>example</u>',
                            type: 'info',
                            html: 'You can use <b>bold text</b>, ' +
                                '<a href="//github.com">links</a> ' +
                                'and other HTML tags',
                            showCloseButton: true,
                            showCancelButton: true,
                            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                            cancelButtonText: '<i class="fa fa-thumbs-down"></i>'
                        }).done();
                        break;
                    case 7:
                        swal({
                            title: 'jQuery HTML example',
                            html: $('<div>')
                                .addClass('some-class')
                                .text('jQuery is everywhere!!.')
                        }).done();
                        break;
                    case 8:
                        swal({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                        }).then(function() {
                            swal(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                        }).done();
                        break;
                    case 9:
                        swal({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!',
                            cancelButtonText: 'No, cancel!',
                            confirmButtonClass: 'btn btn-success',
                            cancelButtonClass: 'btn btn-danger',
                            buttonsStyling: false
                        }).then(function() {
                            swal(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                        }, function(dismiss) {
                            // dismiss can be 'cancel', 'overlay', 'close', 'timer'
                            if (dismiss === 'cancel') {
                                swal(
                                    'Cancelled',
                                    'Your imaginary file is safe :)',
                                    'error'
                                );
                            }
                        }).done();
                        break;
                    case 10:
                        swal({
                            title: 'Sweet!',
                            text: 'Modal with a custom image.',
                            imageUrl: 'https://unsplash.it/400/200',
                            imageWidth: 400,
                            imageHeight: 200,
                            animation: false
                        }).done();
                        break;
                    case 11:
                        swal({
                            title: 'Custom width, padding, background.',
                            width: 600,
                            padding: 100,
                            background: '#fff url(//bit.ly/1Nqn9HU)'
                        }).done();
                        break;
                    case 12:
                        swal({
                            title: 'Submit email to run ajax request',
                            input: 'email',
                            showCancelButton: true,
                            confirmButtonText: 'Submit',
                            showLoaderOnConfirm: true,
                            preConfirm: function(email) {
                                return new Promise(function(resolve, reject) {
                                    setTimeout(function() {
                                        if (email === 'taken@example.com') {
                                            reject('This email is already taken.');
                                        } else {
                                            resolve();
                                        }
                                    }, 2000);
                                });
                            },
                            allowOutsideClick: false
                        }).then(function(email) {
                            swal({
                                type: 'success',
                                title: 'Ajax request finished!',
                                html: 'Submitted email: ' + email
                            });
                        }).done();
                        break;
                    case 13:
                        swal.setDefaults({
                            confirmButtonText: 'Next &rarr;',
                            showCancelButton: true,
                            animation: false
                        });

                        var steps = [{
                                title: 'Step 1',
                                text: 'Chaining swal2 modals is easy'
                            },
                            'Step 2',
                            'Step 3'
                        ];

                        swal.queue(steps).then(function() {
                            swal({
                                title: 'All done!',
                                confirmButtonText: 'Lovely!',
                                showCancelButton: false
                            });
                        }).finally(function() {
                            swal.resetDefaults();
                        }).done();
                        break;
                    case 14:
                        swal({
                            title: 'Input something',
                            input: 'text',
                            showCancelButton: true,
                            inputValidator: function(value) {
                                return new Promise(function(resolve, reject) {
                                    if (value) {
                                        resolve();
                                    } else {
                                        reject('You need to write something!');
                                    }
                                });
                            }
                        }).then(function(result) {
                            swal({
                                type: 'success',
                                html: 'You entered: ' + result
                            });
                        })
                        break;
                    case 15:
                        swal({
                            title: 'Input email address',
                            input: 'email'
                        }).then(function(email) {
                            swal({
                                type: 'success',
                                html: 'Entered email: ' + email
                            });
                        })
                        break;
                    case 16:
                        swal({
                            title: 'Enter your password',
                            input: 'password',
                            inputAttributes: {
                                'maxlength': 10,
                                'autocapitalize': 'off',
                                'autocorrect': 'off'
                            }
                        }).then(function(password) {
                            if (password) {
                                swal({
                                    type: 'success',
                                    html: 'Entered password: ' + password
                                });
                            }
                        })
                        break;
                    case 17:
                        swal({
                            input: 'textarea',
                            showCancelButton: true
                        }).then(function(text) {
                            if (text) {
                                swal(text);
                            }
                        })
                        break;
                    case 18:
                        swal({
                            title: 'Select Ukraine',
                            input: 'select',
                            inputOptions: {
                                'SRB': 'Serbia',
                                'UKR': 'Ukraine',
                                'HRV': 'Croatia'
                            },
                            inputPlaceholder: 'Select country',
                            showCancelButton: true,
                            inputValidator: function(value) {
                                return new Promise(function(resolve, reject) {
                                    if (value === 'UKR') {
                                        resolve();
                                    } else {
                                        reject('You need to select Ukraine :)');
                                    }
                                });
                            }
                        }).then(function(result) {
                            swal({
                                type: 'success',
                                html: 'You selected: ' + result
                            });
                        })
                        break;
                    case 19:
                        var inputOptions = new Promise(function(resolve) {
                            setTimeout(function() {
                                resolve({
                                    '#ff0000': 'Red',
                                    '#00ff00': 'Green',
                                    '#0000ff': 'Blue'
                                });
                            }, 2000);
                        });

                        swal({
                            title: 'Select color',
                            input: 'radio',
                            inputOptions: inputOptions,
                            inputValidator: function(result) {
                                return new Promise(function(resolve, reject) {
                                    if (result) {
                                        resolve();
                                    } else {
                                        reject('You need to select something!');
                                    }
                                });
                            }
                        }).then(function(result) {
                            swal({
                                type: 'success',
                                html: 'You selected: ' + result
                            });
                        })
                        break;
                    case 20:
                        swal({
                            title: 'Terms and conditions',
                            input: 'checkbox',
                            inputValue: 1,
                            inputPlaceholder: 'I agree with the terms and conditions',
                            confirmButtonText: 'Continue <i class="fa fa-arrow-right></i>',
                            inputValidator: function(result) {
                                return new Promise(function(resolve, reject) {
                                    if (result) {
                                        resolve();
                                    } else {
                                        reject('You need to agree with T&C');
                                    }
                                });
                            }
                        }).then(function(result) {
                            swal({
                                type: 'success',
                                text: 'You agreed with T&C :)'
                            });
                        })
                        break;
                    case 21:
                        swal({
                            title: 'Select image',
                            input: 'file',
                            inputAttributes: {
                                accept: 'image/*'
                            }
                        }).then(function(file) {
                            var reader = new FileReader;
                            reader.onload = function(e) {
                                swal({
                                    imageUrl: e.target.result
                                });
                            };
                            reader.readAsDataURL(file);
                        })
                        break;
                    case 22:
                        swal({
                            title: 'Multiple inputs',
                            html: '<input id="swal-input1" class="swal2-input" autofocus>' +
                                '<input id="swal-input2" class="swal2-input" type="password">',
                            preConfirm: function() {
                                return new Promise(function(resolve) {
                                    if (result) {
                                        resolve([
                                            $('#swal-input1').val(),
                                            $('#swal-input2').val()
                                        ]);
                                    }
                                });
                            }
                        }).then(function(result) {
                            swal(JSON.stringify(result));
                        })
                        break;
                }
            });



            // Youtube modal

            autoPlayYouTubeModal();

            function autoPlayYouTubeModal() {
                var trigger = $("body").find('[data-toggle="modal"]');
                trigger.click(function() {
                    var theModal = $(this).data("target"),
                        videoSRC = $(this).attr("data-theVideo"),
                        videoSRCauto = videoSRC + "?autoplay=1";
                    $(theModal + ' iframe').attr('src', videoSRCauto);
                    $(theModal + ' button.close').click(function() {
                        $(theModal + ' iframe').attr('src', videoSRC);
                    });
                });
            }



            // Carousel

            $("#carousel-id").mouseover(function() {
                $(".carousel-control").css('display', 'block');
            });
            $("#carousel-id").mouseout(function() {
                $(".carousel-control").css('display', 'none');
            });


            // pnotify

            $('body').on('click', '.pnotify', function() {
                var pnotifyNum = $('.x_content .pnotify').index(this);
                var name = $(this).text();
                var functionName = name + pnotifyNum;
                console.log(functionName);
                switch (pnotifyNum) {
                    case 0:
                        new PNotify({
                            title: 'New Thing',
                            text: 'Just to let you know, something happened.',
                            type: 'success',
                            styling: 'bootstrap3'
                        });
                        break;
                    case 1:
                        new PNotify({
                            title: 'New Thing',
                            text: 'Just to let you know, something happened.',
                            type: 'info',
                            styling: 'bootstrap3'
                        });
                        break;
                    case 2:
                        new PNotify({
                            title: 'Regular Notice',
                            text: 'Check me out! I\'m a notice.',
                            styling: 'bootstrap3'
                        });
                        break;
                    case 3:
                        new PNotify({
                            title: 'Oh No!',
                            text: 'Something terrible happened.',
                            type: 'error',
                            styling: 'bootstrap3'
                        });
                        break;
                    case 4:
                        new PNotify({
                            title: 'Oh No!',
                            text: 'Something terrible happened.',
                            type: 'info',
                            styling: 'bootstrap3',
                            addclass: 'dark'
                        });
                        break;
                    case 5:
                        new PNotify({
                            title: 'Sticky Success',
                            text: 'Sticky success... I\'m not even gonna make a joke.',
                            type: 'success',
                            hide: false,
                            styling: 'bootstrap3'
                        });
                        break;
                    case 6:
                        new PNotify({
                            title: 'Sticky Info',
                            text: 'Sticky Info... I\'m not even gonna make a joke.',
                            type: 'info',
                            hide: false,
                            styling: 'bootstrap3'
                        });
                        break;
                    case 7:
                        new PNotify({
                            title: 'Sticky Warning',
                            text: 'Sticky Warning... I\'m not even gonna make a joke.',
                            hide: false,
                            styling: 'bootstrap3'
                        });
                        break;
                    case 8:
                        new PNotify({
                            title: 'Sticky Danger',
                            text: 'Sticky Danger... I\'m not even gonna make a joke.',
                            type: 'error',
                            hide: false,
                            styling: 'bootstrap3'
                        });
                        break;
                    case 9:
                        new PNotify({
                            title: 'Sticky Success',
                            text: 'Sticky success... I\'m not even gonna make a joke.',
                            type: 'info',
                            hide: false,
                            styling: 'bootstrap3',
                            addclass: 'dark'
                        });
                        break;
                    case 10:
                        new PNotify({
                            title: 'Non-Blocking Notice',
                            type: 'info',
                            text: 'When you hover over me I\'ll fade to show the elements underneath. Feel free to click any of them just like I wasn\'t even here.',
                            nonblock: {
                                nonblock: true
                            },
                            styling: 'bootstrap3',
                            addclass: 'dark'
                        });
                        break;
                }
            });


            // popover

            $('[data-toggle = "popover"]').popover();


            // Tooltips

            $('[data-toggle="tooltip"]').tooltip();

        });
    }]);
    // 示範頁面
    app.controller('project', ['$scope', '$timeout', function($scope, $timeout) {
        $timeout(function() {
            $(document).ready(function() {
                if ($("input.flat")[0]) {
                    $('input.flat').iCheck({
                        checkboxClass: 'icheckbox_flat-green',
                        radioClass: 'iradio_flat-green'
                    });
                }
                if (typeof NProgress != 'undefined') {
                    $(document).ready(function() {
                        NProgress.start();
                    });

                    $(window).load(function() {
                        NProgress.done();
                    });
                }
            });
        });
    }]);
    return app;
});