// popover
$('[data-toggle = "popover"]').popover();
// Tooltips
$('[data-toggle="tooltip"]').tooltip();
// PNotify
var PNotify = require('../../../vendors/pnotify/dist/pnotify.js');

// TabbedNotification
$('body').on('click', '.TabbedNotification', function() {
    var title = $(this).data('title');
    var text = $(this).data('text');
    var type = $(this).data('type');
    var sound = $(this).data('sound');
    var options = {
        title: title,
        text: text,
        type: type,
        sound: sound
    }
    console.log(options);
    TabbedNotification(options);
});
// TabbedNotification
$(function () {
        var cnt = 10; //$("#custom_notifications ul.notifications li").length + 1;
        TabbedNotification = function (options) {
            var message = "<div id='ntf" + cnt + "' class='text alert-" + options.type + "' style='display:none'><h2><i class='fa fa-bell'></i> " + options.title + "</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>" + options.text + "</p></div>";

            if (document.getElementById('custom_notifications') == null) {
                alert('doesnt exists');
            } else {
                $('#custom_notifications ul.notifications').append("<li><a id='ntlink" + cnt + "' class='alert-" + options.type + "' href='#ntf" + cnt + "'><i class='fa fa-bell animated shake'></i></a></li>");
                $('#custom_notifications #notif-group').append(message);
                cnt++;
                CustomTabs(options);
            }
        }

        CustomTabs = function (options) {
            $('.tabbed_notifications > div').hide();
            $('.tabbed_notifications > div:first-of-type').show();
            $('#custom_notifications').removeClass('dsp_none');
            $('.notifications a').click(function (e) {
                e.preventDefault();
                var $this = $(this),
                        tabbed_notifications = '#' + $this.parents('.notifications').data('tabbed_notifications'),
                        others = $this.closest('li').siblings().children('a'),
                        target = $this.attr('href');
                others.removeClass('active');
                $this.addClass('active');
                $(tabbed_notifications).children('div').hide();
                $(target).show();
            });
        }
        CustomTabs();
        var tabid = idname = '';
        $(document).on('click', '.notification_close', function (e) {
            idname = $(this).parent().parent().attr("id");
            tabid = idname.substr(-2);
            $('#ntf' + tabid).remove();
            $('#ntlink' + tabid).parent().remove();
            $('.notifications a').first().addClass('active');
            $('#notif-group div').first().css('display','block');
        });
    });
