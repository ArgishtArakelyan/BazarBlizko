$(window).bind("scroll", function () {
  previousTop: 0;
  var currentTop = $(window).scrollTop();
  if (currentTop < this.previousTop) {
    $("header.new-header").addClass("fixed_scroll");
  } else {
    $("header.new-header").removeClass("fixed_scroll");
  }
  this.previousTop = currentTop;
});



 
$(document).ready(function () {
    $(".HomeSlider .slider").owlCarousel({
    loop: true,
    nav: true,
    margin: 12,
    dots: true,
    responsive: {
        0: {
        items: 1,
        },
        768: {
        items: 2,
        },
        1100: {
        items: 3,
        },
    },
    });

  $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
  $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});

$(".ScrollProductCategories").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $(".ProductCategories").offset().top,
    },
    1200
  );
});


