import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
let targetDate;
const timer = document.querySelector('.timer');
const fieldEl = document.querySelectorAll('.field');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= Date.now()) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      targetDate = selectedDates[0].getTime();
    }
  },
};

flatpickr(inputEl, options);

startBtn.addEventListener('click', onStart);

function onStart() {
  const intervalId = setInterval(() => {
    const currentDate = Date.now();
    const { days, hours, minutes, seconds } = convertMs(
      targetDate - currentDate
    );
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
    timer.classList.add('timer-style');
    for (let i = 0; i < fieldEl.length; i += 1) {
      fieldEl[i].classList.add('field-style');
    }

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      onEnd(intervalId);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function onEnd(id) {
  clearInterval(id);
}
6;
