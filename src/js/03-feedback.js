const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedbak-form-state';

const data = {
  email: '',
  message: '',
};

const saveData = () => {
  data.email = emailEl.value;
  data.message = messageEl.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};

formEl.addEventListener('input', throttle(saveData, 500));

const pageReload = () => {
  const storageStatus = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (storageStatus) {
    emailEl.value = storageStatus.email;
    messageEl.value = storageStatus.message;
    data.email = storageStatus.email;
    data.message = storageStatus;
  } else {
    emailEl.value = '';
    messageEl.value = '';
  }
};
pageReload();

formEl.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  saveData();
});
