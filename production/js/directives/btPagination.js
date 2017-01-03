define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.directive('btPagination', function(){
        
        function link(scope, element, attrs){
            var pageSize = Number.parseInt(attrs['pageSize']);
            // console.log(scope.info.totalCount);
            // console.log(pageSize);

            scope.pageArray = [];
            var endPage = Math.ceil(scope.info.totalCount/pageSize);
            // console.log(endPage);
            for (var num = 1; num <= endPage;num++){
                scope.pageArray.push(num);
            }
            // console.log(scope.pageArray);

            // console.log(attrs['pageCount']);  //未...

            scope.changePage = function(index){
                console.log(index);
                scope.page = index;
                // console.log(pageSize);
                scope.startList = index*pageSize+1;
                scope.endList = (scope.info.totalCount < (index+1)*pageSize)?scope.info.totalCount:(index+1)*pageSize;

            }
            scope.changePage(0);

            scope.changeFirst = function(){
                scope.changePage(0);
            }

            scope.changePre = function(){
                scope.changePage(scope.page-1);
            }

            scope.changeNext = function(){
                scope.changePage(scope.page+1);
            }

            scope.changeLast = function(){
                scope.changePage(scope.pageArray.length-1);
            }
        }

        return {
            restrict: 'A',  //為何選Ａ？
            scope: {
                // dataInfo: '=info'  //如何用dataInfo？
                info: '='  //後續是否改用ng-model接值？
            },
            link: link,
            template: `<ul class="pagination">
						<li ng-class="{'disabled': page === 0}"><a href ng-click="changeFirst()">« 第一頁</a></li>
						<li ng-class="{'disabled': page === 0}"><a href ng-click="changePre()">‹上一頁 </a></li>
						<li ng-class="{'active': $index === page}" ng-repeat="x in pageArray track by $index"> <a href ng-bind="x" ng-click="changePage($index)"></a> </li>
						<li ng-class="{'disabled': page === pageArray.length-1}"><a href ng-click="changeNext()">下一頁 ›</a></li>
						<li ng-class="{'disabled': page === pageArray.length-1}"><a href ng-click="changeLast()">最後一頁 »</a></li>
					</ul>
                    <p>顯示第{{startList}}筆至第{{endList}}筆，共有{{info.totalCount}}筆</p>`
        };
    });

    return app;
});