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
      let productSalePrice = parentBtnAdd.querySelector('.product-sale-price').textContent;
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
        price : productSalePrice
      }
      account[indexAccountnameCur].cart.unshift(updateCartUSer);
      loadDataCart();
      }
      else{
        alert('Please Sign in');
      }
    }


function updateTotalPrice(){
  let changeTotalPrice = document.querySelector('.totalprice');
  if(document.querySelectorAll('.item-cart') == null){
    changeTotalPrice.innerHTML = '0';
    numberProductInCart[0].innerHTML = '0' ;
    numberProductInCart[1].innerHTML = `0` ;
  }
  else{
  let itemCart = document.querySelectorAll('.item-cart');
  let priceItemCarts = document.querySelectorAll('.price-item-cart');
  let totalPrice = 0;
  for(let i = 0; i < priceItemCarts.length; i++){
    let price = Number(priceItemCarts[i].textContent.slice(1));
  totalPrice += price;
  }
  if(changeTotalPrice != null)
    changeTotalPrice.innerHTML = '$'  +  totalPrice;

  numberProductInCart[0].innerHTML = `${itemCart.length}` ;
  numberProductInCart[1].innerHTML = `(${itemCart.length})` ;
}
}

updateTotalPrice();
        
function removeItemCart(event) {
  let btnRemoveClicked = event.target;
  btnRemoveClicked.parentElement.remove();
  updateTotalPrice();
}

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
        <input type="number" class="quantity-item-cart" value="1">
    </div>
    <div class="remove-item-cart" id="remove-item-cart">&times;</div>`;
    newItemCart.querySelector('.remove-item-cart').addEventListener('click',removeItemCart);
    productCart.insertAdjacentElement('beforeend' ,newItemCart);
    updateTotalPrice();
  }
}




