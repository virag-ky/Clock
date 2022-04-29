const hourHandle = document.querySelector("[data-hour]");
const minuteHandle = document.querySelector("[data-minute]");
const secondHandle = document.querySelector("[data-second]");

const setClock = () => {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hour = (minutes + currentDate.getHours()) / 12;
  setRotation(secondHandle, seconds);
  setRotation(minuteHandle, minutes);
  setRotation(hourHandle, hour);
};

const setRotation = (element, rotation) => {
  element.style.setProperty("--rotation", rotation * 360);
};

setInterval(setClock, 1000);
