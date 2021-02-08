const navIcon = document.querySelector('.mobile-nav-icon');
const navMenu = document.querySelector('.nav-pages');
const topBar = document.querySelector('.top-nav');
const logo = document.querySelector('.logo');
navIcon.addEventListener('click', () =>{
    navMenu.classList.toggle('mobile-options');
    topBar.classList.toggle('mobile-options');
    logo.classList.toggle('mobile-options');
});

// navIcon.addEventListener('touchstart', () =>{
//     navMenu.classList.toggle('mobile-options');
// });