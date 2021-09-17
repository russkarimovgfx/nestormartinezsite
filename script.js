const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
const menuButton = document.getElementsByClassName('menu-title')[0];
const menuList = document.getElementsByClassName('menu')[0];
const gallery = document.getElementById('gallery');
const popUp = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const selectedIndex = null;


hamburgerButton.addEventListener('click', () => {
 menuButton.classList.toggle('menu-hidden')
 menuList.classList.toggle('menu-hidden')
 hamburgerButton.classList.toggle('ham-hidden')
})


// 

imageIndexes.forEach(i => {
 const image = document.createElement('img');
 image.src = `./imagestwo/image${i}.jpg`;
 image.classList.add('galleryImg');

 image.addEventListener('click', () => {
  popup.style.transform = `translateY(0)`;
  selectedImage.src = `./imagestwo/image${i}.jpg`;
 })

 gallery.appendChild(image);
})

popup.addEventListener('click', () => {
 popup.style.transform = `translateY(-100%)`
 popup.src = '';
})
