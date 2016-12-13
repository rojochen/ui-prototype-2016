define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module('btModule');
    // 導頁路徑
    app.service("ShoppingCartEntity", ShoppingCart);

    function ShoppingCart($log) {
        var list = [];
        this.getList = function () {
            return list;
        };
        this.addItem = function (item) {
            list.push(item);
        };

        var cartId = null;
        this.setCartID = function (id) {
            cartId = id;
        };
        this.getCartID = function () {
            return cartId;
        };

        this.openShoppingCart = function () {
            cartId = layer.open({
                type: 1,
                title: '已選清單',
                skin: 'layerList',
                maxmin: true,
                resize: false,
                anim: 2,
                offset: 'rb',
                shade: 0,
                zIndex: 2,
                cancel: function () {
                    layer.close(cartId);
                    cartId = null;
                },
                content: `<ul class="list-group">
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
            return cartId;
        };
        this.closeShoppingCart = function (index) {
            cartId = null;
            layer.close(index);
        };
    }

    ShoppingCart.$inject = ["$log"];
    return app;
});