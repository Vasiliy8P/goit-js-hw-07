import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onGalleryItemClick);

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

galleryEl.innerHTML = galleryItemsMarkup;

function onGalleryItemClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return
    }

    const galleryLinkEl = event.target.closest('.gallery__link');
    const hrefOriginal = galleryLinkEl.href;

    const instance = basicLightbox.create(`
    <img src="${hrefOriginal}" width="800" height="600">
    `, {
        onShow: (instance) => {
            window.addEventListener('keydown', onModalCloseKeydown) 
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', onModalCloseKeydown)
        }
    });

    instance.show()
    
    function onModalCloseKeydown(event) {
        if (event.code !== 'Escape') {
                return;
            }

        instance.close()
    }
}
