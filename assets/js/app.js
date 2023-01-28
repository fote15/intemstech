/*
=====================
JS Table of Conttent 
=====================

*/
(function ($) {
  "use strict";
  /*
------------------------  
01. Preloader
--------------------------
*/
  $(window).on("load", function () {
    var preLoder = $(".preloader");
    preLoder.fadeOut(10);
  });
  /*
  ------------------------  
  03. Mean Menu
  --------------------------
  */
  $("#navbar-menu").meanmenu({
    meanScreenWidth: "1024",
    meanMenuContainer: ".meanmenu-container",
    meanMenuOpen: "<span></span><span></span><span></span>",
    meanMenuClose: "<span></span><span></span><span></span>",
    siteLogo: " ",
  });
  /*
  ------------------------  
  03. Active Menu
  --------------------------
  */
  $(document).ready(function () {
    $(".megamenu-1, .megamenu-area-1").hover(function () {
      $(".megamenu-area-1").toggleClass("active"); //Toggle the active class to the area is hovered
    });
    $(".megamenu-2, .megamenu-area-2").hover(function () {
      $(".megamenu-area-2").toggleClass("active"); //Toggle the active class to the area is hovered
    });
    $(".megamenu-3, .megamenu-area-3").hover(function () {
      $(".megamenu-area-3").toggleClass("active"); //Toggle the active class to the area is hovered
    });
    $(".toogle-search").click(function () {
      $(".search-area").toggleClass("active"); //Toggle the active class to the area is hovered
    });
    $(".toogle-sidebar").click(function () {
      $("body").toggleClass("active"); //Toggle the active class to the area is hovered
    });
  });
  /*
  ------------------------  
  02. Sticky Header
  --------------------------
  */
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
      $(".header-area").addClass("header-sticky");
    } else {
      $(".header-area").removeClass("header-sticky");
    }
  });
  /*
  ------------------------  
   23. Aos
  --------------------------
  */
  AOS.init({
    offset: 120,
    delay: 0,
    duration: 1000,
    easing: "ease",
    once: true,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  /*
  ------------------------  
   23. Slider
  --------------------------
  */
  var swiper = new Swiper(".themo_marketSwiper", {
    slidesPerView: "auto",
    spaceBetween: 40,
    pagination: {
      el: ".swiper-scrollbar",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".themo_marketSwiper2", {
    slidesPerView: "auto",
    spaceBetween: 40,
    pagination: {
      el: ".swiper-scrollbar",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
})(jQuery);
