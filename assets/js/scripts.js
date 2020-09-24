$(document).ready(function() {
    'use strict'

    // header menu
    $(".h-menu").clone().prependTo(".mobile-menu");
    $(".menu-trigger").click(function(){
        $(this).toggleClass('active');
        $(".mobile-menu").slideToggle();
    });
    // Sticky Menu
    $(window).scroll(function() {
        if ($(window).scrollTop() > 40) {
            $('.header-sec').addClass('sticky-nav')
        } else {
            $('.header-sec').removeClass('sticky-nav')
        }
    })

    // scroll to top
    $("body").prepend('<div class="go-top"><i class="fa fa-angle-up"></i></div>');

    $(window).scroll(function(){
        if( $(window).scrollTop() > 500 ){
            $(".go-top").fadeIn();
        }else{
            $(".go-top").fadeOut();
        }
    });

    $(".go-top").click(function(){
        $("body, html").animate({scrollTop: 0}, 800);
    });
  

    // video lightboxt
    $(".lightbox-vimeo").modalVideo({
        channel:'vimeo'
    })
    $(".lightbox-youtube").modalVideo({
        channel:'youtube'
    })

    /*
    * OwlCarousel
    */
    $(".h-slider-sec").owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        smartSpeed: 1000,
        autoHeight: true,
        // autoplay: true,
        nav: true,
        navText: ['<img src="assets/img/arrow-left.svg" alt="left">','<img src="assets/img/arrow-right.svg" alt="Right">'],
        responsiveClass: true,
        responsive:{
            0:{
                nav: false,
            },
            768:{
                nav: true,
            }
        }
    });
    $(".products-carousel").owlCarousel({
        items: 3,
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<img src="assets/img/arrow-left.svg" alt="left">','<img src="assets/img/arrow-right.svg" alt="Right">'],
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
                nav: false,
                dots: true,
            },
            576:{
                items: 2,
                nav: false,
                dots: true,
            },
            768:{
                items: 2,
                nav: true,
            },

            1200:{
                items: 3,
                nav: true,
            }
        }
    });
    $(".other-product-carousel").owlCarousel({
        items: 4,
        margin: 30,
        nav: true,
        navText: ['<img src="assets/img/arrow-left.svg" alt="left">','<img src="assets/img/arrow-right.svg" alt="Right">'],
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
                nav: false,
            },
            576:{
                items: 2,
                nav: false,
            },
            768:{
                items: 3,
                nav: true,
            },

            1200:{
                items: 4,
                nav: true,
            }
        }
    });


    /*
     * Replace all SVG images with inline SVG
     */
    jQuery('img.svg')
        .filter(function() {
            return this.src.match(/.*\.svg$/)
        })
        .each(function() {
            var $img = jQuery(this)
            var imgID = $img.attr('id')
            var imgClass = $img.attr('class')
            var imgURL = $img.attr('src')

            jQuery.get(
                imgURL,
                function(data) {
                    var $svg = jQuery(data).find('svg')
                    if (typeof imgID !== 'undefined') {
                        $svg = $svg.attr('id', imgID)
                    }
                    if (typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass + ' replaced-svg')
                    }
                    $svg = $svg.removeAttr('xmlns:a')
                    $img.replaceWith($svg)
                },
                'xml'
            )
        })



})

