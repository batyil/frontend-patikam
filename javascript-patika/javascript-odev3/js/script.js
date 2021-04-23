const btnContainer = document.querySelector(".btn-container");
const menuItemContainer = document.querySelector(".section-center");

function addButtons() {
  const categories = menu.reduce(
    (acc, curr) => (acc.includes(curr.category) ? acc : [...acc, curr.category]),
    ["All"]
  );

  btnContainer.innerHTML = categories
    .map(
      (category) =>
        `<button class="btn btn-outline-dark btn-item" data-name="${category}">${category}</button>`
    )
    .join("");

  // EVENT LISTENER
  Array.from(btnContainer.children).forEach((button) =>
    button.addEventListener("click", handleButtonClick)
  );
}

function updateMenuList(list) {
  menuItemContainer.innerHTML = list
    .map(
      (item) => `
      <div class="menu-items col-lg-6 col-sm-12">
        <img
          src="${item.img}"
          alt="${item.title}"
          class="photo"
        />
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">${item.desc}</div>
        </div>
      </div>`
    )
    .join("");
}

addButtons();
updateMenuList(menu);

// EVENT HANDLERS

function handleButtonClick(e) {
  const categoryName = this.dataset.name;

  if (categoryName === "All") {
    updateMenuList(menu);
  } else {
    updateMenuList(menu.filter((item) => item.category === categoryName));
  }
}
