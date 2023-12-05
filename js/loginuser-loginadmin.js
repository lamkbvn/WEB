let nameUser = document.querySelector('.name-user');

let btnSignIn = document.querySelector('.btn-signin');
let accountLogin = document.querySelector('.account-login');
let passwordLogin = document.querySelector('.password-login');
let hidlog = document.querySelector('.hid-log');
let hidreg = document.querySelector('.hid-reg');


let currentName  = "User";
let currentUser ;
let currentPassword ;
let an = true;
function hiddenlog(){
  if(an)
  {
    hidlog.src = "img/iconlogin/non-hidden-pass.svg";
    let passlog = document.querySelector('.password-login');
    passlog.type = "text";
    let passreg = document.querySelector('.password-register');
    passreg.type = "text";
    an = false;
  }
  else {
    hidlog.src = "img/iconlogin/hidden-pass.svg";
    let passlog = document.querySelector('.password-login');
    passlog.type = "password";
    let passreg = document.querySelector('.password-register');
    passreg.type = "password";
    an = true;
  }
}

function hiddenreg(){
  if(an)
  {
    hidreg.src = "img/iconlogin/non-hidden-pass.svg";
    let passreg = document.querySelector('.password-register');
    passreg.type = "text";
    an = false;
  }
  else {
    hidreg.src = "img/iconlogin/hidden-pass.svg";
    let passreg = document.querySelector('.password-register');
    passreg.type = "password";
    an = true;
  }
}

function LOGIN(){
  if(accountLogin.value == '')
    {
      invalidAccountLogin.classList.remove('hidden-form');
      invalidAccountLogin.innerHTML ='Enter account name';
      return;
    }
  if(passwordLogin.value =='')
  {
    invalidAccountLogin.classList.remove('hidden-form');
    invalidAccountLogin.innerHTML ='Enter PASSWORD';
    return;
  }


    sectionFormLogin.classList.add('hidden-form');
    body.style.overflow = '';
    invalidAccountLogin.innerHTML ='';
    nameUser.innerHTML = currentName;
    btnSignOut.classList.remove('hidden-form');
    alert('Sign in success');
    window.location ="index1.html";
    return;
  }

let btnSignOut = document.querySelector('.btn-sign-out');
function LOGOUT(){
  if(checkhref1())
  {
    btnSignOut.classList.add('hidden-form');
    nameUser.innerHTML = '';
    numberProductInCart.innerHTML = 3 + "";
    window.location = "index.html";
  }
}

let btnSignUp = document.querySelector('.btn-signup');
function LOGUP(){
    let invalidAccountRegister = document.querySelector('.invalid-account-register');
    let name = document.querySelector('.input-username');
    if(name.value === '')
    {
      invalidAccountRegister.classList.remove('hidden-form');
      invalidAccountRegister.innerHTML ='Enter Username';
      return;
    }

    let accountregister = document.querySelector('.account-register');
    let passwordregister = document.querySelector('.password-register');

    if(accountregister.value =='')
    {
      invalidAccountRegister.classList.remove('hidden-form');
      invalidAccountRegister.innerHTML ='Enter Account name';
      return;
    }

    if(passwordregister.value =='')
    {
      invalidAccountRegister.classList.remove('hidden-form');
      invalidAccountRegister.innerHTML ='Enter Password ';
      return;
    }

    currentName = name.value;
    currentUser = accountregister.value;
    currentPassword = passwordregister.value;
    alert("Sign up success");
    nameUser.innerHTML = name.value;
    sectionFormRegister.classList.add('hidden-form');
    body.style.overflow = '';
    btnSignOut.classList.remove('hidden-form');
  }

  const href1 =
    ["http://127.0.0.1:5501/index1.html",
    "http://127.0.0.1:5501/shop1.html" ,
    "http://127.0.0.1:5501/product1.html",
    "http://127.0.0.1:5501/blog-post1.html",
    "http://127.0.0.1:5501/blog1.html",
    "http://127.0.0.1:5501/contact_us1.html",
    "http://127.0.0.1:5501/pagecart1.html",
    "http://127.0.0.1:5501/checkout1.html",
    "http://127.0.0.1:5501/historyOrder.html",
    "http://127.0.0.1:5501/search1.html",
    "http://127.0.0.1:5501/product1.html?",
    "http://127.0.0.1:5501/OrderDetail.html",
    "http://127.0.0.1:5501/personalInfor.html"]

  function checkhref1(){
      for(let h of href1)
        if(h == window.location.href)
          return true;
      return false;
  }




