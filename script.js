const navIcon = document.querySelector('.mobile-nav-icon');
const navMenu = document.querySelector('.nav-pages');
navIcon.addEventListener('click', () =>{
    navMenu.classList.toggle('mobile-options');
});