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

// For view deatil modal button
const viewButtons = document.querySelectorAll(".view-button");
const modal = document.querySelector("#item-detail-modal");

viewButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    modal.style.display = "flex";
    e.preventDefault();
  });
});

// document.addEventListener("click", function (e) {
//   console.log(e.target);
//   if (e.target === viewButtons) {
//     console.log("bingo");
//   }
// });

/* For closing it */
const modalCloseButtons = document.querySelector(".modal__close-button");

modalCloseButtons.onclick = function (e) {
  modal.style.display = "none";
  e.preventDefault();
};

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
