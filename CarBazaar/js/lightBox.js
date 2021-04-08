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

window.onload = function() {

  var slider1 = new Slider({
      images: '.slider-1 img',
      btnPrev: '.slider-1 .buttons .prev',
      btnNext: '.slider-1 .buttons .next',
      auto: false
  });

 var slider2 = new Slider({
      images: '.slider-2 img',
      btnPrev: '.slider-2 .buttons .prev',
      btnNext: '.slider-2 .buttons .next',
      auto: true,
      rate: 2000
  });
}

function Slider(obj) {

this.images = document.querySelectorAll(obj.images);
this.auto = obj.auto;
this.btnPrev = obj.btnPrev;
this.btnNext = obj.btnNext;
   this.rate = obj.rate || 1000;

var i = 0;
   var slider = this;

this.prev = function () {
  slider.images[i].classList.remove('shown');
  i--;

  if (i < 0) {
    i = slider.images.length - 1;
  }

  slider.images[i].classList.add('shown');
}

this.next = function () {
  slider.images[i].classList.remove('shown');
  i++;

  if (i >= slider.images.length) {
    i = 0;
  }

  slider.images[i].classList.add('shown');
}

  document.querySelector(slider.btnPrev).onclick = slider.prev;
  document.querySelector(slider.btnNext).onclick = slider.next;

if (slider.auto)	{
      setInterval(slider.next, slider.rate);
  }
};

// Buy now popup
function openTheForm() {
  document.getElementById("buyNow").style.display = "block";
}

function closeTheForm() {
  document.getElementById("buyNow").style.display = "none";
}

// Get vehicle total cost
function getTotal()
{
  price = Number(document.getElementById("currentPrice").innerText);
  fees = Number(document.getElementById("dealerFees").innerText);
  discountCode = (document.getElementById("discountCode").value.toUpperCase());
  discount = 0;

  if (discountCode === "NEWCAR5") {
    discount = .05;
    alert("Congratulations! 5% Discount activated!")
  } else if (discountCode === "DISCOUNT10") {
    discount = .10;
    alert("Congratulations! 10% Discount activated!")
  } else if (discountCode === "DEAL15") {
    discount = .15;
    alert("Congratulations! 15% Discount activated!")
  } else if (discountCode.length > 0) {
    alert("Inavlid discount code!")
  }
  


  cost = price + fees;
  subtotal = cost - cost * discount;
  taxInverse = 0.945;
  total = subtotal / taxInverse;
  total = total.toFixed(2);
  document.getElementById("totalCost").value = total;
}