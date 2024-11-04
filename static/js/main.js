// cosnts
const $navBarBurger = document.querySelector(".navbar-menu");
const $btnBarBurger = document.getElementById("btnBurger");

// event to open and cloced menu
$btnBarBurger.addEventListener("click", () => {
  console.log("open!!!");
  $btnBarBurger.classList.toggle("is-active");
  $navBarBurger.classList.toggle("is-active");
});
