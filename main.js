
const btnOpen = document.querySelector('.open');
const btnClose = document.querySelector('.close');
const hamburgerMenu = document.querySelector('.hamburger-menu');
btnOpen.classList.add('open');
btnOpen.addEventListener('click', function () {
    hamburgerMenu.style.display = 'block';
})
btnClose.addEventListener('click', function () {
    hamburgerMenu.style.display = 'none';
})