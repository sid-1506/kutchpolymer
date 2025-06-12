'use strict';

/**
 * Element toggle function
 */
const elemToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

/**
 * Navbar toggle functionality
 */
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtns = document.querySelectorAll("[data-nav-open-btn]"); // Multiple buttons
const navbarLinks = document.querySelectorAll("[data-nav-link]");

/**
 * Open navbar function
 */
const openNavbar = function() {
  navbar.classList.add("active");
  overlay.classList.add("active");
}

/**
 * Close navbar function
 */
const closeNavbar = function() {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

/**
 * Add event listeners to all nav open buttons (both mobile and desktop)
 */
navOpenBtns.forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault();
    openNavbar();
  });
});

/**
 * Add event listener to close button
 */
if (navCloseBtn) {
  navCloseBtn.addEventListener("click", function(e) {
    e.preventDefault();
    closeNavbar();
  });
}

/**
 * Close navbar when clicking on overlay
 */
if (overlay) {
  overlay.addEventListener("click", function() {
    closeNavbar();
  });
}

/**
 * Close navbar when clicking on any navbar link
 */
navbarLinks.forEach(link => {
  link.addEventListener("click", function() {
    closeNavbar();
  });
});

/**
 * Header active state on scroll
 */
const header = document.querySelector("[data-header]");

if (header) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 400) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
}

/**
 * Close navbar on escape key press
 */
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeNavbar();
  }
});
