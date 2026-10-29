import { createPhotos } from './photo.js';
import { renderMiniature } from './miniature-rendering.js';

const photos = createPhotos();
const picturesContainer = document.querySelector('.pictures');
renderMiniature(photos, picturesContainer);
