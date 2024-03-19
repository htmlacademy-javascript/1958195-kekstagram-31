import { getRandomInteger, getRandomArrayElement, getNumberСopies, getCount } from './functions.js';
import { publicationComment } from './publication-comment.js';

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

const photo = () => ({
  url: `photos/${ countUrl() }.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comment: getNumberСopies(publicationComment, MIN_COMMENTS, MAX_COMMENTS),
});

const publicationPhoto = getNumberСopies(photo, NUMBER_PUBLICATION, NUMBER_PUBLICATION);

export {publicationPhoto};
