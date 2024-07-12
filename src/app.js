const wrapper = document.querySelector(".cards");
const nedavno = document.querySelector(".cards-ned");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");

let Stor = [];
fetch("https://cars-pagination.onrender.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let dataId = localStorage.getItem("nedIds");
    let nedIds = JSON.parse(dataId);
    let i = 0;
    data.forEach((product) => {
      if (i == 12) {
        return;
      }
      if (localStorage.getItem("nedId") == product.id) {
        localStorage.setItem("Storage", Stor);
        if (localStorage.getItem("arr")) {
          let arr = JSON.parse(localStorage.getItem("arr"));
          arr.push(Stor);
          localStorage.setItem("arr", JSON.stringify(arr));
          console.log(typeof arr);
        } else {
          let arr = [];
          arr.push(Stor);
          localStorage.setItem("arr", JSON.stringify(arr));
        }
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
      }
      function ccim() {
        let card = createCard(product);
        wrapper.innerHTML += card;
        i++;
      }
      ccim();
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
            `http://127.0.0.1:5501/main-details.html?id=${cardId}`
          );
        }
      });
    });

    // option2.addEventListener("click", (event) => {
    // if (product.category == "средний") {
    //   wrapper.innerHTML = "";
    //   let card = createCard(product);
    //   wrapper.innerHTML += card;
    //   i++;
    // }
    // });
    // option1.addEventListener("click", (event) => {
    // if (product.category == "не популярен") {
    //   wrapper.innerHTML = "";
    //   let card = createCard(product);
    //   wrapper.innerHTML += card;
    //   i++;
    // }
    // });
    // option3.addEventListener("click", (event) => {
    // if (product.category == "известный") {
    //   wrapper.innerHTML = "";
    //   let card = createCard(product);
    //   wrapper.innerHTML += card;
    //   i++;
    // }
    // });
    // option4.addEventListener("checked", (event) => {
    // wrapper.innerHTML = "";
    // let card = createCard(product);
    // wrapper.innerHTML += card;
    // i++;
    // });
  });
const cards = document.querySelector(".cards");

function createCard(element) {
  let isExist;
  if (element.isExist) {
    isExist = "/images/В наличии (2).svg";
  } else {
    isExist = "/images/В наличии (1).svg";
  }
  return `<div class="card" data-id="${element.id}" id="${element.category}">
    <div class="div1">
          <img class="has" src="${isExist}" alt="" />
          <img class="Sale" src="./images/Frame 84.svg" alt="" />
    </div>
          <img class="gift" src="./images/Frame 85.svg" alt="" />
          <img class="bg" src="${
            element.image
          }" alt="" width="288px" height="320px" />
    <div class="div2">
    <span class="stars">${"★".repeat(Math.round(element.star))}
                ${"☆".repeat(5 - Math.round(element.star))}</span>
            <p class="otziv">(${element.comments}) отзывов</p>
                  <p class="name">
                    ${element.name}
                  </p>
                  <h3 class="price">${element.newPrice}₽<p class="old-price">${
    element.oldPrice
  }₽<div class="div22"></div></h3>
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
// function addToCart(productId) {
//   if (ned.includes(productId) == true) {
//     return;
//   }
//   if (localStorage.getItem("ned")) {
//     const ned = JSON.parse(localStorage.getItem("ned"));
//     ned.push(productId);
//     localStorage.setItem("ned", JSON.stringify(ned));
//   } else {
//     let ned = [];

//     ned.push(productId);
//     localStorage.setItem("ned", JSON.stringify(ned));
//   }
// }

// for (let i = 0; i < products.children.length; i++) {
//   const product = products.children[i];
//   if (selected == none) {
//     product.style.display = "block";
//   } else {
//     if (product.type !== selected) {
//       product.style.display = "none";
//     } else {
//       product.style.display = "block";
//     }
//   }
// }

// select.addEventListener("change", (event) => {
//   const selected = event.target.value;
//   // wrapper.innerHTML = "";
//   data.forEach((value) => {
//     if (i == 12) {
//       return;
//     }
//     // let card = createCard(value);
//     // wrapper.innerHTML += card;
//   });
//   i++;

//   // const products = document.querySelector(".cards");
// });

// if (selected == "all") {
//   ccim();
// }
// if (selected == "средний") {
//   if (product.category == "средний") {
//     let card = createCard(product);
//     wrapper.innerHTML += card;
//     i++;
//   }
// }
// if (selected == "не популярен") {
//   if (product.category == "не популярен") {
//     let card = createCard(product);
//     wrapper.innerHTML += card;
//     i++;
//   }
// }
// if (selected == "известный") {
//   if (product.category == "известный") {
//     let card = createCard(product);
//     wrapper.innerHTML += card;
//     i++;
//   }
// }
