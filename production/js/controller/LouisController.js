define(['btController'], function(btController) {
    'use strict';
    var app = btController;
    app.controller('project', ['$scope', '$timeout', function($scope, $timeout) {
        // project
        $timeout(function() {
            $(document).ready(function() {
                $("[name='my-checkbox']").bootstrapSwitch();
                console.log($("[name='my-checkbox']"));
            });
        });
    }]);
    return app;
});