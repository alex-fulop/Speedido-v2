(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();

$('.card-t1').hover(() => {
  $('.card-t2').removeClass('card-hl');
  $('.card-t2').find('#btn-2').removeClass('btn-t3');
});

$('.card-t1').mouseleave(() => {
  $('.card-t2').addClass('card-hl');
  $('.card-t2').find('#btn-2').addClass('btn-t3');
});


