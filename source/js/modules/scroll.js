const buttonBuy = document.querySelector('[data-buy="price"]');
const scrollPriceSection = document.querySelector('[data-price="btn"]');

buttonBuy.addEventListener('click', function () {
  scrollPriceSection.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
  });
});

export {scrollPriceSection};
