import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const imgs = {
	gallery: document.querySelector(".gallery"),
};
createImageGallery();

function createImageGallery() {
	const newGalleryItems = galleryItems
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
      <img class="gallery__image"
        src="${preview}"
        alt="${description}"/>
      </a>`;
		})
    .join("");
  imgs.gallery.insertAdjacentHTML('afterbegin', newGalleryItems);
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});