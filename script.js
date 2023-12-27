const ulNav = document.querySelector(".ul-nav");
const menu = document.querySelector(".menu");

menu.onclick = function () {
  ulNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !ulNav.contains(e.target)) {
    ulNav.classList.remove("active");
  }
});
