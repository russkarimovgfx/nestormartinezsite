// PRINT GALLERY ONE CONSTANTS

const printGallery = document.getElementById('print-gallery');
const popUpTwo = document.getElementById('popup-two');
const selectedImageTwo = document.getElementById('selected-image-two');
const imageIndexTwo = [1, 2, 3];
const selectedIndexTwo = null;

// PRINT GALLERY TWO CONSTANTS

const printGalleryTwo = document.getElementById('amazing-gallery')
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndex = [1, 2, 3, 4, 5];



// PRINT GALLERY ONE


imageIndexTwo.forEach(i => {
 const image = document.createElement('img');
 image.src = `./imagesthree/image${i}.jpg`;
 image.classList.add('printGalleryImg');

 image.addEventListener('click', () => {
  // popup stuff
  popUpTwo.style.transform = `translateY(0)`
  selectedImageTwo.src = `./imagesthree/image${i}.jpg`;
 });

 printGallery.appendChild(image);
});

popUpTwo.addEventListener('click', () => {
 popUpTwo.style.transform = `translateY(-100%)`;
 popUpTwo.src = '';
})

// PRINT GALLERY TWO

imageIndex.forEach(i => {
 const images = document.createElement('img');
 images.src = `./imagesfour/image${i}.jpg`;
 images.classList.add('galleryImgTwo');

 images.addEventListener('click', () => {
  popup.style.transform = `translateY(0)`
  selectedImage.src = `./imagesfour/image${i}.jpg`;
 })

 printGalleryTwo.appendChild(images);
});

popup.addEventListener('click', () => {
 popup.style.transform = `translateY(-150%)`;
 popup.src = '';

})
