function getStringLengrh (string, number) {
  if (string.length <= number) {
    return true;
  }

  return false;
}

// Строка короче 20 символов
console.log(getStringLengrh('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(getStringLengrh('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(getStringLengrh('проверяемая строка', 10)); // false

function checkPalindrome (string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();

  const standartlWord = string;
  let invertedWord = [];

  for (let i = standartlWord.length - 1; i !== -1; i--) {
    invertedWord += standartlWord[i];
  }

  if (invertedWord === standartlWord) {
    return true;
  }

  return false;
}

// Строка является палиндромом
console.log(checkPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(checkPalindrome('ДовОд')); // true
// Это не палиндром
console.log(checkPalindrome('Кекс')); // false
// Это палиндром
console.log(checkPalindrome('Лёша на полке клопа нашёл ')); // true
