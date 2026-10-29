import { getRandomNumber, getRandomElement, getUniqueNumbers } from './util.js';
import { COMMENT_AUTHORS, COMMENT_MESSAGES, PHOTO_DESCRIPTIONS } from './data.js';
//СОЗДАНИЕ КОММЕНТАРИЕВ
let nextCommentId = 1;

function createComment() {
  const id = nextCommentId++;
  const avatar = `img/avatar-${getRandomNumber(1, 6)}.svg`;
  const name = getRandomElement(COMMENT_AUTHORS);
  const count = getRandomNumber(1, 2);
  const first = getRandomElement(COMMENT_MESSAGES);

  let message;
  if (count === 1) {
    message = first;
  } else {
    let second;
    do {
      second = getRandomElement(COMMENT_MESSAGES);
    } while (second === first);
    message = first + " " + second;
  }

  return { id, avatar, message, name };
}

function createComments() {
  const count = getRandomNumber(0, 30);
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(createComment());
  }
  return comments;
}

//СОЗДАНИЕ ФОТО
export function createPhoto(id) {
  const url = `photos/${id}.jpg`;
  const description = getRandomElement(PHOTO_DESCRIPTIONS);
  const likes = getRandomNumber(15, 200);
  const comments = createComments();
  return { id, url, description, likes, comments };
}

export function createPhotos() {
  const ids = getUniqueNumbers(25, 25);
  const photos = [];
  for (let i = 0; i < 25; i++) {
    photos.push(createPhoto(ids[i]));
  }
  return photos;
}
