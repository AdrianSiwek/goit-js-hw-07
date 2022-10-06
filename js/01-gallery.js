import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector("div.gallery");
const instance = basicLightbox.create(`<img src="" />`);

const newImg = galleryItems
    .map(
        (image) => `<div class="gallery_item">
    <a class="gallery__links" href="${image.original}">
    <image
    class="gallery_img"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
    />
    </a>
    </div>`
    )
    .join = ("");

gallery.insertAdjacentHTML("beforeend", newImg);
gallery.addEventListener("click", onOpenModal);

const url = instance.element().querySelector("img");


console.log(galleryItems);
