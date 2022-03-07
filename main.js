
const btnOpen = document.querySelector('.fa-bars');
const btnClose = document.querySelector('.close');
const hamburgerMenu = document.querySelector('.hamburger-menu');
btnOpen.classList.add('open');
btnOpen.addEventListener('click', function () {
    hamburgerMenu.style.display = 'block';
})
btnClose.addEventListener('click', function () {
    hamburgerMenu.style.display = 'none';
})