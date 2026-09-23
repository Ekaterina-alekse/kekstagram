import { getRandomNumber, getRandomElement } from './util.js';

const COMMENT_AUTHORS = [... ];
const COMMENT_MESSAGES = [... ];
const PHOTO_DESCRIPTIONS = [... ];

const PHOTO_COUNT = 25;
const MIN_LIKES = 15;
// ... остальные константы

let nextCommentId = 1;

const createComment = () => {
  // ... (код без изменений)
};

const createPhoto = (index) => {
  // ... (код без изменений)
};

const generatePhotos = () =>
  Array.from({ length: PHOTO_COUNT }, (_, index) =>
    createPhoto(index + 1)
  );

export { generatePhotos };
