// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems
  .map(
    galleryItem => `<div class="gallery__item">
<a class="gallery__item" href="${galleryItem.original}">
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    alt="${galleryItem.description}"
  />
</a>
</div>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryItem);

console.log(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});