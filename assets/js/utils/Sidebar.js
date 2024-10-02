const sidebar = document.querySelector(".sidebar");

sidebutton.addEventListener("click", () =>
  sidebar.classList.add("sidebar-active")
);

closeSidebar.addEventListener("click", () =>
  sidebar.classList.remove("sidebar-active")
);
