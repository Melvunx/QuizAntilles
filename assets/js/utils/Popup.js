const popupMada = document.querySelector(".popup.mart");
const popupGwada = document.querySelector(".popup.guad");

madaPopup.addEventListener("click", () => (popupMada.style.display = "block"));
gwadaPopup.addEventListener(
  "click",
  () => (popupGwada.style.display = "block")
);

closeMada.addEventListener("click", () => (popupMada.style.display = "none"));
closeGwada.addEventListener("click", () => (popupGwada.style.display = "none"));

