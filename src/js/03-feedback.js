import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const data = JSON.parse(localStorage.getItem('feedback-form-state'));

if (data) {
  input.value = data.email || '';
  textarea.value = data.message || '';
}

form.addEventListener('input', e => {
  const {
    elements: { email, message },
  } = e.currentTarget;
  throttle(
    () =>
      localStorage.setItem(
        'feedback-form-state',
        JSON.stringify({ email: email.value, message: message.value })
      ),
    500
  )();
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  console.log({ email: email.value, message: message.value });
  localStorage.clear();
  e.currentTarget.reset();
});
