define(['btModule'], function(btModule) {
    'use strict';
    var app = angular.module('btModule');
    
    //表單構成頁面
    app.controller('form', ['$scope', function($scope) {
        //bootstrap-daterangepicker
        $('#birthday').daterangepicker({
          singleDatePicker: true,
          calender_style: "picker_4"
        }, function(start, end, label) {
          console.log(start.toISOString(), end.toISOString(), label);
        });


        //Select2
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

        $('#tags_1').tagsInput({
          width: 'auto',
          defaultText:'新增項目',
        });

        $('#tags_2').tagsInput({
          width: 'auto',
          defaultText:'新增項目',
        });


        //Parsley
        $.listen('parsley:field:validate', function() {
          validateFront();
        });
        $('#demo-form2 #submitInfo').on('click', function() {
          $('#demo-form2').parsley().validate();
          validateFront();
        });
        var validateFront = function() {
          if (true === $('#demo-form2').parsley().isValid()) {
            $('.bs-callout-info').removeClass('hidden');
            $('.bs-callout-warning').addClass('hidden');
          } else {
            $('.bs-callout-info').addClass('hidden');
            $('.bs-callout-warning').removeClass('hidden');
          }
        };

    }]);

    return app;
});