const NAMES = [
  'Алина',
  'Иван',
  'Елена',
  'Максим',
  'Анна',
  'Дмитрий',
  'Ольга',
  'Артем',
  'Надежда',
  'Сергей'
];

const DESCRIPTION = [
  'Закат на пляже',
  'Цветущий сад',
  'Городские огни',
  'Дикие лошади',
  'Морская гладь',
  'Радуга после дождя',
  'Лесной туман',
  'Играющие дети',
  'Заснеженные горы',
  'Поле подсолнухов'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomInteger = (min, max) => {
  const randomInteger = min + Math.random() * (max + 1 - min);
  return Math.floor(randomInteger);
};

const getRandomArrayElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getCount = (count) => function () {
  return count++;
};

const countId = getCount(1);
const countUrl = getCount(1);

const createComment = () => ({
  id: countId(),
  url: `photos/${ countUrl() }.jpg`,
  description: getRandomArrayElements(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  avatar: `img/avatar-${ getRandomInteger(1, 6) }.jpg`,
  comments: getRandomArrayElements(COMMENTS),
  userName: getRandomArrayElements(NAMES),
});

const similarComments = Array.from({length: 25}, createComment);

// console.table(similarComments);
