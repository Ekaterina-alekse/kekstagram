const imgPreview = document.querySelector('.img-upload__preview img');

const scaleInput = document.querySelector('.scale__control--value');
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
let currentScale = 100;

const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelBlock = document.querySelector('.img-upload__effect-level');
const effectsRadios = document.querySelectorAll('.effects__radio');

const EFFECTS = {
  none: { min: 0, max: 100, step: 1, filter: '', unit: '' },
  chrome: { min: 0, max: 1, step: 0.1, filter: 'grayscale', unit: '' },
  sepia: { min: 0, max: 1, step: 0.1, filter: 'sepia', unit: '' },
  marvin: { min: 0, max: 100, step: 1, filter: 'invert', unit: '%' },
  phobos: { min: 0, max: 3, step: 0.1, filter: 'blur', unit: 'px' },
  heat: { min: 1, max: 3, step: 0.1, filter: 'brightness', unit: '' },
};

let currentEffect = 'none';

noUiSlider.create(effectLevelSlider, {
  range: { min: 0, max: 100 },
  start: 100,
  step: 1,
  connect: 'lower',
});

effectLevelBlock.classList.add('hidden');

const applyScale = (value) => {
  scaleInput.value = `${value}%`;
  imgPreview.style.transform = `scale(${value / 100})`;
};

smallerButton.addEventListener('click', () => {
  if (currentScale > MIN_SCALE) {
    currentScale -= SCALE_STEP;
    applyScale(currentScale);
  }
});

biggerButton.addEventListener('click', () => {
  if (currentScale < MAX_SCALE) {
    currentScale += SCALE_STEP;
    applyScale(currentScale);
  }
});

const applyEffect = (value) => {
  effectLevelValue.value = value;

  const effect = EFFECTS[currentEffect];

  if (currentEffect === 'none') {
    imgPreview.style.filter = 'none';
  } else {
    imgPreview.style.filter = `${effect.filter}(${value}${effect.unit})`;
  }
};

effectLevelSlider.noUiSlider.on('update', (values) => {
  applyEffect(values[0]);
});

effectsRadios.forEach((radio) => {
  radio.addEventListener('change', (evt) => {
    currentEffect = evt.target.value;

    if (currentEffect === 'none') {
      effectLevelBlock.classList.add('hidden');
      imgPreview.style.filter = 'none';
      effectLevelValue.value = '';
    } else {
      effectLevelBlock.classList.remove('hidden');

      const effect = EFFECTS[currentEffect];

      effectLevelSlider.noUiSlider.updateOptions({
        range: { min: effect.min, max: effect.max },
        start: effect.max,
        step: effect.step,
      });
    }
  });
});

export const resetScale = () => {
  currentScale = 100;
  applyScale(currentScale);
};

export const resetEffects = () => {
  currentEffect = 'none';
  effectsRadios[0].checked = true;
  effectLevelBlock.classList.add('hidden');
  imgPreview.style.filter = 'none';
  effectLevelValue.value = '';
  // Возвращаем слайдер в исходное состояние
  effectLevelSlider.noUiSlider.updateOptions({
    range: { min: 0, max: 100 },
    start: 100,
    step: 1,
  });
};
