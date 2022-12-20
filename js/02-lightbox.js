import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onGalleryItemClick);

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}"/>
        </a>`).join('');
}

galleryEl.innerHTML = galleryItemsMarkup;

function onGalleryItemClick(event) {
    event.preventDefault();
    const gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
}