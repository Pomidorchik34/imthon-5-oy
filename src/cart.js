const main = document.querySelector(".main-cart");
fetch("https://cars-pagination.onrender.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let i = 0;
    data.forEach((element) => {
      if (i == 2) {
        return;
      }

      i++;
      let list = localStorage.getItem("cart");
      let cart = JSON.parse(list);
      let count = cart.length;
      data.forEach((value) => {
        if (cart.includes(value.id) == true) {
          let card = createCartCard(value);
          main.innerHTML += card;
          return;
        }
      });
    });
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.length > 0 &&
      deleteButtons.forEach((element) => {
        element.addEventListener("click", (event) => {
          event.preventDefault();
          let isDelete = confirm("Are you sure?");

          if (isDelete) {
            let deleteId = this.getAttribute("data-id");
            let copied = JSON.parse(JSON.stringify(data));
            copied = copied.filter((del) => {
              return del.id != deleteId;
            });
            localStorage.setItem("cards", JSON.stringify(copied));
            window.location.reload();
          }
        });
      });
  });
function createCartCard(product) {
  return `
          <div data-id="${product.id}" class="cart-card">
        <div class="cart-text">
          <img
            class="cart-img"
            src="${product.image}"
            width="136px"
            height="120px"
            alt=""
          />
          <div>
            <h3 class="cart-h3">${product.name}</h3>
            <h3 class="cart-h3">
              + Подарок: “Приложение к замкам Golden Service”
            </h3>
          </div>



          <a class="delete-btn" data-id="${product.id}" href="./cart.html">
            <p class="cart-price">${product.newPrice}₽</p>
            <img src="./images/Frame (5).svg" alt="" />
            Удалить
          </a>
        </div>

        <div class="cart-btns">
        <p class="all price">Итого: ${product.newPrice}₽</p>
          <button class="cart-btn-oformit">Оформить заказ</button>
          <a class="cart-btn-prodolzhit" href="./index.html">Продолжить покупки</a>
        </div>
      </div>`;
}
