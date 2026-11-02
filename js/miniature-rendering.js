import { renderBigPicture } from './big-picture.js';

export function renderMiniature(photos, container) {
  const template = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const miniature = template.cloneNode(true);
    miniature.querySelector('.picture__img').src = photo.url;
    miniature.querySelector('.picture__img').alt = photo.description;
    miniature.querySelector('.picture__likes').textContent = photo.likes;
    miniature.querySelector('.picture__comments').textContent = photo.comments.length;

    miniature.addEventListener('click', (evt) => {
      evt.preventDefault();
      renderBigPicture(photo);
    });

    fragment.appendChild(miniature);
  });

  container.appendChild(fragment);
}
