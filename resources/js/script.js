
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




/*
animations on scroll


$('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated pulse');
  }, {
    offset: '50%'
  });

  $('.js--wp-btn').waypoint(function(direction) {
      $('.js--wp-btn').addClass('animated bounce');
  }, {
    offset: '100%'
});

*/

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


});
