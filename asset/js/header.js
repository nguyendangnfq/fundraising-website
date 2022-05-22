const menu = document.querySelector(".header__menu");
const menuBtn = document.querySelector(".responsive-icon");
const cancleBtn = document.querySelector(".responsive-cancle");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
};

cancleBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
};
