let person =document.querySelector('.user-header');
let sectionForm = document.querySelector('.section-form');
let overlayForm = document.querySelector('.overlay-form');
let btnActive = document.querySelector('.btn-active');

let input = document.querySelector('.input');
let body = document.querySelector('body');
let exitBtn = document.querySelectorAll('.exit');


person.addEventListener('click' ,
  function (){
    if(sectionForm.classList.contains('hidden-form')){
      sectionForm.classList.remove('hidden-form');
      body.style.overflow = 'hidden';
      invalidAccount.innerHTML ='';
    }
  }
);
overlayForm.addEventListener('click' ,
function (){
  sectionForm.classList.add('hidden-form');
  input.value = '';
  body.style.overflow = '';
}
);

for(exit of exitBtn) {
  exit.addEventListener('click' ,
  function () {
    sectionCart.classList.add('hidden-form');
    sectionSearch.classList.add('hidden-form');
    sectionForm.classList.add('hidden-form');
    body.style.overflow = '';
  }
)
}

let cart = document.querySelector('.cart-header');
let sectionCart = document.querySelector('.section-cart');
let overlayScreen = document.querySelectorAll('.overlay');
let formCart = document.querySelector('.form-cart');
const search =document.querySelector('.search-header');
const sectionSearch =document.querySelector('.section-search');



cart.addEventListener('click' ,
  function () {
    sectionCart.classList.remove('hidden-form');
    body.style.overflow = 'hidden';
  }
)

search.addEventListener('click',
  function () {
    sectionSearch.classList.remove('hidden-form');
    body.style.overflow = 'hidden';
  }
)

for(overlay of overlayScreen){
  overlay.addEventListener('click' ,
  function () {
    sectionCart.classList.add('hidden-form');
    sectionSearch.classList.add('hidden-form');
    body.style.overflow = '';
  }
)
}

// Active nav section indicator
let navItems = document.querySelector(".nav");
var actItem = document.querySelector(".active-item");

navItems.addEventListener("click", function(event) {
    var clickedItem = event.target.closest(".nav-item");
    if(clickedItem) {
        actItem.classList.remove("active-item");
        clickedItem.classList.add("active-item");
        actItem = clickedItem;
    }
})






