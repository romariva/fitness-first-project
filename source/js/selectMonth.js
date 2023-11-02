const buttonMonth1 = document.querySelector('.price__button1');
const buttonMonth6 = document.querySelector('.price__button6');
const buttonMonth12 = document.querySelector('.price__button12');

buttonMonth1.addEventListener('click', function () {
  priceSelect.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
  });
});

export {priceSelect};
