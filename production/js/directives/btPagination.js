define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.directive('btPagination', ['paginationService', function(paginationService){
        function link(scope, element, attrs){
            var totalCount = scope.ngModel.totalCount,
                pageSize = Number.isNaN(Number.parseInt(attrs['pageSize']))?10:Number.parseInt(attrs['pageSize']),
                pageCount = Number.isNaN(Number.parseInt(attrs['pageCount']))?5:Number.parseInt(attrs['pageCount']),
                currentPage = Number.isNaN(Number.parseInt(attrs['currentPage']))?1:Number.parseInt(attrs['currentPage']),
                showInfo = (angular.isUndefined(attrs['showInfo'])?'true':attrs['showInfo']) == 'true',
                infoText = attrs['infoText'],
                id = attrs['id'];
            // console.log(totalCount);
            // console.log(pageSize);
            // console.log(pageCount);
            // console.log(currentPage);
            // console.log(showInfo);
            console.log(infoText);  //預設？try
            // console.log(id);
            

            scope.changePage = function(x, isInit){
                // console.log(isInit);
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
                //try
                scope.ss = '顯示第 '+ scope.startList +' 筆至第 '+ scope.endList +' 筆，共有 '+ scope.ngModel.totalCount +' 筆';
                //try
                scope.info = {
                    id: id,
                    pageSize: pageSize,
                    currentPage: x
                }
                paginationService.setInfo(scope.info);
                
                if(!isInit){
                    scope.onChangePage({e:scope.info});
                }
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

            element.on('goFirst', function(){
                scope.changePage(1);
            })


            if(!totalCount || totalCount === 0 || !id){
                scope.isShowPagination = false;
                scope.isShowInfo = showInfo;
            }else{
                console.log(infoText);  //?try
                scope.isShowInfo = showInfo;
                scope.isShowPagination = true;

                scope.pageArray = [];
                var endPage = Math.ceil(totalCount/pageSize);
                // console.log(endPage);
                for (var num = 1; num <= endPage;num++){
                    scope.pageArray.push(num);
                }
                // console.log(scope.pageArray);

                scope.changePage(currentPage, 'init');
            }

        }

        return {
            restrict: 'A',
            scope: {
                ngModel: '=',
                onChangePage: '&'
            },
            link: link,
            template: `<ul class="pagination" ng-show="isShowPagination">
						<li ng-class="{'disabled': page === 1}"><a href ng-click="changeFirst()">« 第一頁</a></li>
						<li ng-class="{'disabled': page === 1}"><a href ng-click="changePre()">‹上一頁 </a></li>
						<li ng-class="{'active': x === page}" ng-repeat="x in showPageArray track by $index"> <a href ng-bind="x" ng-click="changePage(x)"></a> </li>
						<li ng-class="{'disabled': page === pageArray.length}"><a href ng-click="changeNext()">下一頁 ›</a></li>
						<li ng-class="{'disabled': page === pageArray.length}"><a href ng-click="changeLast()">最後一頁 »</a></li>
					</ul>
                    <p ng-show="isShowPagination && isShowInfo">{{ss}}</p>
                    <p ng-show="!isShowPagination">沒有資料或未設定id...，請確認格式！</p>`
        };
    }])

    return app;
});