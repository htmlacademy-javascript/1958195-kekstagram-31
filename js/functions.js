function checkStringLength (text, number) {
  return text.length <= number;
}

function checkPalindrome (text) {
  text = text.replaceAll(' ', '').toLowerCase();
  const reversedText = text.split('').reverse().join('');
  return reversedText === text;
}

function getNumbers (text) {
  return parseInt(text.replace(/[^0-9]/g,''), 10);
}
