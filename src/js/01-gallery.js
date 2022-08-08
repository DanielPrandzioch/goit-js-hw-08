// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href="${image.original}"> <img class= "gallery__image" src="${image.preview}" 
 alt="${image.description}"></a>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', markup);

console.log(galleryItems);


let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});