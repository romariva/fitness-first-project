import Swiper from '../vendor/swiper';

const initSliderJury = () => {
  const gallarySlider = document.querySelector('[data-swiper="jury"]');
  const btnPrev = document.querySelector('[data-button="prev"]');
  const btnNext = document.querySelector('[data-button="next"]');
  // eslint-disable-next-line no-constant-condition
  if (gallarySlider) {
    // eslint-disable-next-line no-new
    new Swiper(gallarySlider, {

      navigation: {
        nextEl: btnPrev,
        prevEl: btnNext,
      },

      direction: 'horizontal',
      loop: true,

      breakpoints: {
        1366: {
          slidesPerView: 3,
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
  }
};

export {initSliderJury};
