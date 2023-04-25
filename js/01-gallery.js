import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryCont = document.querySelector(".gallery");

const gallery = createImgGallery(galleryItems);
galleryCont.insertAdjacentHTML("beforeend", gallery)

function createImgGallery() {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    }).join(" ")
}

const instances = [];

galleryCont.addEventListener("click", (e) => {
   
    e.preventDefault()
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

    

     
     instance.show();
     
})

