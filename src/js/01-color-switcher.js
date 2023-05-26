const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.body;
let timerId = null;

buttonStart.addEventListener('click', onButtonStart);
buttonStop.addEventListener('click', onButtonStop);

function onButtonStart() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.disabled = true;
}

function onButtonStop() {
  clearInterval(timerId);
  buttonStart.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
