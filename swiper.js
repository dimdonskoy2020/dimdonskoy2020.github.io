new Swiper('.swiper', {
  //Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loop: true,
  speed: 1000,
  freeMode: true,
  //Навигацияъ
  // буллеты, текущее положение, прогрессбар
  pagination: {
    el: '.swiper-pagination',
    // Буллеты
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16
    },
    // when window width is >= 480px
   
    // when window width is >= 640px
    768: {
       slidesPerView: 1.2,
      spaceBetween: 16
    }
  }
});
