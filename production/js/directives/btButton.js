define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module('btModule');
    app.directive('aa', ['$document', 'uiGridConstants', 'uiGridEditConstants', function ($document, uiGridConstants, uiGridEditConstants) {
        return {
            template: function (element, attrs) {
                var html = '<input type="text" ng-model="text" ng-click="alert(text)" ng-bind="text">'
                return html;
            },
            require: ['?^uiGrid', '?^uiGridRenderContainer'],
            scope: true,
            compile: function () {
                return {
                    pre: function ($scope, $elm, $attrs) {

                    },
                    post: function ($scope, $elm, $attrs, controllers) {
                        $scope.text = $scope.row.entity[$scope.col.field];
                        $scope.alert = function (v) {
                            console.log(v);
                        }
                        $scope.edit = function (e) {
                            if ($scope.text) {
                                $scope.row.entity[$scope.col.field] = $scope.text;
                                $scope.stopEdit(e);
                            }
                        }
                        $scope.stopEdit = function (e) {
                            $scope.$emit(uiGridEditConstants.events.END_CELL_EDIT);
                        }
                    }
                };
            }
        }
    }]);
    return app;
});