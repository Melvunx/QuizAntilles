const nav = document.querySelector("nav");
const cardHomeUp = document.querySelector(".knowledge");
const cardHomeDown = document.querySelector(".about");
const cardAbout = document.querySelector(".card-container");

let lastScroll = 30;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-80px";
  }
  lastScroll = window.scrollY;
});

window.addEventListener("scroll", () => {
  let lastScroll = 220;
  if (window.scrollY > lastScroll) {
    cardHomeUp.classList.add("scale-in-top");
  }
});

window.addEventListener("scroll", () => {
  let lastScroll = 330;
  if (window.scrollY > lastScroll) {
    cardHomeDown.classList.add("scale-in-bottom");
  }
});

window.addEventListener("scroll", () => {
  let lastScroll = 150;
  if (window.scrollY > lastScroll) {
    cardAbout.classList.add("slide-in-bck-center");
  }
});
