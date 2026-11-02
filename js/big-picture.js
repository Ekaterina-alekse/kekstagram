const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const pictureCaption = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const loadButton = bigPicture.querySelector('.comments-loader');
const socialComment = socialComments.querySelector('.social__comment');

const COMMENTS_STEP = 5;

let currentComments = [];
let shownCommentsCount = 0;

const toggleModal = () => {
  bigPicture.classList.toggle('hidden');
  document.body.classList.toggle('modal-open');
};

const show = (picture) => {
  bigPictureImage.src = picture.url;
  likesCount.textContent = picture.likes;
  pictureCaption.textContent = picture.description;
};

const createComment = (comment) => {
  const newComment = socialComment.cloneNode(true);
  newComment.querySelector('.social__picture').src = comment.avatar;
  newComment.querySelector('.social__picture').alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;
  return newComment;
};

const renderComments = () => {
  shownCommentsCount += COMMENTS_STEP;
  const commentsToRender = currentComments.slice(0, shownCommentsCount);

  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();

  commentsToRender.forEach((comment) => {
    fragment.appendChild(createComment(comment));
  });
  socialComments.appendChild(fragment);

  socialCommentsCount.innerHTML = `<span class="social__comment-shown-count">${commentsToRender.length}</span> из <span class="social__comment-total-count">${currentComments.length}</span> комментариев`;

  if (commentsToRender.length >= currentComments.length) {
    loadButton.classList.add('hidden');
  } else {
    loadButton.classList.remove('hidden');
  }
};

const onLoadMoreClick = () => {
  renderComments();
};

export function renderBigPicture(picture) {
  currentComments = picture.comments;
  shownCommentsCount = 0;

  show(picture);

  renderComments();

  socialCommentsCount.classList.remove('hidden');

  loadButton.addEventListener('click', onLoadMoreClick);

  toggleModal();
}

const closeBigPicture = () => {
  toggleModal();
  loadButton.removeEventListener('click', onLoadMoreClick);
};

bigPictureCancel.addEventListener('click', closeBigPicture);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && !bigPicture.classList.contains('hidden')) {
    closeBigPicture();
  }
});
