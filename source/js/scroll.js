const buttonBuy = document.querySelector('.hero__button');
const priceSection = document.querySelector('.price');

buttonBuy.addEventListener('click', function () {
  priceSection.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
  });
});

export {priceSection};
