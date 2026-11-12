import { getData } from './api.js';
import { renderMiniature } from './miniature-rendering.js';

import './upload-form.js';
import './effects.js';

const init = async () => {
  try {
    const photos = await getData();
    const picturesContainer = document.querySelector('.pictures');
    renderMiniature(photos, picturesContainer);
  } catch (error) {
    console.error('Не удалось инициализировать приложение:', error);
  }
};
init();
