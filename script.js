const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
const menuButton = document.getElementsByClassName('menu-title')[0];
const menuList = document.getElementsByClassName('menu')[0];



hamburgerButton.addEventListener('click', () => {
 menuButton.classList.toggle('menu-hidden')
 menuList.classList.toggle('menu-hidden')
 hamburgerButton.classList.toggle('ham-hidden')
})