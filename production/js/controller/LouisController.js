define(['btController'], function(btController) {
    'use strict';
    var app = btController;
    // 示範頁面
    app.controller('switch', ['$scope', '$timeout', function($scope, $timeout) {
        $timeout(function() {
            $(document).ready(function() {
                $("[name='my-checkbox']").bootstrapSwitch();
                console.log($("[name='my-checkbox']"));
            });
        });
    }]);
    // 表單元件
    app.controller('formAdvanced', ['$scope', '$timeout', function($scope, $timeout) {
        $timeout(function() {

            $(document).ready(function() {
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
                    $('#reportrange span').html(start.format('MM DD, YYYY') + ' - ' + end.format('MM DD, YYYY'));
                };
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
    return app;
});