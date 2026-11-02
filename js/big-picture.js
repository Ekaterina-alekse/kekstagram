const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const pictureCaption = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const loadButton = bigPicture.querySelector('.comments-loader');
const socialComment = socialComments.querySelector('.social__comment');

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

const renderComments = (comments) => {
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    fragment.appendChild(createComment(comment));
  });

  socialComments.appendChild(fragment);
};

export function renderBigPicture(picture) {
  show(picture);
  renderComments(picture.comments);

  socialCommentsCount.classList.add('hidden');
  loadButton.classList.add('hidden');

  toggleModal();
}

bigPictureCancel.addEventListener('click', () => {
  toggleModal();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && !bigPicture.classList.contains('hidden')) {
    toggleModal();
  }
});
