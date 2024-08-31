/*  ================

Theme Name: Julio
Theme URI: https://demo.techeshta.com/html/Julio/
Description: Julio is a creative portfolio template
Author: Techeshta
Author URI: https://www.templatemonster.com/authors/techeshta/
Version: 1.0

=======================  */

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

/* Form Submitting */
var form = document.getElementById("contact-form");
    
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("contact-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
                status.innerHTML = "Oops! There was a problem submitting your form"
            }
        })
    }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)