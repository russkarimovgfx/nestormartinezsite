const gallery = document.getElementById('gallery');
const popUp = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const selectedIndex = null;



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
