const btnScroll = document.querySelector(".scroll-top-btn");

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onscroll = function () {
  scrollFunction();
};
