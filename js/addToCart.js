let numberProductInCart = document.querySelector('.number-product-in-cart');

function addProductToCart(){
  if(isSignIn){
    alert('Added Product To Cart');
    numberProductInCart.innerHTML =   Number(numberProductInCart.textContent) + 1;
    return;
  }
  alert("Please sign in");
}

function plusFunction(event){
  let btnplus = event.target;
  let parent = btnplus.parentElement;
  let quantity = parent.querySelector('.quantity');
  quantity.innerHTML = Number(quantity.textContent) + 1;
}

function minusFunction(event){
  let btnminus = event.target;
  let parent = btnminus.parentElement;
  let quantity = parent.querySelector('.quantity');
  if(Number(quantity.textContent) > 0)
    quantity.innerHTML = Number(quantity.textContent) - 1;
}

function removeProduct(){
  alert('Removed Product ');
}



