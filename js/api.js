const SERVER_URL = 'https://32.javascript.htmlacademy.pro/kekstagram/data';

const getData = async () => {
  try {
    const response = await fetch(`${SERVER_URL}`);

    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Не удалось получить данные:', error);
    throw error;
  }
};

const sendData = async (formData) => {
  try {
    const response = await fetch(SERVER_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Ошибка отправки: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Не удалось отправить данные:', error);
    throw error;
  }
};

export { getData, sendData };
