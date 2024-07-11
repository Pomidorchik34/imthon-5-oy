const wrapper = document.querySelector(".cards");
const nedavno = document.querySelector(".cards-ned");

let Stor = [];
fetch("../products.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let dataId = localStorage.getItem("nedIds");
    let nedIds = JSON.parse(dataId);
    console.log(nedIds);
    let i = 0;
    data.forEach((product) => {
      if (localStorage.getItem("nedId") == product.id) {
        let nedCard = createCard(product);
        nedavno.innerHTML += nedCard;
        Stor.push({
          id: product.id,
          name: product.name,
          image: product.image,
          newPrice: product.newPrice,
          oldPrice: product.oldPrice,
          isExist: false,
          comments: 17,
        });
        localStorage.setItem("Storage", Stor);
      }

      if (i == 12) {
        return;
      }
      let card = createCard(product);
      wrapper.innerHTML += card;
      i++;
      const products = document.querySelector(".cards");
      const select = document.querySelector(".filter-select");
      select.addEventListener("change", (event) => {
        const selected = event.target.value;

        for (let i = 0; i < products.children.length; i++) {
          const product = products.children[i];
          if (selected == none) {
            product.style.display = "block";
          } else {
            if (product.type !== selected) {
              product.style.display = "none";
            } else {
              product.style.display = "block";
            }
          }
        }
      });
    });

    const nedCards = document.querySelectorAll(".card");
    console.log(nedCards);
    nedCards.forEach((card) => {
      card.addEventListener("click", function (event) {
        let dataId = this.getAttribute("data-id");

        let nedCardsArr = [];

        nedCardsArr.push(dataId);
        console.log(dataId);
        localStorage.setItem("nedId", dataId);

        const cardId = this.getAttribute("data-id");
        if (cardId) {
          window.location.assign(
            `http://127.0.0.1:5500/details.html?id=${cardId}`
          );
        }
      });
    });
  });
const cards = document.querySelector(".cards");

function createCard(element) {
  let isExist;
  if (element.isExist) {
    isExist = "/images/В наличии (1).svg";
  } else {
    isExist = "/images/В наличии (2).svg";
  }
  return `<div class="card" data-id="${element.id}" id="${element.category}">
    <div class="div1">
          <img class="has" src="${isExist}" alt="" />
          <img class="Sale" src="./images/Frame 84.svg" alt="" />
    </div>
          <img class="gift" src="./images/Frame 85.svg" alt="" />
          <img class="bg" src="${element.image}" alt="" width="288px" height="320px" />
    <div class="div2">
            <p class="otziv">(${element.comments}) отзывов</p>
                  <p class="name">
                    ${element.name}
                  </p>
                  <h3 class="price">${element.newPrice}₽<p class="old-price">${element.oldPrice}₽<div class="div22"></div></h3>
    </div>
              </div>`;
}

function createDetails(element) {
  return `
        <div class="container main-container">
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
