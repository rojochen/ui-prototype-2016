define(['btModule'], function (btModule) {
  'use strict';
  var app = angular.module('btModule');

  yvonneCtrl.$inject = ['$scope', '$timeout'];

  function yvonneCtrl($scope, $timeout) {
    var vm = this;
    $timeout(function () {
      // Sidebar
      $("#range_01").ionRangeSlider({});
      $("#range_02").ionRangeSlider({
        type: 'double',
        min: 0,
        max: 1000,
        from: 200,
        to: 700,
        grid: true
      });
      $("#range_03").ionRangeSlider({
        type: 'double',
        hide_min_max: true,
        // hide_from_to: true,
        min: 0,
        max: 5000,
        from: 1000,
        to: 4000,
        prefix: "$",
        grid: true
      });
      $("#range_04").ionRangeSlider({
        type: 'double',
        min: 0,
        max: 5000,
        from: 1500,
        to: 3800,
        prefix: "$",
        grid: true,
        prettify_enabled: true,
        prettify_separator: ","
      });
      $("#range_05").ionRangeSlider({
        type: 'double',
        min: -5000,
        max: 5000,
        from: -3500,
        to: 1500,
        grid: true,
        step: 500,
        // grid_num: 4,
        // grid_snap: true
      });
      $("#range_06").ionRangeSlider({
        type: 'double',
        min: 0,
        max: 50,
        from: 10,
        to: 25,
        grid: true,
        step: 0.1
      });
      $("#range_07").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 230,
        to: 560,
        grid: true,
        from_fixed: true
      });
      $("#range_08").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 420,
        to: 880,
        grid: true,
        to_fixed: true
      });
      $("#range_09").ionRangeSlider({
        type: "double",
        min: 0,
        max: 2000,
        from: 720,
        to: 1750,
        grid: true,
        from_min: 400,
        // from_max: 60,
        // from_shadow: true,
        // to_min: 20,
        to_max: 1800,
        // to_shadow: true
      });
      $("#range_10").ionRangeSlider({
        type: "double",
        min: 0,
        max: 2000,
        from: 380,
        to: 1250,
        grid: true,
        min_interval: 200,
        max_interval: 1000,
        drag_interval: true
      });
      $("#range_11").ionRangeSlider({
        type: 'double',
        min: 0,
        max: 100,
        from: 24,
        to: 65,
        prefix: "Age ",
        grid: true
      });
      $("#range_12").ionRangeSlider({
        type: 'double',
        min: 0,
        max: 100,
        from: 36,
        to: 65,
        postfix: "°C",
        max_postfix: "+",
        grid: true
      });
      $("#range_13").ionRangeSlider({
        type: 'double',
        hide_min_max: true,
        min: 0,
        max: 500,
        from: 145,
        to: 270,
        prefix: "Weight: ",
        postfix: " million pounds",
        decorate_both: true,
        values_separator: " → ",
        grid: true
      });
      $("#range_14").ionRangeSlider({
        type: 'double',
        hide_min_max: true,
        min: 0,
        max: 500,
        from: 260,
        to: 390,
        prefix: "Weight: ",
        postfix: " million pounds",
        decorate_both: false,
        values_separator: " → ",
        grid: true
      });
      $("#range_15").ionRangeSlider({
        grid: true,
        from: 6,
        values: ["zero", "one", "two", "three",
          "four", "five", "six", "seven",
          "eight", "nine", "ten"]
      });
      $("#range_16").ionRangeSlider({
        grid: true,
        from: 3,
        values: ["January", "February", "March", "April",
          "May", "June", "July", "August",
          "September", "October", "November", "December"]
      });
      $("#range_17").ionRangeSlider({
        min: +moment().subtract(24, "hours").format("X"),
        max: +moment().add(24, "hours").format("X"),
        from: +moment().subtract(8, "hours").format("X"),
        grid: true,
        force_edges: true,
        prettify: function (num) {
          var m = moment(num, "X");
          return m.format("MM/DD (dd), HH:mm");
        }
      });
      $("#range_18").ionRangeSlider({
        min: +moment().subtract(12, "hours").format("X"),
        max: +moment().add(12, "hours").format("X"),
        from: +moment().format("X"),
        grid: true,
        prettify: function (num) {
          return moment(num, "X").format("MM月 DD日, hh:mm A");
        }
      });
      $("#range_19").ionRangeSlider({
        type: 'double',
        min: 0,
        max: 5000,
        from: 800,
        to: 3400,
        grid: true,
        disable: true
      });

    }, 100);

  };
  app.controller('yvonneCtrl', yvonneCtrl);

  return app;
});