$(function(){

    "use strict";

// open or close #info__box by clicking on #info
    $('#info').click( function() {
        $('#info__box').toggleClass('open');
    } );

// open or close menu by clicking on #menu_btn (for mobile devices only)
    $('#menu_btn').click(function() {
        $('.menu').toggleClass('open');
    });

});
