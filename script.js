const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function rotater(element, rotation) {
  element.style.setProperty('--rotation', rotation * 360);
}

function clock() {
  const date = new Date();
  const second = date.getSeconds() / 60;
  const minutes = (second + date.getMinutes()) / 60;
  const hours = (minutes + date.getHours()) / 12;
  rotater(sec, second);
  rotater(min, minutes);
  rotater(hour, hours);
}

setInterval(clock, 1000);
clock();
