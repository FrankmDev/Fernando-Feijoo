// src/scripts/mobile-menu.js
document.addEventListener("astro:after-swap", () => {
  const toggleButton = document.getElementById("mobile-menu-toggle");
  const closeButton = document.getElementById("close-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (toggleButton && closeButton && mobileMenu) {
    const openMenu = () => {
      mobileMenu.classList.add("menu-open");
      mobileMenu.classList.remove("translate-x-full");
      toggleButton.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-open");
    };

    const closeMenu = () => {
      mobileMenu.classList.remove("menu-open");
      mobileMenu.classList.add("translate-x-full");
      toggleButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    };

    toggleButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);

    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        toggleButton.getAttribute("aria-expanded") === "true"
      ) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (
        window.innerWidth >= 768 &&
        toggleButton.getAttribute("aria-expanded") === "true"
      ) {
        closeMenu();
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Ejecuta la lógica inicial también en la carga inicial
  const toggleButton = document.getElementById("mobile-menu-toggle");
  const closeButton = document.getElementById("close-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (toggleButton && closeButton && mobileMenu) {
    const openMenu = () => {
      mobileMenu.classList.add("menu-open");
      mobileMenu.classList.remove("translate-x-full");
      toggleButton.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-open");
    };

    const closeMenu = () => {
      mobileMenu.classList.remove("menu-open");
      mobileMenu.classList.add("translate-x-full");
      toggleButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    };

    toggleButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);

    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        toggleButton.getAttribute("aria-expanded") === "true"
      ) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (
        window.innerWidth >= 768 &&
        toggleButton.getAttribute("aria-expanded") === "true"
      ) {
        closeMenu();
      }
    });
  }
});
