const navIcon = document.querySelector('.mobile-nav-icon');
const navMenu = document.querySelector('.nav-pages');
const topBar = document.querySelector('.top-nav');
navIcon.addEventListener('click', () =>{
    navMenu.classList.toggle('mobile-options');
    topBar.classList.toggle('mobile-options');
});
// navIcon.addEventListener('touchstart', () =>{
//     navMenu.classList.toggle('mobile-options');
// });