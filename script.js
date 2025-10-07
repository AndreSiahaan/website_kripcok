/** @format */

const hamburger = document.getElementById("hamburger");
const navSlide = document.getElementById("navSlide");
const navLinks = document.querySelectorAll(".nav-slide a");

// Toggle menu saat hamburger diklik
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navSlide.classList.toggle("active");
});

// Tutup menu saat salah satu link diklik
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navSlide.classList.remove("active");
  });
});

// Tutup menu saat klik di luar area menu
document.addEventListener("click", (e) => {
  const isClickInsideMenu = navSlide.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    hamburger.classList.remove("active");
    navSlide.classList.remove("active");
  }
});
