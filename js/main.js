import { generatePhotos } from './data.js';

const photos = generatePhotos();

console.log('Всего фотографий:', photos.length);
console.log('Первая фотография:', photos[0]);
