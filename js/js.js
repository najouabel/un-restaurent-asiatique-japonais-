const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav_links")
menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
});