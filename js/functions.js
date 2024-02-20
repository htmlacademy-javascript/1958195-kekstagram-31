function checkStringLength (text, number) {
  return text.length <= number;
}

checkStringLength('проверяемая строка', 20);

function checkPalindrome (text) {
  text = text.replaceAll(' ', '').toLowerCase();
  const reversedText = text.split('').reverse().join('');
  return reversedText === text;
}

checkPalindrome('Лёша на полке клопа нашёл ');

function getNumbers (text) {
  return parseInt(text.replace(/[^0-9]/g,''), 10);
}

getNumbers('1 кефир, 0.5 батона');
