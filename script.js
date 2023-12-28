const ulNav = document.querySelector(".ul-nav");
const menu = document.querySelector(".menu");

// For hamburger menu toggle UI in media query
menu.onclick = function () {
  ulNav.classList.toggle("active");
};

const searchInput = document.querySelector(".search-bar");
const searchIcon = document.querySelector(".search-icon");
const searchBox = document.querySelector(".search-box");

// for search button toggle UI
searchIcon.onclick = (e) => {
  searchInput.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

const cart = document.querySelector(".cart");
const cartButton = document.querySelector(".cart-button");

// For Cart UI toggle
cartButton.onclick = (e) => {
  cart.classList.toggle("active");
  e.preventDefault();
};

const removeCartItem = document.querySelectorAll(".remove-item");
const addToCart = document.querySelectorAll(".add-to-cart");

// For Adding Item to cart
addToCart.forEach(function (el) {
  el.addEventListener("click", function (e) {
    cart.innerHTML += addItem();
    e.preventDefault();
  });
});

// For removing Item to cart
removeCartItem.forEach(function (el) {
  el.addEventListener("click", function (e) {
    el.parentElement.parentElement.style.display = "none";
    e.preventDefault();
  });
});

// for close side menu ui when click outside UI
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !ulNav.contains(e.target)) {
    ulNav.classList.remove("active");
  }

  if (!searchIcon.contains(e.target) && !searchInput.contains(e.target)) {
    searchInput.classList.remove("active");
  }

  if (!cart.contains(e.target) && !cartButton.contains(e.target)) {
    cart.classList.remove("active");
  }
});

function addItem() {
  return `<div class="cart-item">
          <img src="./menu/bag1.jpeg" alt="bag 1" />
          <div class="item-detail">
            <h3>Espresso Beans</h3>
            <div class="item-price">$14.99</div>
          </div>
          <a href="#"><i data-feather="trash-2" class="remove-item"></i></a>
        </div>`;
}
