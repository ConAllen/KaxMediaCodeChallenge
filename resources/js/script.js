
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
        autoplaySpeed: 3000,
        slidesToShow: 10,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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
        slidesToShow: 1,
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

});
