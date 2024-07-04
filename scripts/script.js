$(document).ready(function() {
    $('.btn-nav').on('click', function() {
        $('#mobile-menu').toggle();
        $('.btn-nav').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-list-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSection = 0;

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 60;
            const sectionBottom = sectionTop + section.outerHeight();
            if(scrollPosition >= sectionTop && scrollPosition <sectionBottom) {
                activeSection = i;
                return false;
            }
        });
        navItems.removeClass('active');
        $(navItems[activeSection]).addClass('active');
    });

    ScrollReveal().reveal('.home', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
    ScrollReveal().reveal('.me-image', {
        origin: 'top',
        duration: 1000,
        distance: '20%'
    })
    ScrollReveal().reveal('.saludation', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
    ScrollReveal().reveal('.me', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
    ScrollReveal().reveal('.function', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%'
    })
    ScrollReveal().reveal('.technologies', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
    ScrollReveal().reveal('.about', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
    ScrollReveal().reveal('.progress-area', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%'
    })
    ScrollReveal().reveal('.projects', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
});