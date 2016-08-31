
    // load check
    if(typeof jQuery == 'undefined') {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "assets/js/louis.js;
        document.getElementsByTagName('head')[0].appendChild(script);
    }else{
        console.log('load Sussess');
    }
    // relationshipChart
    
    if($('body').find('#relationshipChart')){
        var echarts = require('../../../vendors/echarts/dist/echarts.min.js');
        var relationshipChart=echarts.init(document.getElementById('relationshipChart'));
        relationshipChart.showLoading();
        $.get('data/asset/data/les-miserables.gexf', function(xml) {
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
                    show: node.symbolSize > 10
                }
            };
            node.category = node.attributes.modularity_class;
        });
        option = {
            title: {
                text: 'Les Miserables',
                subtext: 'Circular layout',
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
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [{
                name: 'Les Miserables',
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
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

        relationshipChart.setOption(option);
    }, 'xml');

    
