!(function($) {
    "use strict";

     // Events carousel (uses the Owl Carousel library)
  $(".events-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);

$(document).ready(function() {
  $(".dropdown-toggle").dropdown();
});