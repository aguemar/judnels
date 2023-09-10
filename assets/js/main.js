document.addEventListener("DOMContentLoaded", () => {
  const navOpen = document.getElementById("header-open");
  const navClose = document.getElementById("header-close");
  const navMenu = document.getElementById("header-nav-menu");

  function toggleMenu() {
    navMenu.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active")
      ? "hidden"
      : "auto";
  }

  if (navOpen && navClose && navMenu) {
    navOpen.addEventListener("click", () => {
      navMenu.classList.add("nav-menu"); // Agregar la clase 'nav-menu'
      toggleMenu();
    });
    navClose.addEventListener("click", toggleMenu);
  }
});
