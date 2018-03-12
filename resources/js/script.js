
$(document).ready(function() {


    $(document).ready(function() {

      $(".your-class").slick({
        // dots: true,
        arrows:true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToShow: 10,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      });


});

$('.js--features').waypoint(function(direction) {
  if(direction == "down"){

    $('nav').addClass('sticky');

  } else {

    $('nav').removeClass('sticky');
  }

});

$('.js-nav-icon').click(function(){

    var nav = $('.js-main-nav');
    var icon = $('.js-nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon')){

      icon.addClass('ion-ios-close-outline');
      icon.removeClass('ion-navicon');

    } else {

      icon.addClass('ion-navicon');
      icon.removeClass('ion-ios-close-outline');

    }
});
/* this code is for the navigation */


  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


});
