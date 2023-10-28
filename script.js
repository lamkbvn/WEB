let person =document.querySelector('.person');
let sectionForm = document.querySelector('.section-form');
let overlayForm = document.querySelector('.overlay-form');
let formType = document.querySelector('.form-type');
let btnActive = document.querySelector('.btn-active');
let btnLogin = document.querySelector('.btn-login');
let btnRegister = document.querySelector('.btn-register');
let input = document.querySelector('.input');
let body = document.querySelector('body');
let exitBtn = document.querySelectorAll('.exit');

let formSignin = `
      <label for="">Account name</label>
      <input type="text" id="username" class="input" placeholder="Enter account name">
      <label for="">Password</label>
      <input type="text" id="password" class="input" placeholder="Enter password">
      <button class="btn-signin">Sign in</button>
`
let formSignup = `
      <label for="">User name</label>
      <input type="text" id="username" class="input" placeholder="Enter user name">
      <label for="">Account name</label>
      <input type="text" id="address" class="input" placeholder="Enter account name">
      <label for="">Password</label>
      <input type="text" id="password" class="input" placeholder="Enter password">
      <button class="btn-signin">Sign up</button>
`

function removeHiddenForm() {
  sectionForm.classList.remove('hidden-form');
}

function addHiddenForm(){
  sectionForm.classList.add('hidden-form');
}

person.addEventListener('click' ,
  function (){
    sectionForm.classList.remove('hidden-form');
    body.style.overflow = 'hidden';
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

btnLogin.addEventListener('click' ,
  function (){
    btnLogin.classList.add('btn-active');
    btnRegister.classList.remove('btn-active');
    formType.innerHTML = formSignin;
  }
)

btnRegister.addEventListener('click' ,
  function (){
    btnLogin.classList.remove('btn-active');
    btnRegister.classList.add('btn-active');
    formType.innerHTML = formSignup;
  }
)

const switchPageAbout = document.querySelector('.about');
const pageMain = document.querySelector('.page-main');
const pageAbout = document.querySelector('.page-about');
const returnHome = document.querySelector('.return-home');


switchPageAbout.addEventListener('click' ,
  function () {
    pageMain.classList.add('hidden-form');
    pageAbout.classList.remove('hidden-form');
  }
)

returnHome.addEventListener('click' ,
  function () {
    pageMain.classList.remove('hidden-form');
    pageAbout.classList.add('hidden-form');
  }
)

let cart = document.querySelector('.cart');
let sectionCart = document.querySelector('.section-cart');
let overlayScreen = document.querySelectorAll('.overlay');
let formCart = document.querySelector('.form-cart');
const search =document.querySelector('.search');
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







