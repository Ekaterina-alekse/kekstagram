const showAlert = (templateId, onClose) => {
  const template = document.querySelector(templateId).content;
  const alertElement = template.firstElementChild.cloneNode(true);

  document.body.appendChild(alertElement);

  const closeAlert = () => {
    alertElement.remove();
    document.removeEventListener('keydown', onEscKeyDown);
    document.removeEventListener('click', onOutsideClick);
    if (onClose) onClose();
  };

  function onEscKeyDown(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      evt.stopPropagation();
      closeAlert();
    }
  }

  const onOutsideClick = (evt) => {
    const innerBlock = alertElement.querySelector('.success__inner, .error__inner');
    if (innerBlock && !innerBlock.contains(evt.target)) {
      closeAlert();
    }
  };

  const button = alertElement.querySelector('button');

  if (button) {
    button.addEventListener('click', closeAlert);
  }

  document.addEventListener('keydown', onEscKeyDown);

  setTimeout(() => {
    document.addEventListener('click', onOutsideClick);
  }, 0);
};

export const showSuccess = (onClose) => showAlert('#success', onClose);
export const showError = (onClose) => showAlert('#error', onClose);
