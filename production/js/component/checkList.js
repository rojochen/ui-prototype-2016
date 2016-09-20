define([
    'btModule',
], function(btModule) {

    var app = angualr.module('btModule');
    var body = '<div class="">' +
        '<ul class="to_do" ng-repeat="item in vm.items">' +
        '<li><p><input type="checkbox" class="flat">{{item.name}}'
    '</ul>' +
    '</div>';
    var btCheckList = {
        bindings: {
            items: '<'
        },
        template: body,
        controller: checkList,
        controllerAs: 'vm'
    }
    app.component('btCheckList', btCheckList);

    function checkList() {
        var vm = this;
        vm.items = [{
            vale: 1,
            name: 與新客戶的進度會議
        }, {
            vale:2,
            name:創建新人的email信箱
        },{
            vale:3,
            name:購買新影印機X台
        },{
            vale:4,
            name:備份專案資料
        },{
            vale:5,
            name:準備新人教育訓練
        },{
            vale:6,
            name:新專案進度諮詢
        }];

    }

    return app;
});