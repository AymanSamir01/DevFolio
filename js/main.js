//change background of header
let header = document.querySelector("header");
window.onscroll = function () {
  if (window.scrollY >= header.offsetTop + 80) {
    header.classList.add("header-scroll");
  } else if (window.scrollY == header.offsetTop) {
    header.classList.remove("header-scroll");
  }
  //   show botton
  if (window.scrollY >= 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

//button scroll to top
let btn = document.querySelector(".scroll-to-top");
btn.onclick = function () {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
};
