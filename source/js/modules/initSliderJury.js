import Swiper from '../vendor/swiper';

const initSliderJury = () => {
  if ('.gallary') {
    new Swiper('.gallary', {
      navigation: {
        nextEl: '.jury__btn-next',
        prevEl: '.jury__btn-prev',
      },

      direction: 'horizontal',
      loop: true,
      spaceBetween: 40,
      slidesPreView: 4,

      breakpoints: {
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  };

  export { initSliderJury };
};
