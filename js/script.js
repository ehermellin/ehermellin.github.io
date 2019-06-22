/*
 Template Name: Mulan / CV Template + RTL
 Template URI: https://elmanawy.info/demo/mulan
 Description: Mulan for resume / cv / portfolio template that's suitable for freelanner and anyone want to create online portflolio
 Author: Marwa El-Manawy
 Author URL: https://elmanawy.info
 Version: 1.0
 */

/*================================================
 [  Table of contents  ]
 ================================================
 :: Preloader
 :: Site Header
 :: Page loader
 :: Typing Text
 :: Text rotation
 :: Counter - Fun Fact
 :: Testenomials
 :: Clients
 :: Portfolio Filter
 :: LightBox
 :: AJAX Contact Form
 :: Google Map
 :: WOW Animation
 ======================================
 [ End table content ]
 ======================================*/

jQuery(document).ready(function () {
    "use strict";

    /*======================================
     Site Header
     ======================================*/
    $('#header-main-menu li a, .home-buttons a').on("click", function (e) {
        if ($(e.target).is('.header-main-menu a, .home-buttons a')) {
            $('.header-main-menu li a').removeClass('active');
            $(this).addClass('active');
            $(".sub-page").hide();
            if (location.pathname.replace(/^\//, '') == e.target.pathname.replace(/^\//, '') && location.hostname == e.target.hostname) {
                var target = $(e.target.hash);
                target = target.length ? target : $('[name=' + e.target.hash.slice(1) + ']');
                if (target.length) {
                    var gap = 0;
                    $(e.target.hash, 'html', 'body').animate({
                        opacity: 'show',
                        duration: "slow",
                        scrollTop: target.offset().top - gap
                    });
                }
            }
        }
    });

    /*************************
     Responsive Menu
     *************************/
    $('.responsive-icon').on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.header').animate({'margin-left': 285}, 300);
        } else {
            $(this).removeClass('active');
            $('.header').animate({'margin-left': 0}, 300);
        }
        return false;
    });

    $('.header a').on("click", function (e) {
        $('.responsive-icon').removeClass('active');
        $('.header').animate({'margin-left': 0}, 300);

    });

    /*======================================
     Text rotation
     ======================================*/
    $('.text-rotation').owlCarousel({
        dots: !1,
        nav: !1,
        margin: 0,
        items: 1,
        autoplay: true,
        autoplayHoverPause: !1,
        autoplayTimeout: 1000,
        loop: true,
        animateOut: 'zoomOut',
        animateIn: 'zoomIn'
    });

    /*======================================
     Clients
     ======================================*/
    $('.clients').owlCarousel({
        navigation: false,
        pagination: false,
        dots: false,
        loop: true,
//        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        margin: 10,
        autoHeight: !1,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });

    /*======================================
     LightBox
     ======================================*/
    $('[data-rel^=lightcase]').lightcase({
        maxWidth: 1100,
        maxHeight: 800
    });

    /*======================================
     WOW Animation
     ======================================*/
    new WOW().init();
    /*======================================
     Preloader
     ======================================*/
    $('#preloader').fadeOut('slow', function () {
        $(this).remove();
    });
});
 