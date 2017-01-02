$(document).ready(function () {

    //MOBILE NAV BUTTON
    $('.mobile-nav-icon').click(function () {
        var nav = $('.main-nav');
        var icon = $('.mobile-nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    })

    //STICKY
    $('.js-section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    // SCROLL FOR BUTTONS
    $('.js-scroll-to-plan').click(function () {
        $('html, body').animate({
            scrollTop: $('.section-plan').offset().top
        }, 1000);
    });

    $('.js-scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.section-features').offset().top
        }, 1000);
    });

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    //ANIMATION ON SCROLL
    $('.js-waypoint-1').waypoint(function (direction) {
        $('.js-waypoint-1').addClass("animated fadeIn");
    }, {
        offset: '50%'
    })

    $('.js-waypoint-2').waypoint(function (direction) {
        $('.js-waypoint-2').addClass("animated fadeInUp");
    }, {
        offset: '50%'
    })

    $('.js-waypoint-3').waypoint(function (direction) {
        $('.js-waypoint-3').addClass("animated fadeIn");
    }, {
        offset: '50%'
    })

    $('.js-waypoint-4').waypoint(function (direction) {
        $('.js-waypoint-4').addClass("animated pulse");
    }, {
        offset: '50%'
    })

    var map = new GMaps({
        div: '.map',
        lat: 38.7436057,
        lng: -9.05,
        zoom: 12,
    });

    map.addMarker({
        lat: 38.7436057,
        lng: -9.16,
        title: 'Lisbon',
        infoWindow: {
            content: '<p>Our Restaurant in Lisbon</p>'
        }
    });


});