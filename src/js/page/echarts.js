$(document).ready(function() {
    var echarts = require('../../../vendors/echarts/dist/echarts.min.js');
    var theme = {
        color: ['rgba(38,185,154,0.88)', 'rgba(52,152,219,0.88)', 'rgba(243,156,18,0.88)', 'rgba(231,76,60,0.88)'],
        title: {
            textStyle: {
                // fontWeight: 'normal',
                color: '#1ABB9C'
            }
        }
    };

    if ($('body').find('#barChart')) {
        var barChart = echarts.init(document.getElementById('barChart'), theme);
        barChart.setOption({
            title: {
                text: 'pokemon',
                subtext: '補獲狀況圖'
            },
            legend: {
                data: ['捕獲數']
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {
                        show: true,
                        title: "Save Image"
                    }
                }
            },
            xAxis: {
                data: ["卡比獸", "噴火龍", "妙蛙花", "水箭龜", "雷丘", "快龍"]
            },
            yAxis: {},
            series: [{
                name: '捕獲數',
                type: 'bar',
                data: [5, 1, 3, 2, 1, 2]
            }]
        });
    }

    if ($('body').find('#horizontalBarChart')) {
        var horizontalBarChart = echarts.init(document.getElementById('horizontalBarChart'), theme);
        horizontalBarChart.setOption({
            title: {
                text: 'pokemon',
                subtext: '補獲狀況圖'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['joe捕獲數', 'Yvonne捕獲數']
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {
                        show: true,
                        title: "Save Image"
                    }
                }
            },
            xAxis: {
                data: ["伊布", "妙蛙種子", "小拉達", "超音蝠"]
            },
            yAxis: {},
            series: [{
                name: 'joe捕獲數',
                type: 'bar',
                data: [1, 3, 3, 2]
            }, {
                name: 'Yvonne捕獲數',
                type: 'bar',
                data: [2, 2, 4, 1]
            }]
        });
    }

    if ($('body').find('#pieChart')) {
        var horizontalBarChart = echarts.init(document.getElementById('pieChart'), theme);
        horizontalBarChart.setOption({
            title: {
                text: 'pokemon',
                subtext: '出現機率圖'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} 隻 ({d}%)"
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: ["妙蛙種子", "小拉達", "伊布", "超音蝠"]
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {
                        show: true,
                        title: "Save Image"
                    }
                }
            },
            series: [{
                name: '出現率',
                type: 'pie',
                radius: '55%',
                data: [{
                    value: 5,
                    name: '妙蛙種子'
                }, {
                    value: 7,
                    name: '小拉達'
                }, {
                    value: 3,
                    name: '伊布'
                }, {
                    value: 3,
                    name: '超音蝠'
                }]
            }]
        });
    }

    if ($('body').find('#donutPieChart')) {
        var horizontalBarChart = echarts.init(document.getElementById('donutPieChart'), theme);
        horizontalBarChart.setOption({
            title: {
                text: 'pokemon',
                subtext: '出現機率圖'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} 隻 ({d}%)"
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: ["妙蛙種子", "小拉達", "伊布", "超音蝠"]
            },
            toolbox: {
                show: true,
                feature: {
                    // restore: {
                    //   show: true,
                    //   title: "Restore"
                    // },
                    saveAsImage: {
                        show: true,
                        title: "Save Image"
                    }
                }
            },
            series: [{
                name: '出現率',
                type: 'pie',
                radius: ['35%', '55%'],
                data: [{
                    value: 5,
                    name: '妙蛙種子'
                }, {
                    value: 7,
                    name: '小拉達'
                }, {
                    value: 3,
                    name: '伊布'
                }, {
                    value: 3,
                    name: '超音蝠'
                }]
            }]
        });
    }

    if ($('body').find('#scatterChart')) {
        var echartScatter = echarts.init(document.getElementById('scatterChart'), theme);
        echartScatter.setOption({
            title: {
                text: 'pokemon',
                subtext: '精靈身高體重圖'
            },
            tooltip: {
                trigger: 'axis',
                showDelay: 0,
                axisPointer: {
                    type: 'cross',
                    lineStyle: {
                        type: 'dashed',
                        width: 1
                    }
                }
            },
            legend: {
                data: ['妙蛙種子', '傑尼龜']
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {
                        show: true,
                        title: "Save Image"
                    }
                }
            },
            xAxis: [{
                type: 'value',
                scale: true,
                axisLabel: {
                    formatter: '{value} cm'
                }
            }],
            yAxis: [{
                type: 'value',
                scale: true,
                axisLabel: {
                    formatter: '{value} kg'
                }
            }],
            series: [{
                name: '妙蛙種子',
                type: 'scatter',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params) {
                        if (params.value.length > 1) {
                            return params.seriesName + ' :<br/>' + params.value[0] + 'cm ' + params.value[1] + 'kg ';
                        } else {
                            return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + 'kg ';
                        }
                    }
                },
                data: [
                    [161.2, 51.6],
                    [167.5, 59.0],
                    [159.5, 49.2],
                    [157.0, 63.0],
                    [155.8, 53.6],
                    [170.0, 59.0],
                    [159.1, 47.6],
                    [166.0, 69.8],
                    [176.2, 66.8],
                    [160.2, 75.2],
                    [172.5, 55.2],
                    [170.9, 54.2],
                    [172.9, 62.5],
                    [153.4, 42.0],
                    [160.0, 50.0]
                ],
                markPoint: {
                    data: [{
                        type: 'max',
                        name: 'Max'
                    }, {
                        type: 'min',
                        name: 'Min'
                    }]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: 'Mean'
                    }]
                }
            }, {
                name: '傑尼龜',
                type: 'scatter',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params) {
                        if (params.value.length > 1) {
                            return params.seriesName + ' :<br/>' + params.value[0] + 'cm ' + params.value[1] + 'kg ';
                        } else {
                            return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + 'kg ';
                        }
                    }
                },
                data: [
                    [174.0, 65.6],
                    [175.3, 71.8],
                    [193.5, 80.7],
                    [186.5, 72.6],
                    [187.2, 78.8],
                    [181.5, 74.8],
                    [184.0, 86.4],
                    [184.5, 78.4],
                    [175.0, 62.0],
                    [184.0, 81.6],
                    [180.0, 76.6],
                    [177.8, 83.6],
                    [192.0, 90.0],
                    [176.0, 74.6],
                    [174.0, 71.0]
                ],
                markPoint: {
                    data: [{
                        type: 'max',
                        name: 'Max'
                    }, {
                        type: 'min',
                        name: 'Min'
                    }]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: 'Mean'
                    }]
                }
            }]
        });
    }

    if ($('body').find('#lineChart')) {
        var echartLine = echarts.init(document.getElementById('lineChart'), theme);
        echartLine.setOption({
            title: {
                text: 'pokemon',
                subtext: '出現機率圖'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 220,
                y: 40,
                data: ['妙蛙種子', '傑尼龜', '皮卡丘']
            },
            toolbox: {
                show: true,
                feature: {
                    magicType: {
                        show: true,
                        title: {
                            line: 'Line',
                            bar: 'Bar',
                            stack: 'Stack',
                            tiled: 'Tiled'
                        },
                        type: ['line', 'bar', 'stack', 'tiled']
                    },
                    restore: {
                        show: true,
                        title: "Restore"
                    },
                    saveAsImage: {
                        show: true,
                        title: "Save Image"
                    }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: '妙蛙種子',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [10, 12, 21, 54, 260, 830, 710]
            }, {
                name: '傑尼龜',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [30, 182, 434, 791, 390, 30, 10]
            }, {
                name: '皮卡丘',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [1320, 1132, 601, 234, 120, 90, 20]
            }]
        });
    }
});