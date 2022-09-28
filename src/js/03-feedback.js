import throttle from 'lodash.throttle';

form = document.querySelector('.feedback-form');
email = document.querySelector('[name=email]');
message = document.querySelector('[name=message]');

currentForm = {
  mail: '',
  mes: '',
};

try {
  savedForm = JSON.parse(localStorage.getItem('feedback-form-state'));
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

form.addEventListener('submit', () => {
  console.log('curretForm');
  localStorage.clear();
});
