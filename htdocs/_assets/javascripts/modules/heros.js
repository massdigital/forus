$(document).ready(function() {
  "use strict";
  $(".js--main-hero").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 7000,
    //centerMode: true,
    initialSlide: 0
  });
  $(".js--slot-kit").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    //autoplay: true,
    arrows: false,
    //autoplaySpeed: 10000,
    //centerMode: true,
    initialSlide: 0
  });
  $(".js--mobile-feature").slick({
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 4,
    touchMove: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
  $(".js-carrousel-content").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    //autoplay: true,
    arrows: false,
    //autoplaySpeed: 10000,
    centerMode: true,
    initialSlide: 0,
    variableWidth: true,
  });

});
function thumbsCarousel() {
  "use strict";
  $(".js-product-carousel .thumbs").slick({
    lazyLoad: "ondemand",
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: false,
    centerPadding: "60px",
    slidesToShow: 5,
    slidesToScroll: 5,
    touchMove: true,
    arrows: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          dots: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          lazyLoad: "ondemand",

          centerMode: false,
          centerPadding: "150px",
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
    ]
  });

}
function unSlickCarousel() {
  "use strict";
  if($("js-product-carousel").hasClass("slick-initialized")){
    $(".skills_section").slick("unslick");
  }

}
thumbsCarousel();
unSlickCarousel();
