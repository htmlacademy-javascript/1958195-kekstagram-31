import { getRandomInteger, getRandomArrayElement, getNumberСopies, getCount } from './utils.js';

// Комментарии

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

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MIN_RANGE_AVATAR = 1;
const MAX_RANGE_AVATAR = 6;

const MIN_MESSAGES = 1;
const MAX_MESSAGES = 2;

const countId = getCount(1);

const getRandomeMessage = (array) => {
  let message = getRandomArrayElement(array);
  const numberMessages = getRandomInteger(MIN_MESSAGES, MAX_MESSAGES);

  if (numberMessages === MAX_MESSAGES) {
    message = message.concat([getRandomArrayElement(array)]);
    return message;
  }

  return message;
};

const getComment = () => ({
  id: countId(),
  avatar: `img/avatar-${ getRandomInteger(MIN_RANGE_AVATAR, MAX_RANGE_AVATAR) }.jpg`,
  message: getRandomeMessage(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

// Публикация фото

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
  'Поле подсолнухов',
];

const NUMBER_PUBLICATION = 25;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const countUrl = getCount(1);
const countThumbnailId = getCount(1);

const getPhoto = () => ({
  id: `thumbnail-id-${ countThumbnailId() }`,
  url: `photos/${ countUrl() }.jpg`,
  alt: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comment: getNumberСopies(getComment, MIN_COMMENTS, MAX_COMMENTS),
});

const publicationPhoto = getNumberСopies(getPhoto, NUMBER_PUBLICATION, NUMBER_PUBLICATION);

export {publicationPhoto};
