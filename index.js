setInterval(setClock, 1000);

const hourHandle = document.querySelector('[data-hour]');
const hourHandle = document.querySelector('[data-hour]');
const hourHandle = document.querySelector('[data-hour]');

const setClock() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hour = (minutes + currentDate.getHours()) / 12;
}