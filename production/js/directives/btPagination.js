define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.directive('btPagination', function(){
        
        function link(scope, element, attrs){
            var pageSize = Number.parseInt(attrs['pageSize']),
                pageCount = Number.parseInt(attrs['pageCount']);
            // console.log(scope.info.totalCount);
            // console.log(pageSize);
            console.log(pageCount);  //未...

            scope.pageArray = [];
            var endPage = Math.ceil(scope.info.totalCount/pageSize);
            // console.log(endPage);
            for (var num = 1; num <= endPage;num++){
                scope.pageArray.push(num);
            }
            console.log(scope.pageArray);
            
            scope.changePage = function(x){
                console.log(x);
                scope.page = x;
                // console.log(pageSize);
                scope.startList = (x-1)*pageSize+1;
                scope.endList = (scope.info.totalCount < x*pageSize)?scope.info.totalCount:x*pageSize;

            }
            scope.changePage(1);

            scope.changeFirst = function(){
                scope.changePage(1);
            }

            scope.changePre = function(){
                if(scope.page-1 > 0){
                    scope.changePage(scope.page-1);
                }
            }

            scope.changeNext = function(){
                if(scope.page+1 <= scope.pageArray.length){
                    scope.changePage(scope.page+1);
                }
            }

            scope.changeLast = function(){
                scope.changePage(scope.pageArray.length);
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
						<li ng-class="{'disabled': page === 1}"><a href ng-click="changeFirst()">« 第一頁</a></li>
						<li ng-class="{'disabled': page === 1}"><a href ng-click="changePre()">‹上一頁 </a></li>
						<li ng-class="{'active': $index === page-1}" ng-repeat="x in pageArray track by $index"> <a href ng-bind="x" ng-click="changePage(x)"></a> </li>
						<li ng-class="{'disabled': page === pageArray.length}"><a href ng-click="changeNext()">下一頁 ›</a></li>
						<li ng-class="{'disabled': page === pageArray.length}"><a href ng-click="changeLast()">最後一頁 »</a></li>
					</ul>
                    <p>顯示第{{startList}}筆至第{{endList}}筆，共有{{info.totalCount}}筆</p>`
        };
    });

    return app;
});