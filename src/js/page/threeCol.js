$(document).ready(function() {
            $('body').dynamic({});

            $(document).scroll(function(){
              // console.log($(this).scrollTop());
              if($(this).scrollTop() >= 45){
                $('#right-sidebar').find('.chat-messages.open').css('top','0');
              }
              if($(this).scrollTop() < 45){
                $('#right-sidebar').find('.chat-messages.open').css('top','45px');
              }
            });
            
        });


(function($) {
    $.dynamic = function(element, options) {
        var defaults = {
            customScroll: {
                color: '#fff', //color of custom scroll
                rscolor: '#fff', //color of right sidebar
                size: '3px', //size in pixels
                opacity: '1', //opacity
                alwaysVisible: false //disable hide in
            },
            rightSidebar: {
                fixed: true,//fixed sidebar
                rememberToggle: true //remember if sidebar is hided
            }
        }

        // current instance of the object
        var plugin = this;

        // this will hold the merged default, and user-provided options
        plugin.settings = {}

        var $element = $(element), // reference to the jQuery version of DOM element
            element = element;    // reference to the actual DOM element

        // the "constructor" method that gets called when the object is created
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            this.chatApp();
        }   

        //add custom scroll to desired element
        plugin.addScrollTo = function (el, position, color ) {
            el.slimScroll({
                position: position,
                height: '100%',
                distance: '1px',
                railVisible: false,
                size: plugin.settings.customScroll.size,                    
                color: color,                    
                railOpacity: plugin.settings.customScroll.opacity,
                railColor: plugin.settings.customScroll.railColor
            });  
        }

        //remove custom scroll from element
        plugin.removeScrollTo = function (el) {
            if (el.parent().hasClass('slimScrollDiv')) {
                el.parent().replaceWith(el); 
                el.attr('style', '');
            }  
        }

        //chat app
        plugin.chatApp = function () {
            var userList = $('ul.user-list').not('.chat-messages');
            var users = userList.find('a');
            var chatback = $('.chat-back>a');
            var rbScroll = $('#right-sidebar .sidebar-scrollarea');
            var chatForm = $('#chat-write');

            users.click(function(){
                scrollarea = $(this).next('.chat-messages').find('ul');
                //open chat messages
                $(this).next('.chat-messages').addClass('open');
                //addscrollbar to scrollarea
                plugin.addScrollTo(scrollarea,'right',plugin.settings.customScroll.rscolor);
                if (plugin.settings.rightSidebar.fixed) {
                    //deactivate rightsidebar scroll
                    plugin.removeScrollTo(rbScroll);
                }
                //open chat type
                // chatForm.addClass('open');
                if($(this).next().length != 0){
                  chatForm.addClass('open');
                }
                
            });

            chatback.click(function(){
                scrollarr = $(this).closest('ul');
                //close chat messages
                $(this).closest('.chat-messages').removeClass('open');
                //remove scrollbar from scrollarea
                plugin.removeScrollTo(scrollarr);
                if (plugin.settings.rightSidebar.fixed) {
                   //add scroll to sidebar
                    plugin.addScrollTo(rbScroll, 'right', plugin.settings.customScroll.rscolor);
                }                
                //hide chat type
                chatForm.removeClass('open');
            });
        }
        
        plugin.init();
    }

    // add the plugin to the jQuery.fn object
    $.fn.dynamic = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('dynamic')) {
                var plugin = new $.dynamic(this, options);
                $(this).data('dynamic', plugin);
            }
        });
    }

})(jQuery);