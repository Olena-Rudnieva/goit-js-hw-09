const buttonEl = document.querySelector('.form button');
const firstDelayEl = document.querySelector('input[name="delay"]');
const delayStepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

firstDelayEl.addEventListener('input', onFirstDelay);
amountEl.addEventListener('input', onAmountPromises);
delayStepEl.addEventListener('input', onDelayStep);
buttonEl.addEventListener('click', onCreatePromiseBtn);

function onFirstDelay(value) {
  console.log(firstDelayEl.value);
}

function onDelayStep() {
  console.log(delayStepEl.value);
}

function onAmountPromises(number) {
  console.log(amountEl.value);
}

function onCreatePromiseBtn() {
  let amountNumber = amountEl.value;
  let firstDelayOption = firstDelayEl.value;
  let delayStepOption = delayStepEl.value;


  for (let i = 1; i <= amountNumber; i += 1) {
    createPromise(i, firstDelayOption*i, delayStepOption)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      })  
      .finally(() => {
        console.log('тест');
      
      
    })
    
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


