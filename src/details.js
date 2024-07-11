import { getData } from "../src/functions.js";

function createDetails(element) {
  return `<div class="container main-container">
        <img
          src="${element.image}"
          width="600"
          height="600"
          alt=""
        />
        <div class="main-text">
          <h1 class="main-heading">
            ${element.name}
          </h1>
          <p class="main-p">
            Замок дверной электронный Golden Soft <br />
            GS-200Z-5 имеет роскошный глянцевый <br />
            блеск, четкие линии, красивые формы.
          </p>
          <p class="main-p1">
            Подходит для установки на <br />
            деревянную/межкомнатную дверь.
          </p>
          <p class="price">Цена</p>
          <div class="div222">
            <p class="newPrice">${element.newPrice}P</p>
            <p class="oldPrice">${element.oldPrice}P</p>
            <div class="div22 div2222"></div>
          </div>
        </div>
      </div>`;
}

document.addEventListener("DOMContentLoaded", function () {
  let url = window.location.href;
  let id = url.split("id=")[1];

  if (!id) {
    window.location.assign("http://127.0.0.1:5500/index.html");
    return;
  }
  getData(`https://cars-pagination.onrender.com/products/${id}`)
    .then((data) => {
      const main = document.querySelector(".main");
      console.log(data);
      let item = createDetails(data);
      console.log(item);
      main.innerHTML = item;
    })
    .catch((err) => {
      console.log(err);
    });
});
