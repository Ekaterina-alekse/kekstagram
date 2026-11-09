import './validation.js';
import { resetScale, resetEffects } from './effects.js';

const uploadInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const body = document.body;

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    closeUploadForm();
  }
}

const closeUploadForm = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  form.reset();

  resetScale();
  resetEffects();

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
