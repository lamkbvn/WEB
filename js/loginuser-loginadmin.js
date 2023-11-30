let nameUser = document.querySelector('.name-user');

let btnSignIn = document.querySelector('.btn-signin');
let accountLogin = document.querySelector('.account-login');
let passwordLogin = document.querySelector('.password-login');

let isSignIn = false;

btnSignIn.onclick = function(){

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


  if(accountLogin.value =='user' && passwordLogin.value =='user')
  {
    sectionFormLogin.classList.add('hidden-form');
    body.style.overflow = '';
    invalidAccountLogin.innerHTML ='';
    nameUser.innerHTML = 'User';
    btnSignOut.classList.remove('hidden-form');
    alert('Sign in success');
    isSignIn =true;
    return;
  }
  else{
    invalidAccountLogin.classList.remove('hidden-form');
      invalidAccountLogin.innerHTML ='Account or Password wrong';
  }


btnSignOut.addEventListener('click',signOutNow);

function signOutNow(){
  sectionForm.classList.remove('hidden');
  sectionForm.classList.add('hidden-form');
  nameUser.innerHTML = '';
  btnSignOut.classList.add('hidden-form');
  invalidAccount.innerHTML ='';
  invalidAccount.classList.add('hidden-form');
  indexAccountnameCur = -1;
  isSignIn =false;
  localStorage.setItem("indexAccountnameCur", indexAccountnameCur);
  localStorage.setItem("isSignIn", isSignIn);
  productCart.innerHTML = '';
  updateTotalPrice();
  
}

// SIGN UP



  if(accountLogin.value =='admin' && passwordLogin.value =='admin')
  {
    sectionFormLogin.classList.add('hidden-form');
    body.style.overflow = '';
    invalidAccountLogin.innerHTML ='';
    window.location = "admin\\index.html";
    isSignIn = true;
    alert('Sign in success');
    return;
  }
  else{
      invalidAccountLogin.classList.remove('hidden-form');
        invalidAccountLogin.innerHTML ='Account or Password wrong';
    }
  }

let btnSignOut = document.querySelector('.btn-sign-out');
btnSignOut.onclick = function(){
  if(isSignIn)
  {
    btnSignOut.classList.add('hidden-form');
    nameUser.innerHTML = '';
    isSignIn = false;
  }
}

let btnSignUp = document.querySelector('.btn-signup');
  btnSignUp.onclick = function(){
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

    if(accountregister.value == "admin")
    {
      invalidAccountRegister.classList.remove('hidden-form');
      invalidAccountRegister.innerHTML ='admin is not account name.Please account name other.';
      return;
    }

    if(accountregister.value == 'user')
    {
      invalidAccountRegister.classList.remove('hidden-form');
      invalidAccountRegister.innerHTML ='Account name \'user\' is existing.Please account name other';

      return;
    }

    alert("Sign up success");
    nameUser.innerHTML = name.value;
    sectionFormRegister.classList.add('hidden-form');
    isSignIn = true;
    body.style.overflow = '';
    btnSignOut.classList.remove('hidden-form');
  }



