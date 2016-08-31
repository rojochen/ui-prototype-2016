$(document).ready(function() {
    var echarts = require('../../../vendors/echarts/dist/echarts.min.js');
    // relationshipChart
    if ($('body').find('#relationshipChart')) {
        var relationshipChart = document.getElementById("relationshipChart");
        var myChart = echarts.init(relationshipChart);
        var app = {};
        option = null;
        myChart.showLoading();
        $.get('../../data/relationshipChart.gexf', function(xml) {
            myChart.hideLoading();

            var graph = echarts.dataTool.gexf.parse(xml);
            var categories = [];
            for (var i = 0; i < 9; i++) {
                categories[i] = {
                    name: '类目' + i
                };
            }
            graph.nodes.forEach(function(node) {
                node.itemStyle = null;
                node.value = node.symbolSize;
                node.symbolSize /= 1.5;
                node.label = {
                    normal: {
                        show: node.symbolSize > 30
                    }
                };
                node.category = node.attributes.modularity_class;
            });
            option = {
                title: {
                    text: 'Les Miserables',
                    subtext: 'Default layout',
                    top: 'bottom',
                    left: 'right'
                },
                tooltip: {},
                legend: [{
                    // selectedMode: 'single',
                    data: categories.map(function(a) {
                        return a.name;
                    })
                }],
                animationDuration: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [{
                    name: 'Les Miserables',
                    type: 'graph',
                    layout: 'none',
                    data: graph.nodes,
                    links: graph.links,
                    categories: categories,
                    roam: true,
                    label: {
                        normal: {
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: 'source',
                            curveness: 0.3
                        }
                    }
                }]
            };

            myChart.setOption(option);
        }, 'xml');
    }
    // rectangleTreesChart
    if ($('body').find('#rectangleTreesChart')) {
        var rectangleTreesChart = document.getElementById("rectangleTreesChart");
        var myChart = echarts.init(rectangleTreesChart);
        var app = {};
        option = null;
        myChart.showLoading();

        var household_america_2012 = 113616229;
        $.get('../../data/rectangleTreesChart.json', function(obama_budget_2012) {
            myChart.hideLoading();

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

            myChart.setOption(option = {
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
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
    // sankeyChart
    if ($('body').find('#sankeyChart')) {
        var sankeyChart = document.getElementById("sankeyChart");
        var myChart = echarts.init(sankeyChart);
        var app = {};
        option = null;
        myChart.showLoading();
        $.get('../../data/sankeyChart.json', function(data) {
            myChart.hideLoading();
            myChart.setOption(option = {
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
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
    // funnelChart
    if ($('body').find('#funnelChart')) {
        var funnelChart = document.getElementById("funnelChart");
        var myChart = echarts.init(funnelChart);
        var app = {};
        option = null;
        option = {
            title: {
                text: '漏斗图',
                subtext: '纯属虚构'
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
                data: ['展现', '点击', '访问', '咨询', '订单']
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
                    value: 60,
                    name: '访问'
                }, {
                    value: 40,
                    name: '咨询'
                }, {
                    value: 20,
                    name: '订单'
                }, {
                    value: 80,
                    name: '点击'
                }, {
                    value: 100,
                    name: '展现'
                }]
            }]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }

    }
});