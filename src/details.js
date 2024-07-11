import { getData } from "../src/functions.js";

const cartBtn = document.querySelector(".btn-main-details");

function createDetails(product) {
  return `<div class="container main-container">
        <img
          src="${product.image}"
          width="600"
          height="600"
          alt="Birincchi rasmni linki ishlamayapti"
        />
        <div class="main-text">
          <h1 class="main-heading">
            ${product.name}
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
            <p class="newPrice">${product.newPrice}P</p>
            <p class="oldPrice">${product.oldPrice}P</p>
            <div class="div22 div2222"></div>
            <button isExist="${product.isExist}" class="btn-main-details" id="detail-btn">В КОРЗИНУ</button>
          </div>
        </div>
      </div>`;
}

document.addEventListener("DOMContentLoaded", function () {
  function addToCart(productId) {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart.includes(productId) == true) {
        alert("Savatda sahlngan");
        return;
      } else {
        console.log(cart.push(productId));
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Savatga saqlandi!");
    } else {
      let cart = [];
      if (cart.includes(productId) == true) {
        alert("Savatda sahlngan");
        return;
      } else {
        console.log(cart.push(productId));
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Savatga saqlandi!");
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  let url = window.location.href;
  let id = url.split("id=")[1];

  if (!id) {
    window.location.assign("http://127.0.0.1:5500/index.html");
    return;
  }
  getData(`https://cars-pagination.onrender.com/products/${id}`)
    .then((data) => {
      console.log(data);
      const main = document.querySelector(".main");

      let item = createDetails(data);
      main.innerHTML = item;
      const btn = document.getElementById("detail-btn");

      btn.addEventListener("click", (event) => {
        addToCart(data.id);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
