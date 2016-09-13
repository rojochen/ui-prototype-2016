(function () {
	'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl: '../',
		paths: {
			pokemon: 'assets/js/app'
		}
	});

	require(['pokemon'], function (pokemon) {
		//var app =  angular.module("myApp",[pokemon]);

		var app = angular.module('app', ['pokemon']);
		app.config(['$routeProvider', function ($routeProvider) {
			// 導頁路徑
		$routeProvider
				.when('/', {
					templateUrl: "../template/index.html"
				})
				.when('/grids', {
					templateUrl: '../template/grids.html'
				})
				.when('/form', {
					templateUrl: '../template/form.html'
				})
				.when('/form_advanced', {
					templateUrl: '../template/form_advanced.html'
				})
				.when('/form_layout', {
					templateUrl: '../template/form_layout.html'
				})
				.when('/form_buttons', {
					templateUrl: '../template/form_buttons.html'
				})
				.when('/glyphicons', {
					templateUrl: '../template/glyphicons.html'
				})
				.when('/icons', {
					templateUrl: '../template/icons.html'
				})
				.when('/general_elements', {
					templateUrl: '../template/general_elements.html'
				})
				.when('/switch', {
					templateUrl: '../template/switch.html'
				})
				.when('/list', {
					templateUrl: '../template/list.html'
				})
				.when('/gridslider', {
					templateUrl: '../template/gridslider.html'
				})
				.when('/panel', {
					templateUrl: '../template/panel.html'
				})
				.when('/dragDrop', {
					templateUrl: '../template/dragDrop.html'
				})
				.when('/blockUI', {
					templateUrl: '../template/blockUI.html'
				})
				.when('/echarts', {
					templateUrl: '../template/echarts.html'
				})
				.when('/echarts2', {
					templateUrl: '../template/echarts2.html'
				})
				.when('/tables', {
					templateUrl: '../template/tables.html'
				})
				.when('/tables_dynamic', {
					templateUrl: '../template/tables_dynamic.html'
				})
				.when('/fixed_sidebar', {
					templateUrl: '../template/fixed_sidebar.html'
				})
				.when('/fixed_footer', {
					templateUrl: '../template/fixed_footer.html'
				})
				.when('/notifications', {
					templateUrl: '../template/notifications.html'
				})
				.when('/alert', {
					templateUrl: '../template/alert.html'
				})
				.when('/projects', {
					templateUrl: '../template/projects.html'
				})
				.when('/level2', {
					templateUrl: '../template/level2.html'
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);
		app.controller('sliderMenu', ['$scope', '$timeout', function ($scope, $timeout) {
			var CURRENT_URL = window.location.href.split('?')[0],
				$BODY = $('body'),
				$MENU_TOGGLE = $('#menu_toggle'),
				$SIDEBAR_MENU = $('#sidebar-menu'),
				$SIDEBAR_FOOTER = $('.sidebar-footer'),
				$LEFT_COL = $('.left_col'),
				$RIGHT_COL = $('.right_col'),
				$NAV_MENU = $('.nav_menu'),
				$FOOTER = $('footer');
			$timeout(function () {
				// Sidebar
				$(document).ready(function () {
					// TODO: This is some kind of easy fix, maybe we can improve this
					var setContentHeight = function () {
						// reset height
						$RIGHT_COL.css('min-height', $(window).height());

						var bodyHeight = $BODY.outerHeight(),
							footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
							leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
							contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

						// normalize content
						contentHeight -= $NAV_MENU.height() + footerHeight;

						$RIGHT_COL.css('min-height', contentHeight);
					};

					$SIDEBAR_MENU.find('a').on('click', function (ev) {
						var $li = $(this).parent();
						var $slideUpTime = 150;
						if ($BODY.hasClass('nav-md')) {
							$slideUpTime = 150;
						} else {
							$slideUpTime = 0;
						}

						if ($li.is('.active')) {
							$li.removeClass('active active-sm');
							$('ul:first', $li).slideUp($slideUpTime, function () {
								setContentHeight();
							});
						} else {
							// prevent closing menu if we are on child menu
							if (!$li.parent().is('.child_menu')) {
								$SIDEBAR_MENU.find('li').removeClass('active active-sm');
								$SIDEBAR_MENU.find('li ul').slideUp($slideUpTime);
							}

							$li.addClass('active');

							$('ul:first', $li).slideDown($slideUpTime, function () {
								setContentHeight();
							});
						}
					});

					// toggle small or large menu
					$MENU_TOGGLE.on('click', function () {
						if ($BODY.hasClass('nav-md')) {
							$SIDEBAR_MENU.find('li.active ul').hide();
							$SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
						} else {
							$SIDEBAR_MENU.find('li.active-sm ul').show();
							$SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
						}

						$BODY.toggleClass('nav-md nav-sm');

						setContentHeight();
					});

					// check active menu
					$SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

					$SIDEBAR_MENU.find('a').filter(function () {
						return this.href == CURRENT_URL;
					}).parent('li').addClass('current-page').parents('ul').slideDown(function () {
						setContentHeight();
					}).parent().addClass('active');

					// recompute content when resizing
					$(window).smartresize(function () {
						setContentHeight();
					});

					setContentHeight();

					// fixed sidebar
					if ($.fn.mCustomScrollbar) {
						$('.menu_fixed').mCustomScrollbar({
							autoHideScrollbar: true,
							theme: 'minimal',
							mouseWheel: { preventDefault: true }
						});
					}
				});



			});
			// /Sidebar				
		}]);

		app.controller('ctrl', function ($scope) {
			$scope.con = '給我angular';
		});

		//angular.bootstrap(document, app);
	});
})();
