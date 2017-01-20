define(['btModule'], function (btModule) {
  'use strict';
  var app = angular.module('btModule');


  joeCtrl.$inject = ['$http', '$scope', '$timeout', '$log'];

  function joeCtrl($http, $scope, $timeout, $log) {
    var vm = this;
    // btPortlet
    $http.get("../data/btCheckList.json").then(function (response) {
      vm.items = response.data;
    }, function (response) {
      $log.error('http error!');
    })
    // /btPortlet 

    // 基本圖表
    var theme = {
      color: ['rgba(38,185,154,0.88)', 'rgba(52,152,219,0.88)', 'rgba(243,156,18,0.88)', 'rgba(231,76,60,0.88)'],
      title: {
        textStyle: {
          // fontWeight: 'normal',
          color: '#1ABB9C'
        }
      }
    };
    $timeout(function () {
      if ($('#barChart').length > 0) {
        var barChart = echarts.init(document.getElementById('barChart'), theme);
        barChart.setOption({
          title: {
            text: 'pokemon',
            subtext: '補獲狀況圖'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
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

      if ($('#horizontalBarChart').length > 0) {
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

      if ($('#pieChart').length > 0) {
        var pieChart = echarts.init(document.getElementById('pieChart'), theme);
        pieChart.setOption({
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

      if ($('#donutPieChart').length > 0) {
        var donutPieChart = echarts.init(document.getElementById('donutPieChart'), theme);
        donutPieChart.setOption({
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

      if ($('#scatterChart').length > 0) {
        var scatterChart = echarts.init(document.getElementById('scatterChart'), theme);
        scatterChart.setOption({
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
              formatter: function (params) {
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
              formatter: function (params) {
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

      if ($('#lineChart').length > 0) {
        var lineChart = echarts.init(document.getElementById('lineChart'), theme);
        lineChart.setOption({
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

      $(window).resize(function () {
        if ($('#barChart').length > 0) {
          barChart.resize();
        }
        if ($('#horizontalBarChart').length > 0) {
          horizontalBarChart.resize();
        }
        if ($('#pieChart').length > 0) {
          pieChart.resize();
        }
        if ($('#donutPieChart').length > 0) {
          donutPieChart.resize();
        }
        if ($('#scatterChart').length > 0) {
          scatterChart.resize();
        }
        if ($('#lineChart').length > 0) {
          lineChart.resize();
        }
      });
    }, 100);
    // /基本圖表
  };
  app.controller('joeCtrl', joeCtrl);


  //pagination頁面
  paginationCtrl.$inject = ['$scope', '$log', 'paginationService'];
  function paginationCtrl($scope, $log, paginationService) {
    $scope.tableInfo = {
      "totalCount": 15,
      "result": [{
        "id": "121000000",
        "date": "May 23, 2014 11:47:56 PM",
        "number": "121000210",
        "people": "John Blank L",
        "status": "Paid",
        "total": "$7.45",
        "list": "View"
      }, {
        "id": "121000001",
        "date": "May 23, 2014 11:30:12 PM",
        "number": "121000208",
        "people": "John Blank L",
        "status": "Paid",
        "total": "$741.20",
        "list": "View"
      }, {
        "id": "121000002",
        "date": "May 24, 2014 10:55:33 PM",
        "number": "121000203",
        "people": "Mike Smith",
        "status": "Paid",
        "total": "$432.26",
        "list": "View"
      }, {
        "id": "121000003",
        "date": "May 24, 2014 10:52:44 PM",
        "number": "121000204",
        "people": "Mike Smith",
        "status": "Paid",
        "total": "$333.21",
        "list": "View"
      }, {
        "id": "121000004",
        "date": "May 24, 2014 11:47:56 PM",
        "number": "121000209",
        "people": "John Blank L",
        "status": "Paid",
        "total": "$7.45",
        "list": "View"
      }, {
        "id": "121000005",
        "date": "May 26, 2014 11:30:12 PM",
        "number": "121000207",
        "people": "Mike Smith",
        "status": "Paid",
        "total": "$741.20",
        "list": "View"
      }, {
        "id": "121000006",
        "date": "May 26, 2014 10:55:33 PM",
        "number": "121000202",
        "people": "Mike Smith",
        "status": "Paid",
        "total": "$432.26",
        "list": "View"
      }, {
        "id": "121000007",
        "date": "May 26, 2014 10:52:44 PM",
        "number": "121000200",
        "people": "John Blank L",
        "status": "Paid",
        "total": "$333.21",
        "list": "View"
      }, {
        "id": "121000008",
        "date": "May 27, 2014 11:47:56 PM",
        "number": "121000201",
        "people": "John Blank L",
        "status": "Paid",
        "total": "$7.45",
        "list": "View"
      }, {
        "id": "121000009",
        "date": "May 28, 2014 11:30:12 PM",
        "number": "121000212",
        "people": "John Blank L",
        "status": "Paid",
        "total": "$741.20",
        "list": "View"
      }, {
        "id": "121000010",
        "date": "May 30, 2014 11:30:12 PM",
        "number": "121000215",
        "people": "Mike Smith",
        "status": "Paid",
        "total": "$92",
        "list": "View"
      }, {
        "id": "121000011",
        "date": "December 11, 2014 11:30:12 PM",
        "number": "121000219",
        "people": "Mike Smith",
        "status": "Paid",
        "total": "$27.3",
        "list": "View"
      }, {
        "id": "121000012",
        "date": "December 19, 2014 11:30:12 PM",
        "number": "121000221",
        "people": "Mike Smith",
        "status": "Paid",
        "total": "$102.5",
        "list": "View"
      }, {
        "id": "121000013",
        "date": "December 23, 2014 11:30:12 PM",
        "number": "121000232",
        "people": "Mike Smith",
        "status": "Paid",
        "total": "$230.6",
        "list": "View"
      }, {
        "id": "121000014",
        "date": "December 31, 2014 11:30:12 PM",
        "number": "121000253",
        "people": "John Blank L",
        "status": "Paid",
        "total": "$9999",
        "list": "View"
      }]
    };
    $scope.eventChange = function(e){
      console.log(e);
    };
    $scope.goFirst = function(){
      paginationService.goFirst('ss');
    }
  }
  app.controller('paginationCtrl', paginationCtrl);


  //pagination頁面
  datepickerCtrl.$inject = ['$scope', '$log', '$timeout'];
  function datepickerCtrl($scope, $log, $timeout) {
    var d1 = new Date('2016/02/23 9:00:00 AM');
    var d2 = new Date('2016/03/20 6:30:00 PM');
    $scope.daterange1 = [d1,d2];
    // console.log($scope.daterange1);
    // $scope.daterange1 = [];

    $scope.console = function(){
      console.log($scope.daterange1);
    }
    $scope.remove = function(){
      $scope.daterange1 = [];
    }
  }
  app.controller('datepickerCtrl', datepickerCtrl);


  //表單構成頁面
  app.controller('form', ['$scope', '$timeout', '$element', function ($scope, $timeout, $element) {
    //bootstrap-daterangepicker
    $timeout(function () {
      $('#birthday').daterangepicker({
        singleDatePicker: true,
        calender_style: "picker_4"
      }, function (start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
      });
    }, 100);


    //Select2
    $timeout(function () {
      $(".select2_single").select2({
        placeholder: "選擇地點",
        allowClear: true
      });
      $(".select2_group").select2({});
      $(".select2_multiple").select2({
        maximumSelectionLength: 4,
        placeholder: "最多選擇四項",
        allowClear: true
      });
    }, 100);


    //jQuery Tags Input
    function onAddTag(tag) {
      alert("Added a tag: " + tag);
    }

    function onRemoveTag(tag) {
      alert("Removed a tag: " + tag);
    }

    function onChangeTag(input, tag) {
      alert("Changed a tag: " + tag);
    }

    $timeout(function () {
      $('#tags_1').tagsInput({
        width: 'auto',
        defaultText: '新增項目',
      });

      $('#tags_2').tagsInput({
        width: 'auto',
        defaultText: '新增項目',
      });
    }, 100)


    //Parsley
    $timeout(function () {
      $.listen('parsley:field:validate', function () {
        validateFront();
      });
      $('#demo-form2 #submitInfo').on('click', function () {
        $('#demo-form2').parsley().validate();
        validateFront();
      });
      var validateFront = function () {
        if (true === $('#demo-form2').parsley().isValid()) {
          $('.bs-callout-info').removeClass('hidden');
          $('.bs-callout-warning').addClass('hidden');
        } else {
          $('.bs-callout-info').addClass('hidden');
          $('.bs-callout-warning').removeClass('hidden');
        }
      };
    }, 100);


    //
    $timeout(function () {
      $element.find('.flat').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
      });
    }, 100);

  }]);

  return app;
});