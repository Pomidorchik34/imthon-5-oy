async function getData(url) {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
}

function createCard(value) {
  return ` <div class="card" data-id="${value.id}">
              <img
                src="${value.attributes.image}"
                alt=""
                width="352"
                height="192"
              />
              <div class="div-about">
                <p class="name">${value.attributes.title}</p>
                <p class="price">$${value.attributes.price / 100}</p>
              </div>
            </div>`;
}

function createCardCart(value) {
  return `<div class="container card">
        <h1 class="heading-cart">Shopping Cart</h1>
        <div class="outline"></div>
        <div class="cart">
          <div class="card">
            <img
              src="${value.image}"
              alt=""
              width="128"
              height="128"
            />
            <div class="text-cart">
              <h1>${value.title}</h1>
              <h1>${value.company}</h1>
              <h1></h1>
            </div>
            <div class="Amo">
              <h1>Amount</h1>
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <button class="remove">remove</button>
            </div>
            <p class="price">$${value.price}</p>
          </div>
        </div>
      </div>`;
}

export { getData, createCard, createCardCart };
