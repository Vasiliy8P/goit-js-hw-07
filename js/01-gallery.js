import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onGalleryItemClick);
window.addEventListener('keydown', onModalCloseKeydown)

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(items) {
    return items.map(({preview, original, description}) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    ).join('');
}

console.log(galleryItemsMarkup);

galleryEl.innerHTML = galleryItemsMarkup;

function onGalleryItemClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return
    }

    const galleryLinkEl = event.target.closest('.gallery__link');
    const hrefOriginal = galleryLinkEl.href

    const instance = basicLightbox.create(`
    <img src="${hrefOriginal}" width="800" height="600">
    `)

    instance.show()
}

// function onModalCloseKeydown(event) {
//     instance.close()
// }

