$(function(){
    'use strict';

// smooth scrolling to targets for main menu links
    $('a[href^="#"]').click(function(){
        let target = $(this).attr('href');

        $('html, body').animate(
            {
                scrollTop: $(target).offset().top
            },
            800
        );
    });

// fix main menu on top during scrolling the page
    let offset = $('.header__bottom').offset();

    $(window).scroll(function() {
        if ( $(window).scrollTop() > offset.top ) {
            $('.header__bottom').addClass('fixedNav');
        } else {
            $('.header__bottom').removeClass('fixedNav');
        }
    });

// add slider for the Testimonials section with different slides for mobile devices & computers
    if ( window.innerWidth > 1024 ) {
        $('#slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    } else {
        $('#slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
    
// load all apartments in the Gallery section by clicking the button "View all"
    $('#gallery__view_all_btn').click(function(e){
        // in real case we'll get these data using AJAX
        let content = '<div class="apart"><div class="apart__photos main_flex__nowrap flex__jcontent_between"><img class="apart__photo" src="images/content/apart_02_1.jpg" alt="Apartment Photo 1"><img class="apart__photo" src="images/content/apart_02_2.jpg" alt="Apartment Photo 2"></div><h3>Edition Residens /<span>Miami Beach, FL 33139</span></h3></div><!-- end of.apart -->';

        $('#gallery__box').append(content);
        $(this).remove();

        // and please, don't scroll our page to top :-)
        return false;
    });

// add modal form for calling to order
    $('#modal_box, #main_page__hide').hide(); 

    // show modal form when clicking "Call to order" link in the Header section
    $('#call_link').click(function(){
        $('#modal_box, #main_page__hide').show(); 
    });

    // close our modal form for several cases
    $('#modal_box__close, #main_page__hide').click(function(){
        $('#modal_box, #main_page__hide').hide(); 
    });

    $(document).on('keydown', function(e) {
        if (e.keyCode == 27) {  // if user click 'ESC' button
            $('#modal_box, #main_page__hide').hide(); 
        }            
    });
});
