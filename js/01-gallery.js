import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryCont = document.querySelector(".gallery");

const gallery = createImgGallery(galleryItems);
galleryCont.insertAdjacentHTML("beforeend", gallery)

function createImgGallery() {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
    <a class="gallery__link" href="${original}" data-original-img=${original}>
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
`;
    }).join(" ")
}

const instances = [];

galleryCont.addEventListener("click", (e) => {
    e.preventDefault()
        const original = e.target

          .closest(".gallery__link")
          .getAttribute("data-original-img");
    
    const instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
`);

    

     instances.push(instance); // Add instance to array
     instance.show();
     
})

