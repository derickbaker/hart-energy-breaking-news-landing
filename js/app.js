$(window).load(function() { // makes sure the whole site is loaded

    "use strict";

    document.body.className += ' loaded'
    
    $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('#preloader .inner').fadeOut(); // will first fade out the loading animation

    var wow = new WOW({
        offset:100,        // distance to the element when triggering the animation (default is 0)
        mobile:false       // trigger animations on mobile devices (default is true)
    });
    wow.init();


 
})

$(document).ready(function() {
  $('.learnmore').click(function(e){
      e.preventDefault();
      $('#one').ScrollTo();
  });

  $('.download').click(function(e){
      e.preventDefault();
      $('#two').ScrollTo();
  });

});