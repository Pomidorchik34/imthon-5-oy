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

export { getData, createCard };
