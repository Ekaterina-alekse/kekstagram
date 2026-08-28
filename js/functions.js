// Функция для проверки длины строки
function checkStringLenght(textToValidate, maxLength) {
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
