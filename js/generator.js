$(document).ready(function() {
    var chat_username = '';

    var generator_sound = true;
    var use_proxy = false;

    $('.generator_sound_checkbox .switchery').click(function() {
        generator_sound = !generator_sound;
    });

    $('.use_proxy_checkbox .switchery').click(function() {
        use_proxy = !use_proxy;
    });

    var speed_timer = 1;

	var console_message_1 = 'Loading generator files...';
	var console_message_2 = 'Extracting generator files...';
	var console_message_3 = 'Connecting to proxy server...';
	var console_message_4 = 'Establishing connection with game database...';
	var console_message_5 = 'Searching for username';
	var console_message_6 = 'Succesfully connected to username';
	var console_message_7 = 'Preparing to generate Fishdom Diamonds and Coins';
	var console_message_8 = 'Generating';
	var console_message_9 = 'Succesfully generated';
	var console_message_10 = 'Cleaning up injection traces';
	var console_message_11 = 'Performing automatic human verification';
	var console_message_12 = 'Automatic human verification failed';
	var console_message_13 = 'Manual verification required';

    $('.multiple-items-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        arrows: false,
        dots: false,
        speed: 150,
    });

    $('.generator_proceed_btn').click(function() {
        var is_disabled = $(this).hasClass('btn--disabled');
        var slide_type = $(this).attr('data-slide');

        if (!is_disabled) {
            if (slide_type == 'proceed') {
                if (generator_sound) {
                    ion.sound.play("swash");
                }

                username = $('input#generator_username').val();
                platform = $('.platforms__item.platforms__item--active').attr('data-name');

                $('.content__slide:nth-child(1)').hide();
                $('.content__slide:nth-child(2)').fadeIn((200 * speed_timer));
                setTimeout(function() {
                    $('.content__slide:nth-child(2)').fadeOut((200 * speed_timer));
                    $('.content__slide:nth-child(3)').fadeIn((200 * speed_timer));
                    $('.multiple-items-slick').slick('setPosition');
                }, (1000 * speed_timer));
            } else if (slide_type == 'first_resource') {
                if (generator_sound) {
                    ion.sound.play("swash");
                }

                $('.content__slide:nth-child(3)').css('position', 'absolute').animate({left: '100%'}, 200, function() { $(this).hide(); });
                $('.content__slide:nth-child(4)').css('position', 'absolute').css('left', '-100%').show().animate({left: '0'}, 200);
                $('.multiple-items-slick').slick('setPosition');

                first_resource_value = $('.content__slide:nth-child(3) .amount_coins_value').html();
            } else if (slide_type == 'second_resource') {
                $('.content__slide:nth-child(4)').fadeOut((200 * speed_timer));
                $('.content__slide:nth-child(5)').fadeIn((200 * speed_timer));

                second_resource_value = $('.content__slide:nth-child(4) .amount_coins_value').html();

                setTimeout(function() {
                    $('.content__slide:nth-child(5)').fadeOut((200 * speed_timer));
                    $('.content__slide:nth-child(6)').fadeIn((200 * speed_timer));
                    $('.content__slide:nth-child(6) .view_1').fadeIn((200 * speed_timer)).css('display', 'flex');
                    $('.content__slide:nth-child(6) .text_loader__title').html(console_message_1);
                }, (2500 * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .progressbar__progress.main_progress').animate({width: '5%'}, 0, function() {
                        $('.content__slide:nth-child(6) .text_loader__title').html(console_message_2);
                    });
                }, ((4000) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .progressbar__progress.main_progress').animate({width: '10%'}, 0, function() {
                        $('.content__slide:nth-child(6) .text_loader__title').html(console_message_3);
                    });
                }, ((5500) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .progressbar__progress.main_progress').animate({width: '15%'}, 0, function() {
                        $('.content__slide:nth-child(6) .text_loader__title').html(console_message_4);
                    });
                }, ((6500) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .view_1').fadeOut((200 * speed_timer));
                }, ((7500) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .view_2').fadeIn((200 * speed_timer)).css('display', 'flex');
                    $('.content__slide:nth-child(6) .view_2 .search_username__username').html(username);
                    $('.content__slide:nth-child(6) .view_2 .search_username__platform').html(platform);
                }, ((7800) * speed_timer));

                setTimeout(function() {
                    if (generator_sound) {
                        ion.sound.play("success");
                    }

                    $('.content__slide:nth-child(6) .view_2 .text_loader__text').html(console_message_6).css('color', '#24c241');
                    $('.content__slide:nth-child(6) .view_2 .search_username__username').css('color', '#24c241');
                }, ((9500) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .view_2').fadeOut((200 * speed_timer));
                    $('.content__slide:nth-child(6) .progressbar__progress.main_progress').animate({width: '24%'}, 0, function() {
                        $('.content__slide:nth-child(6) .text_loader__title').html(console_message_7);
                    });
                }, ((10500) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .view_1').fadeIn((200 * speed_timer));
                }, ((10800) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .view_1').fadeOut((200 * speed_timer));
                    $('.content__slide:nth-child(6) .progressbar__progress.main_progress').animate({width: '29%'}, 0);
                }, ((11800) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .view_3').fadeIn((200 * speed_timer)).css('display', 'flex');
                    $('.content__slide:nth-child(6) .view_3 .text_loader__text').html('Generating <span class="text_loader__text--blue">' + first_resource_value + '</span> Diamonds');
                }, ((12300) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .view_3 .search_username__coins_value').html(0);
                    resource_coin_value = 0;

                    setInterval(function() {
                        if (resource_coin_value < first_resource_value) {
                            resource_coin_value += 1000;
                            $('.content__slide:nth-child(6) .view_3 .search_username__coins_value').html(resource_coin_value);
                        }
                    }, (10) * speed_timer);

                    $('.content__slide:nth-child(6) .view_3 .progressbar__progress').animate({width: '100%'}, ((first_resource_value / 100) * speed_timer));
                }, ((12500) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .progressbar__progress.main_progress').animate({width: '50%'}, 0);

                    if (generator_sound) {
                        ion.sound.play("success");
                    }

                    $('.content__slide:nth-child(6) .view_3 .progressbar__progress').parent().removeClass('progressbar--pulse');
                    $('.content__slide:nth-child(6) .view_3 .text_loader__text').css('color', '#24c241').html('Succesfully generated <span class="text_loader__text--blue">' + first_resource_value + '</span> Diamonds');
                }, 14000 + ((first_resource_value / 100) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .view_3').fadeOut((200 * speed_timer));
                }, 14500 + ((first_resource_value / 100) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .progressbar__progress.main_progress').animate({width: '55%'}, 0);

                    $('.content__slide:nth-child(6) .view_4').fadeIn((200 * speed_timer)).css('display', 'flex');
                    $('.content__slide:nth-child(6) .view_4 .text_loader__text').html('Generating <span class="text_loader__text--blue">' + second_resource_value + '</span> Coins');
                }, 15000 + ((first_resource_value / 100) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .view_4 .search_username__coins_value').html(0);
                    resource_coin_value_2 = 0;

                    setInterval(function() {
                        if (resource_coin_value_2 < second_resource_value) {
                            resource_coin_value_2 += 1000;
                            $('.content__slide:nth-child(6) .view_4 .search_username__coins_value').html(resource_coin_value_2);
                        }
                    }, (10) * speed_timer);

                    $('.content__slide:nth-child(6) .view_4 .progressbar__progress').animate({width: '100%'}, ((second_resource_value / 100) * speed_timer));
                }, 16000 + ((first_resource_value / 100) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .progressbar__progress.main_progress').animate({width: '75%'}, 0);

                    if (generator_sound) {
                        ion.sound.play("success");
                    }

                    $('.content__slide:nth-child(6) .view_4 .progressbar__progress').parent().removeClass('progressbar--pulse');
                    $('.content__slide:nth-child(6) .view_4 .text_loader__text').css('color', '#24c241').html('Succesfully generated <span class="text_loader__text--blue">' + second_resource_value + '</span> Coins');
                }, 17000 + ((second_resource_value / 100) * speed_timer) + ((first_resource_value / 100) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .view_4').fadeOut((200 * speed_timer));
                }, 18000 + ((second_resource_value / 100) * speed_timer) + ((first_resource_value / 100) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .progressbar__progress.main_progress').animate({width: '77%'}, 0);

                    $('.content__slide:nth-child(6) .view_1').fadeIn((200 * speed_timer));
                    $('.content__slide:nth-child(6) .view_1 .text_loader__title').html(console_message_10);
                }, 18400 + ((second_resource_value / 100) * speed_timer) + ((first_resource_value / 100) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .progressbar__progress.main_progress').animate({width: '84%'}, 0);

                    $('.content__slide:nth-child(6) .view_1 .text_loader__title').html(console_message_11);
                }, 19500 + ((second_resource_value / 100) * speed_timer) + ((first_resource_value / 100) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .progressbar__progress.main_progress').animate({width: '87%'}, 0);

                    $('.content__slide:nth-child(6) .view_1 .text_loader__title').addClass('text_loader__title--red').html(console_message_12);
                }, 21500 + ((second_resource_value / 100) * speed_timer) + ((first_resource_value / 100) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6) .progressbar__progress.main_progress').animate({width: '91%'}, 0);

                    $('.content__slide:nth-child(6) .view_1 .text_loader__title').removeClass('text_loader__title--red').html(console_message_13);
                }, 23500 + ((second_resource_value / 100) * speed_timer) + ((first_resource_value / 100) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(6)').fadeOut((200 * speed_timer));

                    $('.content__slide:nth-child(7) .coins_value').html(first_resource_value);
                    $('.content__slide:nth-child(7) .points_value').html(second_resource_value);
                }, 25500 + ((second_resource_value / 100) * speed_timer) + ((first_resource_value / 100) * speed_timer));

                setTimeout(function() {
                    $('.content__slide:nth-child(7)').fadeIn((200 * speed_timer));

                    var timer_minutes = 3;
                    var timer_seconds = 0;

                    $('.timer__minutes').html(timer_minutes);
                    $('.timer__seconds').html(timer_seconds);

                    setInterval(function() {
                        if (timer_minutes > 0 || timer_minutes == 0 && timer_seconds > 0) {
                            if (timer_seconds == 0) {
                                timer_minutes -= 1;
                                timer_seconds = 59;
                            } else {
                                timer_seconds -= 1;
                            }
                        } else {
                            $('.timer__time').html('few seconds');
                        }

                        $('.timer__minutes').html(timer_minutes);
                        $('.timer__seconds').html(timer_seconds);
                    }, (1000 * speed_timer));
                }, 25900 + ((second_resource_value / 100) * speed_timer) + ((first_resource_value / 100) * speed_timer));
            }
        }

        return false;
    });

    $('.input_add_minus .btn_minus_trg').click(function() {
        if (generator_sound) {
            ion.sound.play("swash");
        }

        progressbar_width = parseInt($(this).parent().parent().find('.progressbar__progress').attr('data-progress'));

        $('.input_add_minus .btn_plus_trg').removeClass('btn--disabled');

        if (progressbar_width > 25) {
            if ((progressbar_width - 25) == 25) {
                $(this).addClass('btn--disabled');
            } else {
                $(this).removeClass('btn--disabled');
            }

            $(this).parent().parent().find('.progressbar__progress').css('width', (progressbar_width - 25) + '%').attr('data-progress', (progressbar_width - 25));
            $(this).parent().parent().find('.amount_coins_value').html((progressbar_width - 25) * 10000);
            $(this).parent().parent().parent().find('.resource_coins__icon').slick('slickPrev');
        }

        return false;
    });

    $('.input_add_minus .btn_plus_trg').click(function() {
        if (generator_sound) {
            ion.sound.play("swash");
        }

        progressbar_width = parseInt($(this).parent().parent().find('.progressbar__progress').attr('data-progress'));

        $('.input_add_minus .btn_minus_trg').removeClass('btn--disabled');

        if (progressbar_width < 100) {
            if ((progressbar_width + 25) == 100) {
                $(this).addClass('btn--disabled');
            } else {
                $(this).removeClass('btn--disabled');
            }

            $(this).parent().parent().find('.progressbar__progress').css('width', (progressbar_width + 25) + '%').attr('data-progress', (progressbar_width + 25));
            $(this).parent().parent().find('.amount_coins_value').html((progressbar_width + 25) * 10000);
            $(this).parent().parent().parent().find('.resource_coins__icon').slick('slickNext');
        }

        return false;
    });

    $('.human_verify_trg').click(function () {
        call_locker();

        return false;
    });
});
