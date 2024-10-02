const list = document.querySelector(".slider .list");
const items = document.querySelectorAll(".slider .list .item");
const dots = document.querySelectorAll(".slider .dots li");

let active = 0;
const interval = 4000; // 4s
let restartSlider;

const nextSlide = () => {
  if (active === items.length - 1) {
    active = 0;
  } else {
    active++;
  }
  reloadSlider();
};

const startSlider = () => {
  restartSlider = setInterval(() => {
    nextSlide();
  }, interval);
};

const reloadSlider = () => {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  let lastActiveDot = document.querySelector(".slider .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");

  // Réinitialiser l'intervalle
  clearInterval(restartSlider);
  startSlider();
};

dots.forEach((li, index) => {
  li.addEventListener("click", () => {
    active = index;
    reloadSlider();
  });
});

// Lancer le slider au chargement de la page
startSlider();
