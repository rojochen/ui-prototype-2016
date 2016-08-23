$(document).ready(function(){
            $('body').on('click','.blockUI-link:first',function(){
                var _this = $(this).parents('.x_panel').find('.x_content'),
                    unblock = function(){
                        _this.unblock();
                    };
                _this.block({ message: null });
                setTimeout(unblock, 2000); 
            });

            $('body').on('click','.blockUI-link:eq(1)',function(){
                var _this = $(this).parents('.x_panel').find('.x_content'),
                    unblock = function(){
                        _this.unblock();
                    };
                _this.block({ 
                    message: '<img src="../src/images/default.svg" width="100%"/>',
                    centerY: false,
                    overlayCSS: { 
                        backgroundColor: '#ccc',
                        opacity:0.2
                    },
                    css:{
                        border: 'none',
                        top: '10px',
                        background: 'transparent' 
                    } 
                });
                setTimeout(unblock, 2000); 
            });

            $('body').on('click','.blockUI-link:eq(2)',function(){
                var _this = $(this).parents('.x_panel').find('.x_content'),
                    unblock = function(){
                        _this.unblock();
                    };
                _this.block({
                  message: '<img src="../src/images/battery.svg" width="70%"/>',
                  centerY: false,
                  overlayCSS: { 
                        backgroundColor: '#ccc',
                        opacity:0.2
                  },
                  css:{
                        border: 'none',
                        top: '45px',
                        background: 'transparent' 
                    }
                });
                setTimeout(unblock, 2000); 
            });
            
            $('body').on('click','.blockUI-link:eq(3)',function(){
                var _this = $(this).parents('.x_panel').find('.x_content'),
                    unblock = function(){
                        _this.unblock();
                    };
                _this.block({
                  message: '<img src="../src/images/ball.svg" width="70%"/>',
                  centerY: false,
                  overlayCSS: { 
                        backgroundColor: '#ccc',
                        opacity:0.2
                  },
                  css:{
                        border: 'none',
                        top: '45px',
                        background: 'transparent' 
                    }
                });
                setTimeout(unblock, 2000); 
            });

            $('body').on('click','.blockUI-link:eq(4)',function(){
                var _this = $(this).parents('.x_panel').find('.x_content'),
                    unblock = function(){
                        _this.unblock();
                    };
                _this.block({ 
                    message: '<h3><li class="fa fa-clock-o"></li> Please Ｗait...</h3>',
                    css:{
                        backgroundColor: '#f00',
                        color: '#fff'
                    }
                });
                setTimeout(unblock, 2000); 
            });

            $('body').on('click','.blockUI-link:eq(5)',function(){
                var _this = $(this).parents('.x_panel').find('.x_content'),
                    unblock = function(){
                        _this.unblock();
                    };
                _this.block({ 
                    message: '<h3><li class="fa fa-clock-o"></li> Please Ｗait...</h3>',
                    css:{
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: .5, 
                        color: '#fff' 
                    }
                });
                setTimeout(unblock, 2000); 
            });

            $('body').on('click','.blockUI-link:eq(6)',function(){
                var _this = $(this).parents('.x_panel').find('.x_content'),
                    unblock = function(){
                        _this.unblock();
                    };
                _this.block({
                  message: null,
                  onBlock: function() { 
                      alert('onBlock alert'); 
                  } 
                });
                setTimeout(unblock, 2000); 
            });

            $('body').on('click','.blockUI-link:eq(7)',function(){
                var _this = $(this).parents('.x_panel').find('.x_content'),
                    unblock = function(){
                        _this.unblock({
                            onUnblock: function(){ 
                                alert('onUnblock alert'); 
                            }
                        });
                    };
                _this.block({message: null});
                setTimeout(unblock, 2000); 
            });
        });