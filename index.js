('use strict');

const leto = dayjs('2021-06-21');
const dnes = dayjs();
const pElm = document.querySelector('#main-text');

if (dayjs().isAfter(leto)) {
  pElm.textContent = 'ANO';
} else {
  pElm.textContent = 'NE';
}

/*const zadost = prompt('Zadejte svou e-mailovou adresu');

if (validator.isEmail(zadost)) {
  console.log('e-mail je v pořádku');
}
const pElm = document.querySelector('#msg');

if (validator.isEmail(zadost)) {
  pElm.textContent = 'e-mail je v pořádku';
  pElm.classList.add('msg--valid');
} else {
  pElm.textContent = 'váš e-mail není v pořádku';
  pElm.classList.add('msg--invalid');*/
