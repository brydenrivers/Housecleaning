const navIcon = document.querySelector('.mobile-nav-icon');
const navMenu = document.querySelector('.nav-pages');
const topBar = document.querySelector('.top-nav');
const logo = document.querySelector('.logo');
const icon = document.querySelector('.menu-icon');
navIcon.addEventListener('click', () =>{
    navMenu.classList.toggle('mobile-options');
    topBar.classList.toggle('mobile-options');
    logo.classList.toggle('mobile-options');
    if (icon.classList.contains('.close')){
        icon.classList.toggle('.close');
        icon.textContent= 'menu';

    }
    else{
        icon.textContent= 'close'
        icon.classList.toggle('.close');
    }
});

// navIcon.addEventListener('touchstart', () =>{
//     navMenu.classList.toggle('mobile-options');
// });