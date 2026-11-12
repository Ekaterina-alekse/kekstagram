import { getData } from './api.js';
import { renderMiniature } from './miniature-rendering.js';
import './upload-form.js';
import './effects.js';

const showDataError = () => {
  const errorTemplate = document.querySelector('#data-error').content;
  const errorElement = errorTemplate.firstElementChild.cloneNode(true);

  document.body.appendChild(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, 5000);
};

const init = async () => {
  try {
    const photos = await getData();
    const picturesContainer = document.querySelector('.pictures');

    renderMiniature(photos, picturesContainer);
  } catch (error) {
    console.error('Не удалось загрузить фотографии:', error);
    showDataError();
  }
};

init();
