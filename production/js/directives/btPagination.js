define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.directive('btPagination', function(){
        
        function link(scope, element, attrs){
            var totalCount = scope.ngModel.totalCount,
                pageSize = Number.isNaN(Number.parseInt(attrs['pageSize']))?10:Number.parseInt(attrs['pageSize']),
                pageCount = Number.isNaN(Number.parseInt(attrs['pageCount']))?5:Number.parseInt(attrs['pageCount']);
            // console.log(totalCount);
            // console.log(pageSize);
            // console.log(pageCount);

            scope.changePage = function(x){
                // console.log(x);
                scope.showPageArray = [];
                if(scope.pageArray.length <= pageCount){
                    scope.showPageArray = angular.copy(scope.pageArray);
                    // console.log(scope.showPageArray);
                }else {
                    var point = null;
                    if(x === 1){
                        point = x - 1;
                    }
                    if(x !== 1 && x !== scope.pageArray.length){
                        if(pageCount !== 1){
                            point = x -2;
                            if(point + pageCount > scope.pageArray.length){
                                point = point - (point + pageCount - scope.pageArray.length);
                            }
                        }else{
                            point = x -1;
                        }
                    }
                    if(x === scope.pageArray.length){
                        point = x - pageCount;
                    }
                    

                    for(point; scope.showPageArray.length<pageCount; point++){
                        scope.showPageArray.push(scope.pageArray[point]);
                    }
                    // console.log(scope.showPageArray);
                }

                scope.page = x;
                scope.startList = (x-1)*pageSize+1;
                scope.endList = (totalCount < x*pageSize)?totalCount:x*pageSize;

            }
            
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


            if(totalCount === 0){
                scope.isShowPagination = false;
            }else{
                scope.isShowPagination = true;

                scope.pageArray = [];
                var endPage = Math.ceil(totalCount/pageSize);
                // console.log(endPage);
                for (var num = 1; num <= endPage;num++){
                    scope.pageArray.push(num);
                }
                // console.log(scope.pageArray);

                scope.changePage(1);
            }
        }

        return {
            restrict: 'A',
            scope: {
                ngModel: '='
            },
            link: link,
            template: `<ul class="pagination" ng-show="isShowPagination">
						<li ng-class="{'disabled': page === 1}"><a href ng-click="changeFirst()">« 第一頁</a></li>
						<li ng-class="{'disabled': page === 1}"><a href ng-click="changePre()">‹上一頁 </a></li>
						<li ng-class="{'active': x === page}" ng-repeat="x in showPageArray track by $index"> <a href ng-bind="x" ng-click="changePage(x)"></a> </li>
						<li ng-class="{'disabled': page === pageArray.length}"><a href ng-click="changeNext()">下一頁 ›</a></li>
						<li ng-class="{'disabled': page === pageArray.length}"><a href ng-click="changeLast()">最後一頁 »</a></li>
					</ul>
                    <p ng-show="isShowPagination">顯示第{{startList}}筆至第{{endList}}筆，共有{{ngModel.totalCount}}筆</p>
                    <p ng-show="!isShowPagination">沒有資料...，請確認資料格式！</p>`
        };
    });

    return app;
});