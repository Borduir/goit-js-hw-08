import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = document.querySelector('[name=email]');
const message = document.querySelector('[name=message]');

const currentForm = {
  mail: '',
  mes: '',
};

try {
  const savedForm = JSON.parse(localStorage.getItem('feedback-form-state'));
  email.value = savedForm.mail;
  message.value = savedForm.mes;
} catch {}

form.addEventListener(
  'input',
  throttle(function () {
    currentForm.mail = email.value;
    currentForm.mes = message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(currentForm));
    console.log(localStorage);
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(currentForm);
  localStorage.clear();
  form.reset();
});
