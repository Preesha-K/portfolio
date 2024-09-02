
/* =======================

Table Of Content

1. preloader js
2. header logo img js
3. counter js
4. wow js
5. work js
6. testimonial js
7. back to top js

======================= */

$(function() {

    "use strict";

    var wind = $(window);

    /* -----------------------------------------------------
        1. preloader js
    ----------------------------------------------------- */
    
    $(".loading").fadeOut(500);
    
    /* -----------------------------------------------------
        2. header logo img js
    ----------------------------------------------------- */
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { 
            $('.navbar .navbar-brand img').attr('src','assets/images/logo-dark.png');
        }
        if ($(this).scrollTop() < 100) { 
            $('.navbar .navbar-brand img').attr('src','assets/images/logo.png');
        }
    })

    /* -----------------------------------------------------
        3. counter js
    ----------------------------------------------------- */
    
    $('.counter-number').counterUp({
        delay: 40,
        time: 2400
    });
    
    /* -----------------------------------------------------
        4. wow js
    ----------------------------------------------------- */
    
    new WOW().init();
    
    /* -----------------------------------------------------
        5. work js
    ----------------------------------------------------- */    
    
    var $container = $('.work-filter-widget');
    var $filter = $('#work-menu-filter');
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    $filter.find('a').on("click", function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

    $('.img-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });
    
    /* -----------------------------------------------------
        6. skills js
    ----------------------------------------------------- */
    
    $("#owl-skills").owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        navigation: false,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: false,
        autoHeight: true,
        loop:true,
        margin:10,
    });
    
    /* -----------------------------------------------------
        7. back to top js
    ----------------------------------------------------- */
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
        return false;
    });
    
        
}); 

