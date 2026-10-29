//ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomElement(arr) {
  const index = getRandomNumber(0, arr.length - 1);
  return arr[index];
}

export function getUniqueNumbers(count, max) {
  let result = [];
  while (result.length < count) {
    const num = getRandomNumber(1, max);
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
