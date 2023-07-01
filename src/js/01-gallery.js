import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryMap = galleryItems
  .map(item => {
    galleryEl.insertAdjacentHTML(
      'beforeend',
      `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
      <img 
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      />
      </a>
      </div`
    );
  })
  .join('');

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
