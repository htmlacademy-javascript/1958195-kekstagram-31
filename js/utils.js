// function checkStringLength (text, number) {
//   return text.length <= number;
// }

// function checkPalindrome (text) {
//   text = text.replaceAll(' ', '').toLowerCase();
//   const reversedText = text.split('').reverse().join('');
//   return reversedText === text;
// }

// function getNumbers (text) {
//   return parseInt(text.replace(/[^0-9]/g,''), 10);
// }

const getRandomInteger = (min, max) => {
  const randomInteger = min + Math.random() * (max + 1 - min);
  return Math.floor(randomInteger);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getNumberСopies = (object, min, max) => Array.from({length: getRandomInteger(min, max)}, object);

const getCount = (count) => function () {
  return count++;
};

export {getRandomInteger, getRandomArrayElement, getNumberСopies, getCount};
