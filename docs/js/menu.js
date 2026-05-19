const burger = document.getElementById("burgerBtn");
const nav = document.getElementById("navMenu");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});