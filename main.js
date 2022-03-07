const btnOpen = document.querySelector('.fa-bars');
const btnClose = document.querySelector('.fa-times');
btnOpen.addEventListener('click', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.style.display = 'block';
})
btnClose.addEventListener('click', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.style.display = 'none';
})