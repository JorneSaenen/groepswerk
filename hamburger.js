const ham = document.querySelector(".hamburger");
const offScreenMenu = document.querySelector(".off-screen-menu");

ham.onclick = () => {
  ham.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
};
// offScreenMenu.onclick = () => offScreenMenu.classList.toggle("active");
