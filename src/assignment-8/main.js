// TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap';
import { images } from "./images";

for (let m of images) {
  let m_thumb = document.getElementById('m' + m.id);
  m_thumb.innerHTML = `
    <img src="${m.thumbnails}" alt="${m.title}" class="img-thumbnail"/>
  `;

  m_thumb.onclick = function() {
    displayimages(m);
  };
}

let featured_images = document.querySelector(".featured");
function displayimages(images) {
  featured_images.innerHTML = `
    <div class="card">
      <img src="${images.thumbnails}" class="card-img-top" alt="${images.title}">
      <div class="card-body">
        <h5 class="card-title">${images.title}</h5>
        <p class="card-text">${images.description}</p>
      </div>
    </div>
  `;
}