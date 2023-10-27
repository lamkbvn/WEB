let person =document.querySelector('.person');
let sectionForm = document.querySelector('.section-form');
let overlayForm = document.querySelector('.overlay-form');
let formType = document.querySelector('.form-type');
let btnActive = document.querySelector('.btn-active');
let btnLogin = document.querySelector('.btn-login');
let btnRegister = document.querySelector('.btn-register');
let input = document.querySelector('.input');
let body = document.querySelector('body');

let formSignin = `
      <label for="">Username</label>
      <input type="text" id="username" class="input" placeholder="Enter username">
      <label for="">Password</label>
      <input type="text" id="password" class="input" placeholder="Enter password">
      <button class="btn-signin">Sign in</button>
`
let formSignup = `
      <label for="">Username</label>
      <input type="text" id="username" class="input" placeholder="Enter username">
      <label for="">Email address</label>
      <input type="text" id="address" class="input" placeholder="Enter email address">
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
let overlayCart = document.querySelector('.overlay-cart');
let exitCart = document.querySelector('.row-1-col-2');
let formCart = document.querySelector('.form-cart');



cart.addEventListener('click' ,
  function () {
    sectionCart.classList.remove('hidden-form');
    body.style.overflow = 'hidden';
  }
)

overlayCart.addEventListener('click' ,
  function () {
    sectionCart.classList.add('hidden-form');
    body.style.overflow = '';

  }
)

exitCart.addEventListener('click' ,
  function () {
    sectionCart.classList.add('hidden-form');
    body.style.overflow = '';
  }
)


