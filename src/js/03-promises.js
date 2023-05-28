import Notiflix from 'notiflix';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

const firstDelayEl = document.querySelector('input[name="delay"]');
const delayStepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');
const formEl = document.querySelector('.form');

firstDelayEl.addEventListener('input', onFirstDelay);
amountEl.addEventListener('input', onAmountPromises);
delayStepEl.addEventListener('input', onDelayStep);
formEl.addEventListener('submit', onSubmitForm);

function onFirstDelay() {
  let firstDelayOption = firstDelayEl.value;
  return firstDelayOption;
}

function onDelayStep() {
  let delayStepOption = delayStepEl.value;
  return delayStepOption;
}

function onAmountPromises() {
  let amountNumber = amountEl.value;
  return amountNumber;
}

function onSubmitForm(e) {
   e.preventDefault();
  let promiseNumber = onAmountPromises();
  let delay = Number(onFirstDelay());
  let step = Number(onDelayStep());
  
  for (let i = 1; i <= promiseNumber; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
