import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

function createGalleryCardsMarkup(galleryItem) {
    return galleryItem
      .map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `;
        })
    .join('');
};

galleryEl.insertAdjacentHTML('beforeend', cardsMarkup);

new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
    }
);
    
// galleryEl.addEventListener('click', onGalleryItemClick);

// function onGalleryItemClick(e) {
//     e.preventDefault();

//     const isImg = e.target.classList.contains('gallery__image');
//     if (!isImg) {
//         return;
//     };

//     new SimpleLightbox('.gallery a',
//         {
//             captionsData: 'alt',
//             captionDelay: 250,
//             navText: ['&larr;', '&rarr;'],
//         }
//     );
// };