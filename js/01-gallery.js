import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

function createGalleryCardsMarkup(galleryItem) {
    return galleryItem
      .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
        })
    .join('');
};

galleryEl.insertAdjacentHTML('beforeend', cardsMarkup);
galleryEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
    e.preventDefault();

    const isImg = e.target.classList.contains('gallery__image');
    if (!isImg) {
        return;
    }

    const urlImg = e.target.getAttribute('data-source');
    const instance = basicLightbox.create(`
        <img src="${urlImg}" width="800" height="600">
        `);
    
    instance.show();

    galleryEl.addEventListener("keydown", closeModalWindowEscBtn);

    function closeModalWindowEscBtn(e) {
        if (e.code === 'Escape') {
            instance.close();
        };
    };
};