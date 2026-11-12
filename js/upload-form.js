import { showSuccess, showError } from './alerts.js';
import { sendData } from './api.js';
import './validation.js';
import { resetScale, resetEffects } from './effects.js';

const uploadInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const body = document.body;
const submitButton = form.querySelector('.img-upload__submit');

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    const isAlertOpen = document.querySelector('.success') || document.querySelector('.error');
    if (isAlertOpen) {
      return;
    }

    closeUploadForm();
  }
}

const closeUploadForm = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
  resetScale();
  resetEffects();
  uploadInput.value = '';
  document.removeEventListener('keydown', onEscKeyDown);
};

uploadInput.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
});

uploadCancel.addEventListener('click', closeUploadForm);

const hashtagsInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');

hashtagsInput.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

descriptionInput.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  const formData = new FormData(form);
  submitButton.disabled = true;

  try {
    await sendData(formData);
    closeUploadForm();
    showSuccess();

  } catch (error) {
    showError();
  } finally {
    submitButton.disabled = false;
  }
});
