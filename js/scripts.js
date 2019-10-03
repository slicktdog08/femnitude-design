(function($) {
    'use strict';
    jQuery('img.svg-loader').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src'); 
    
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
    
            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
        }, 'xml');
    
    });


    //DROPDOWN MENU EFFECT
    $(".dropdown").on("mouseenter",function() {
        $(this).find('.dropdown-menu').eq(0).stop(true, true).delay(100).fadeIn(300);
    }); 

    $(".dropdown").on("mouseleave",function() {
        $(this).find('.dropdown-menu').eq(0).stop(true, true).delay(100).fadeOut(300);
    });


    $('.dropdown-menu > li > .dropdown-menu').parent().addClass('dropdown-submenu').find(' > .dropdown-item').attr('href', 'javascript:;').addClass('dropdown-toggle');
    $('.dropdown-submenu > a').on("click", function(e) {
        var dropdown = $(this).parent().find(' > .show');
        $('.dropdown-submenu .dropdown-menu').not(dropdown).removeClass('show');
        $(this).next('.dropdown-menu').toggleClass('show');
        e.stopPropagation();
    });

    // hide all open menus if the parent closes
    $('.dropdown').on("hidden.bs.dropdown", function() {
        $('.dropdown-menu.show').removeClass('show');
    });



    $('.dropdown-toggle').on('mouseenter mouseleave', function() {
        var dropdownList = $('.dropdown-menu');
        var dropdownOffset = $(this).offset();
        var offsetLeft = dropdownOffset.left;
        var dropdownWidth = dropdownList.width();
        var docWidth = $(window).width();
                
        var subDropdown = $('.dropdown-menu').eq(1);
        var subDropdownWidth = subDropdown.width();
        
        var isDropdownVisible = (offsetLeft + dropdownWidth <= docWidth);
        var isSubDropdownVisible = (offsetLeft + dropdownWidth + subDropdownWidth <= docWidth);
        
        if (!isDropdownVisible || !isSubDropdownVisible) {
            $('.dropdown-menu').addClass('dropdown-menu-right');
        } else {
            $('.dropdown-menu').removeClass('dropdown-menu-right');
        }
    });

   

    //AUTO COLLAPSE NAVBAR
     $('.navbar-collapse .dropdown-menu').on("click",function() {
        $(".navbar-collapse").collapse('hide');
    });


    //SMOOTH SCROLL
    $("ul.navbar-nav li a[href*='#'], .menu li a[href*='#'] ").on("click",function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - $('.navbar-custom').outerHeight()
                }, 1000);
                return false;
            }
        }
    });


    //NICE SELECT
    $('select').niceSelect();
    $('.shipping-calculator-form select').niceSelect();
    $('#rating').niceSelect('destroy');
    $('#billing_country').niceSelect('destroy');
    $('#billing_state').niceSelect('destroy');
    $('#calc_shipping_country').niceSelect('destroy');
    $('#calc_shipping_state').niceSelect('destroy');
    $('.tribe-bar-views-select').niceSelect('destroy');
    


    //SCROLL TO TOP
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on("scroll", function() {
            backToTop();
        });
        $('#back-to-top').on("click", function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    //FIX HOVER EFFECT ON IOS DEVICES
    document.addEventListener("touchstart", function() {}, true);
}(jQuery));


(function($) {
    'use strict';
    $(window).on('load',function() {
        //PRELOADER
        $('.preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    });
}(jQuery));

// Brand Carousel 
jQuery(document).ready(function($) {
    $("#brand-carousel").slick({
        arrows: false,
        infinite: true,
        dots: false,
        autoplay: false,

        slidesToShow: 7,
        slidesToScroll: 7,
        centerMode: false,

        rtl: false,
        responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    });
});
// Past Boxs SLick
jQuery(document).ready(function($) {
    $("#past-boxes").slick({
        arrows: false,
        infinite: true,
        dots: false,
        autoplay: false,

        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,

        rtl: false,
        responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    });
});
// Testimonial slick
jQuery(document).ready(function($) {
    $("#testimonial").slick({
        arrows: false,
        infinite: true,
        dots: false,
        autoplay: false,

        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,

        rtl: false,
        responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    });
});
// InstagramFeed Function
(function($) {
    $(window).on("load", function() {
        $.instagramFeed({
            "username": "instadabeauty",
            "container": "#instadabeauty",
            "display_profile": false,
            "display_biography": false,
            "display_gallery": true,
            "get_raw_json": false,
            "callback": null,
            "styling": true,
            "items": 4,
            "items_per_row": 4,
            "margin": 1
        });
    });
})(jQuery);