// sweetAlert
$('.x_content .sweet').on('click', function() {
    var num = $(".x_content .sweet").index(this);
    console.log(num);
    switch (num) {
        case 0:
            swal({
                type: 'question',
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file1!',
                showCancelButton: true,
                confirmButtonText: 'Question!'
            }).done();
            break;
        case 1:
            swal({
                type: 'info',
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file1!',
                showCancelButton: true,
                confirmButtonText: 'Info!'
            }).done();
            break;
        case 2:
            swal({
                type: 'success',
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file1!',
                showCancelButton: true,
                confirmButtonText: 'Success!'
            }).done();
            break;
        case 3:
            swal({
                type: 'warning',
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file1!',
                showCancelButton: true,
                confirmButtonText: 'Warning!'
            }).done();
            break;
        case 4:
            swal({
                type: 'error',
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file1!',
                showCancelButton: true,
                confirmButtonText: 'Danger!'
            }).done();
            break;
        case 5:
            swal({
                title: 'Auto close alert!',
                text: 'I will close in 2 seconds.',
                timer: 2000
            }).done();
            break;
        case 6:
            swal({
                title: '<i>HTML</i> <u>example</u>',
                type: 'info',
                html: 'You can use <b>bold text</b>, ' +
                    '<a href="//github.com">links</a> ' +
                    'and other HTML tags',
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                cancelButtonText: '<i class="fa fa-thumbs-down"></i>'
            }).done();
            break;
        case 7:
            swal({
                title: 'jQuery HTML example',
                html: $('<div>')
                    .addClass('some-class')
                    .text('jQuery is everywhere!!.')
            }).done();
            break;
        case 8:
            swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(function() {
                swal(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
            }).done();
            break;
        case 9:
            swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                buttonsStyling: false
            }).then(function() {
                swal(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
            }, function(dismiss) {
                // dismiss can be 'cancel', 'overlay', 'close', 'timer'
                if (dismiss === 'cancel') {
                    swal(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    );
                }
            }).done();
            break;
        case 10:
            swal({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                animation: false
            }).done();
            break;
        case 11:
            swal({
                title: 'Custom width, padding, background.',
                width: 600,
                padding: 100,
                background: '#fff url(//bit.ly/1Nqn9HU)'
            }).done();
            break;
        case 12:
            swal({
                title: 'Submit email to run ajax request',
                input: 'email',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                preConfirm: function(email) {
                    return new Promise(function(resolve, reject) {
                        setTimeout(function() {
                            if (email === 'taken@example.com') {
                                reject('This email is already taken.');
                            } else {
                                resolve();
                            }
                        }, 2000);
                    });
                },
                allowOutsideClick: false
            }).then(function(email) {
                swal({
                    type: 'success',
                    title: 'Ajax request finished!',
                    html: 'Submitted email: ' + email
                });
            }).done();
            break;
        case 13:
            swal.setDefaults({
                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                animation: false
            });

            var steps = [{
                    title: 'Step 1',
                    text: 'Chaining swal2 modals is easy'
                },
                'Step 2',
                'Step 3'
            ];

            swal.queue(steps).then(function() {
                swal({
                    title: 'All done!',
                    confirmButtonText: 'Lovely!',
                    showCancelButton: false
                });
            }).finally(function() {
                swal.resetDefaults();
            }).done();
            break;
        case 14:
            swal({
                title: 'Input something',
                input: 'text',
                showCancelButton: true,
                inputValidator: function(value) {
                    return new Promise(function(resolve, reject) {
                        if (value) {
                            resolve();
                        } else {
                            reject('You need to write something!');
                        }
                    });
                }
            }).then(function(result) {
                swal({
                    type: 'success',
                    html: 'You entered: ' + result
                });
            })
            break;
        case 15:
            swal({
                title: 'Input email address',
                input: 'email'
            }).then(function(email) {
                swal({
                    type: 'success',
                    html: 'Entered email: ' + email
                });
            })
            break;
        case 16:
            swal({
                title: 'Enter your password',
                input: 'password',
                inputAttributes: {
                    'maxlength': 10,
                    'autocapitalize': 'off',
                    'autocorrect': 'off'
                }
            }).then(function(password) {
                if (password) {
                    swal({
                        type: 'success',
                        html: 'Entered password: ' + password
                    });
                }
            })
            break;
        case 17:
            swal({
                input: 'textarea',
                showCancelButton: true
            }).then(function(text) {
                if (text) {
                    swal(text);
                }
            })
            break;
        case 18:
            swal({
                title: 'Select Ukraine',
                input: 'select',
                inputOptions: {
                    'SRB': 'Serbia',
                    'UKR': 'Ukraine',
                    'HRV': 'Croatia'
                },
                inputPlaceholder: 'Select country',
                showCancelButton: true,
                inputValidator: function(value) {
                    return new Promise(function(resolve, reject) {
                        if (value === 'UKR') {
                            resolve();
                        } else {
                            reject('You need to select Ukraine :)');
                        }
                    });
                }
            }).then(function(result) {
                swal({
                    type: 'success',
                    html: 'You selected: ' + result
                });
            })
            break;
        case 19:
            var inputOptions = new Promise(function(resolve) {
                setTimeout(function() {
                    resolve({
                        '#ff0000': 'Red',
                        '#00ff00': 'Green',
                        '#0000ff': 'Blue'
                    });
                }, 2000);
            });

            swal({
                title: 'Select color',
                input: 'radio',
                inputOptions: inputOptions,
                inputValidator: function(result) {
                    return new Promise(function(resolve, reject) {
                        if (result) {
                            resolve();
                        } else {
                            reject('You need to select something!');
                        }
                    });
                }
            }).then(function(result) {
                swal({
                    type: 'success',
                    html: 'You selected: ' + result
                });
            })
            break;
        case 20:
            swal({
                title: 'Terms and conditions',
                input: 'checkbox',
                inputValue: 1,
                inputPlaceholder: 'I agree with the terms and conditions',
                confirmButtonText: 'Continue <i class="fa fa-arrow-right></i>',
                inputValidator: function(result) {
                    return new Promise(function(resolve, reject) {
                        if (result) {
                            resolve();
                        } else {
                            reject('You need to agree with T&C');
                        }
                    });
                }
            }).then(function(result) {
                swal({
                    type: 'success',
                    text: 'You agreed with T&C :)'
                });
            })
            break;
        case 21:
            swal({
                title: 'Select image',
                input: 'file',
                inputAttributes: {
                    accept: 'image/*'
                }
            }).then(function(file) {
                var reader = new FileReader;
                reader.onload = function(e) {
                    swal({
                        imageUrl: e.target.result
                    });
                };
                reader.readAsDataURL(file);
            })
            break;
        case 22:
            swal({
                title: 'Multiple inputs',
                html: '<input id="swal-input1" class="swal2-input" autofocus>' +
                    '<input id="swal-input2" class="swal2-input" type="password">',
                preConfirm: function() {
                    return new Promise(function(resolve) {
                        if (result) {
                            resolve([
                                $('#swal-input1').val(),
                                $('#swal-input2').val()
                            ]);
                        }
                    });
                }
            }).then(function(result) {
                swal(JSON.stringify(result));
            })
            break;
    }
});

// Youtube modal
autoPlayYouTubeModal();
function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function() {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-theVideo"),
            videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
}

// Carousel
$(document).ready(function(){
    $("#carousel-id").mouseover(function() {
        $(".carousel-control").css('display', 'block');
    });
    $("#carousel-id").mouseout(function() {
        $(".carousel-control").css('display', 'none');
    });
});
// PNotify
// new PNotify({
//     title: "PNotify",
//     type: "info",
//     text: "Welcome. Try hovering over me. You can click things behind me, because I'm non-blocking.",
//     nonblock: {
//         nonblock: true
//     },
//     addclass: 'dark',
//     styling: 'bootstrap3',
//     hide: false,
//     before_close: function(PNotify) {
//         PNotify.update({
//             title: PNotify.options.title + " - Enjoy your Stay",
//             before_close: null
//         });

//         PNotify.queueRemove();

//         return false;
//     }
// });

