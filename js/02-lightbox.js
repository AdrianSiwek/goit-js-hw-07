import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector("ul.gallery");


const newImg = galleryItems
    .map(
        (image) =>
            `<a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>`
    )
    .join("");

gallery.insertAdjacentHTML("beforeend", newImg);

const light = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
    captionPosition: "top",
});

console.log(galleryItems);
