// if(document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded',ready);
// }
// else {
//   ready();
// }
// function ready()
    let productCart = document.querySelector('.product-cart');
    let numberProductInCart = document.querySelectorAll('.number-product-in-cart');
    let removeItemCarts = document.querySelectorAll('.remove-item-cart');
    for (let i = 0; i < removeItemCarts.length; i++) {
      let btnRemove = removeItemCarts[i];
      btnRemove.addEventListener('click',removeItemCart);
    }

    function removeItemCart(event) {
      let btnRemoveClicked = event.target;
      let nameProductRemove = btnRemoveClicked.parentElement.querySelector('.name-item-cart').textContent;
      for(let i = 0; i < account[indexAccountnameCur].cart.length; i++) {
        if(nameProductRemove == account[indexAccountnameCur].cart[i].name){
          for(let j = i ; j <  account[indexAccountnameCur].cart.length - 1; j++)
            account[indexAccountnameCur].cart[j] = account[indexAccountnameCur].cart[j+1];
          account[indexAccountnameCur].cart.pop();
          break;
        }
      }
      btnRemoveClicked.parentElement.remove();
      updateTotalPrice();
      saveData();
    }

    let addSalesToCart = document.querySelectorAll('.add-sale-to-cart');
    for(let i = 0; i < addSalesToCart.length; i++){
      let btnAddSaletoCart = addSalesToCart[i];
      btnAddSaletoCart.addEventListener('click',addSaleToCart);
    }


    function addSaleToCart(event) {
      if(isSignIn){
        let btnAddClicked = event.target;
        //get infor name and price of product
      let parentBtnAdd =btnAddClicked.parentElement.parentElement.parentElement.parentElement.parentElement;
      let productSaleName =parentBtnAdd.querySelector('.product-sale-name').textContent.trim();
      let typeSale = parentBtnAdd.querySelector('.sale-badge');
      let productSalePrice;
      if(typeSale.textContent == 'SALE')
        productSalePrice  = parentBtnAdd.querySelector('.product-sale-price').textContent;
      if(typeSale.textContent == 'NORMAL')
        productSalePrice  = parentBtnAdd.querySelector('.product-normal-price').textContent;
      console.log(typeSale.textContent);
      let productCart = document.querySelector('.product-cart');
      let itemCart = productCart.querySelectorAll('.item-cart');
      for(let i = 0; i < itemCart.length; i++){
        let name = itemCart[i].querySelector('.name-item-cart').textContent;
        let price = itemCart[i].querySelector('.price-item-cart').textContent;
        if(name == productSaleName && price == productSalePrice)
        {
          alert('This product is already in cart.');
          return ;
        }
      }

      let updateCartUSer = {
        name : productSaleName,
        price : productSalePrice,
        quantity : 1
      }
      account[indexAccountnameCur].cart.unshift(updateCartUSer);
      loadDataCart();
      saveData();
      }
      else{
        alert('Please Sign in');
      }
    }


function updateTotalPrice(){
  if(document.querySelectorAll('.item-cart') == null){
    changeTotalPrice.innerHTML = '0';
    numberProductInCart[0].innerHTML = '0' ;
    numberProductInCart[1].innerHTML = `0` ;
    return;
  }

  let changeTotalPrice = document.querySelector('.totalprice');
  let itemCart = document.querySelectorAll('.item-cart');
  let priceItemCarts = document.querySelectorAll('.price-item-cart');
  let quantityItemCarts = document.querySelectorAll('.quantity-item-cart');
  let totalPrice = 0;
  for(let i = 0; i < priceItemCarts.length; i++){
    let price = Number(priceItemCarts[i].textContent.slice(1)) * Number(quantityItemCarts[i].textContent);
    totalPrice += price;
  }
  changeTotalPrice.innerHTML = '$'  +  totalPrice;
  numberProductInCart[0].innerHTML = `${itemCart.length}` ;
  numberProductInCart[1].innerHTML = `(${itemCart.length})` ;
}

updateTotalPrice();
        


function loadDataCart(){
  if(account[indexAccountnameCur].cart == null)
    return;
  ///delete all data old
  productCart.innerHTML = '';
  ////load data new
  for(let i = 0 ; i < account[indexAccountnameCur].cart.length ; i++)
  {
    let newItemCart = document.createElement('li');
    newItemCart.className = 'item-cart';
    newItemCart.innerHTML = `
    <img src="img/product/product-6.jpg" alt="" class="img-item-cart">
    <div class="infor-item-cart">
        <div class="name-item-cart">${account[indexAccountnameCur].cart[i].name}</div>
        <div class="price-item-cart">${account[indexAccountnameCur].cart[i].price}</div>
        <div class="edit-quantity">
          <img src="img/iconcart/minus.svg" alt="" class="btn-edit-quantity minus">
          <div class="quantity-item-cart">
            ${account[indexAccountnameCur].cart[i].quantity}
          </div>
          <img src="img/iconcart/plus.svg" alt="" class="btn-edit-quantity plus">
        </div>
    </div>
    <div class="remove-item-cart" id="remove-item-cart">&times;</div>`;
    newItemCart.querySelector('.remove-item-cart').addEventListener('click',removeItemCart);
    newItemCart.querySelector('.minus').addEventListener('click',minusQuantityClick);
    newItemCart.querySelector('.plus').addEventListener('click',plusQuantityClick);
    productCart.insertAdjacentElement('beforeend' ,newItemCart);
    updateTotalPrice();
  }
}

let minusQuantity = document.querySelectorAll('.minus');
let plusQuantity = document.querySelectorAll('.plus');


for( let i =0; i < minusQuantity.length ; i++) {
  minusQuantity[i].addEventListener('click',minusQuantityClick);
  plusQuantity[i].addEventListener('click',plusQuantityClick);
}


function minusQuantityClick(event){
  let btnMinus = event.target;
  let parenBtnMinus =btnMinus.parentElement;
  let quantitys = parenBtnMinus.querySelector('.quantity-item-cart');
  let cvQuantitysNumber = Number(quantitys.textContent);
  if( cvQuantitysNumber == 0)
    return;
  --cvQuantitysNumber;
  quantitys.innerHTML = `${cvQuantitysNumber}`;
  updateQuantityClick();
  updateTotalPrice();
}

function plusQuantityClick(event) {
  let btnPlus = event.target;
  let parenBtnPlus =btnPlus.parentElement;
  let quantitys = parenBtnPlus.querySelector('.quantity-item-cart');
  let cvQuantitysNumber = Number(quantitys.textContent);
  ++cvQuantitysNumber;
  quantitys.innerHTML = `${cvQuantitysNumber}`;
  updateQuantityClick();
  updateTotalPrice();
}

function updateQuantityClick(){
  let minusQuantity1 = document.querySelectorAll('.minus');
  let Quantity1 = document.querySelectorAll('.quantity-item-cart');
  for( let i =0; i < minusQuantity1.length ; i++) {
    account[indexAccountnameCur].cart[i].quantity = Quantity1[i].textContent;
  }
}



