// Функция для проверки длины строки
function checkStringLength(textToValidate, maxLength) {
  return textToValidate.length <= maxLength;
}

// Функция для проверки, является ли строка палиндромом.
function isPalindrome(string) {
  const cleaned = string.replaceAll(' ', '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function extractNumbers(input) {
  const string = input.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const number = parseInt(char, 10);
    if (!isNaN(number)) {
      result += char;
    }
  }
  return result === '' ? NaN : parseInt(result, 10);
}

// Переводит время в минуты
const getMinutes = (time) => {
  const [hours, minutes] = time.split(':');
  return Number(hours) * 60 + Number(minutes);
};

// Проверяет, укладывается ли встреча в рабочий день
const checkMeeting = (workStart, workEnd, meetingStart, duration) => {
  const workStartMinutes = getMinutes(workStart);
  const workEndMinutes = getMinutes(workEnd);
  const meetingStartMinutes = getMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + duration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
};
