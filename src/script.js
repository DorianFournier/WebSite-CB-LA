const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

let events = document.getElementsByClassName(".nav-link");

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

let splashscreen = document.querySelector(".splashscreen");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");
let welcomeSpan = document.querySelectorAll(".typewriter");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 500);
    });

    welcomeSpan.forEach((Wspan, idx) => {
      setTimeout(() => {
        Wspan.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });

      welcomeSpan.forEach((Wspan, idx) => {
        setTimeout(() => {
          Wspan.classList.remove("active");
          Wspan.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 1500);

    setTimeout(() => {
      splashscreen.style.top = "-100vh";
    }, 1800);
  });
});
