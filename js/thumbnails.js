import { publicationPhoto } from './content.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailList = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const createThumbnail = (photo) => {
  const thumbnail = template.cloneNode(true);
  thumbnail.href = photo.url;
  thumbnail.dataset.id = photo.id;

  const image = thumbnail.querySelector('.picture__img');
  image.src = photo.url;
  image.alt = photo.alt;

  thumbnail.querySelector('.picture__comments').textContent = photo.comment.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;

  return thumbnail;
};

publicationPhoto.forEach((photo) => {
  const thumbnail = createThumbnail(photo);
  fragment.appendChild(thumbnail);
});

thumbnailList.appendChild(fragment);
