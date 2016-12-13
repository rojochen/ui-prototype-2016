define([
    'btModule',
], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    var headerComponent = {
        templateUrl: '../NPV/js/component/template/top-menu.html',
        controller: headerComponentCtrl,
        controllerAs: 'vm',
        bindings: {
            layerList: '<'
        }
    };
    app.component('btHeader', headerComponent);
    
    headerComponentCtrl.$inject = ['$log','ShoppingCartEntity'];
    function headerComponentCtrl($log,shoppingCartEntity) {
        var vm = this;


        var layerList = null;
        layer.config({
                    type: 1,
                    title: '已選清單',
                    skin: 'layerList',
                    maxmin: false,
                    resize: false,
                    anim : 1,
                    offset: 'rb',
                    shade: 0,
                    zIndex: 2,
                    content: `
                    <ul class="list-group">
									<li class="clearfix listArea">
										<div style="width:100%" class="cart-list-title bg_green">
											 	活動類別
										</div>
										<div class="listText">
											<span class="activityName">活動代碼：A2696</span>
											<span class="activityName">活動類別：3轉4_iPhone SE 絕配續約專案_預繳(測試)</span>
										</div>
										<div class="listBottom">
											<div class="iconArea">
												<i class="fa fa-pencil"></i>編輯
											</div>
											<div class="iconArea">
												<i class="fa fa fa-eye"></i>檢視
											</div>
											<div class="iconArea">
												<i class="fa fa-trash-o"></i>移除
											</div>
										</div>
									</li>

									<li class="clearfix listArea">
										<div style="width:100%" class="cart-list-title bg_blue">
											 	促案類別
										</div>
										<div class="listText">
											<span class="activityName">活動代碼：A2696</span>
											<span class="activityName">活動類別：3轉4_iPhone SE 絕配續約專案_預繳(測試)</span>
										</div>
										<div class="listBottom">
											<div class="iconArea">
												<i class="fa fa-pencil"></i>編輯
											</div>
											<div class="iconArea">
												<i class="fa fa fa-eye"></i>檢視
											</div>
											<div class="iconArea">
												<i class="fa fa-trash-o"></i>移除
											</div>
										</div>
									</li>

									<li class="clearfix listArea">
										<div style="width:100%" class="cart-list-title bg_pink">
											 	折扣類別
										</div>
										<div class="listText">
											<span class="activityName">活動代碼：A2696</span>
											<span class="activityName">活動類別：3轉4_iPhone SE 絕配續約專案_預繳(測試)</span>
										</div>
										<div class="listBottom">
											<div class="iconArea">
												<i class="fa fa-pencil"></i>編輯
											</div>
											<div class="iconArea">
												<i class="fa fa fa-eye"></i>檢視
											</div>
											<div class="iconArea">
												<i class="fa fa-trash-o"></i>移除
											</div>
										</div>
									</li>
								</ul>`
                });
        var index = shoppingCartEntity.getCartID() ;

        vm.openList = function () {
            $log.debug($('.layerList').length);
            if (index==null) {
                layerList = layer.open();
            } else {
                layer.restore(vm.layerList);
            }
            $log.debug(vm.layerList);
        }
    };

    return app;
});