const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form);

const hashtagsInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');

//ВАЛИДАЦИЯ ХЭШТЕГОВ

const hashtagRegex = /^#[a-zа-яё0-9]{1,19}$/i;

const isValidHashtag = (tag) => hashtagRegex.test(tag);

const validateHashtagsFormat = (value) => {
  if (!value.trim()) return true; // Если пусто — это ок

  const tags = value.toLowerCase().trim().split(/\s+/);
  return tags.every(isValidHashtag);
};

const validateHashtagsCount = (value) => {
  if (!value.trim()) return true;
  const tags = value.trim().split(/\s+/);
  return tags.length <= 5;
};

const validateHashtagsUnique = (value) => {
  if (!value.trim()) return true;
  const tags = value.toLowerCase().trim().split(/\s+/);
  return new Set(tags).size === tags.length;
};

pristine.addValidator(hashtagsInput, validateHashtagsFormat, 'Ошибка формата хэштега');
pristine.addValidator(hashtagsInput, validateHashtagsCount, 'Слишком много хэштегов');
pristine.addValidator(hashtagsInput, validateHashtagsUnique, 'Хэштеги повторяются');

//ВАЛИДАЦИЯ КОММЕНТАРИЯ

const validateDescription = (value) => {
  return value.length <= 140;
};

pristine.addValidator(descriptionInput, validateDescription, 'Комментарий слишком длинный');

//ОТПРАВКА ФОРМЫ

form.addEventListener('submit', (evt) => {

  const isValid = pristine.validate();

  if (!isValid) {
    evt.preventDefault();
    console.log('Форма невалидна, отправка отменена');
  }
});
