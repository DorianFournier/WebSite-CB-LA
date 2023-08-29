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

let splashscreen = document.querySelector(".splashscreen-container");
let logo = document.querySelector(".splashscreen-subcontainer");
let logoSpan = document.querySelectorAll(".splashscreen-element");
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
    }, 2000);

    setTimeout(() => {
      splashscreen.style.top = "-100vh";
    }, 2200);
  });
});

ScrollReveal().reveal(".mission-container, .services-container, .who-i-am-container, .testimony-container, .contact-container", {
  reset: false,
  interval: 16,
  duration: 1300
});

/**
 * Smooth scrolling
 *    note : add -70 to cover navbar height
 **/

$(function() {
  $("a[href*='#services']:not([href='services'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top - 70}, 2000);
      }
    }
  });
});

$(function() {
  $("a[href*='#who-i-am']:not([href='who-i-am'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top - 70}, 2000);
      }
    }
  });
});

$(function() {
  $("a[href*='#testimony']:not([href='testimony'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top - 70 }, 2000);
      }
    }
  });
});

$(function() {
  $("a[href*='#contact']:not([href='contact'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top - 70}, 2000);
      }
    }
  });
});
7