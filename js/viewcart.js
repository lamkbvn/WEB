let btnEditQuantity1 = document.querySelectorAll('.edit-quantity');
let totalCheckoutSub = document.querySelector('.num-sub');
let totalCheckoutTotal = document.querySelector('.num-total');

let updateCart = document.querySelector('.btn-update');

for(let i = 0 ; i < btnEditQuantity1.length ; i++){
    let btnMinus = btnEditQuantity1[i].querySelector('.minus1');
    let btnPlus = btnEditQuantity1[i].querySelector('.plus1');
    btnMinus.addEventListener('click', minusQuantity1);
    btnPlus.addEventListener('click', plusQuantity1);
}

function minusQuantity1(event) {
  console.log('minus quantity');
  let btncur = event.target;
  let btnParent = btncur.parentElement;
  let quantitynew = btnParent.querySelector('.number-quantity');
  if(Number(quantitynew.textContent) == 0) return;
  quantitynew.textContent = Number(quantitynew.textContent) - 1;
}

function plusQuantity1(event) {
  console.log('plus quantity');
  let btncur = event.target;
  let btnParent = btncur.parentElement;
  let quantitynew = btnParent.querySelector('.number-quantity');

  quantitynew.textContent = Number(quantitynew.textContent) + 1;
}

updateCart.addEventListener('click', reloadCart);


function reloadCart() {
  let quantity = document.querySelectorAll('.number-quantity');
  let price = document.querySelectorAll('.price-product');

  let total = 0;
  for(let i = 0; i < quantity.length; i++)
  {
    total = total + Number(quantity[i].textContent.trim()) * Number(price[i].textContent.replace('$','').trim());
    console.log(price[i].textContent.trim() + ' ' + quantity[i].textContent.trim());
  }
  totalCheckoutSub.textContent = `$${total}.00`;
  totalCheckoutTotal.textContent = `$${total}.00`;
}