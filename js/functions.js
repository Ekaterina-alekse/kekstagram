// Функция для проверки длины строки
function lenghtLine(line, maxLength) {
  return line.length <= maxLength;
}

// Функция для проверки, является ли строка палиндромом.

function isPalindrome(line) {
  const normalized = line.replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed += normalized[i];
  }
  return normalized === reversed;
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
