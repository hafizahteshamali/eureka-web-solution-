const swiper = new Swiper(".slider", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });