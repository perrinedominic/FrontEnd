$(document).ready(function () {
    
});


// Show the cars lightbox by id.
let slideIndex = 1;
showSlide(slideIndex);

function openLightbox(id) {
  document.getElementById(id).style.display = 'block';
};

function closeLightbox(id) {
  document.getElementById(id).style.display = 'none';
};

function changeSlide(n, id) {
  showSlide(slideIndex += n, id);
};

function toSlide(n, id) {
  showSlide(slideIndex = n, id);
};

function showSlide(n, id) {
  const slides = document.querySelectorAll('[id='+id+']');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
};

