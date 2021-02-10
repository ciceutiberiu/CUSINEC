const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-menu");
const navLinks = document.querySelector(".nav-menu li");

hamburger.addEventListener('click', () => {
    nav.classList.toggle("nav-active");
})

