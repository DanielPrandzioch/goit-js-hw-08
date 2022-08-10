import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(localNote, 500));

const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

function localNote() {
  const formNote = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formNote));
}

function getLocalNote() {
  let localNote = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localNote !== null) {
    email.value = localNote.email;
    message.value = localNote.message;
  }
}

getLocalNote();

form.addEventListener('submit', submitNote);

function submitNote(e) {
  e.preventDefault();
  this.reset();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
}
