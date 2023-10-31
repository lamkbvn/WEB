// if(document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded',ready);
// }
// else {
//   ready();
// }
// function ready()
{
    let removeItemCarts = document.querySelectorAll('.remove-item-cart');
    for (let i = 0; i < removeItemCarts.length; i++) {
      let btnRemove = removeItemCarts[i];
      btnRemove.addEventListener('click',removeItemCart);
    }

    function updateTotalPrice(){
      let priceItemCarts = document.querySelectorAll('.price-item-cart');
      let totalPrice = 0;
      for(let i = 0; i < priceItemCarts.length; i++){
        let price = Number(priceItemCarts[i].textContent.slice(1));
      totalPrice += price;
      }
      let changeTotalPrice = document.querySelector('.totalprice');
      changeTotalPrice.textContent = '$'  +  totalPrice;
    }

    updateTotalPrice();

    let addSalesToCart = document.querySelectorAll('.add-sale-to-cart');
    for(let i = 0; i < addSalesToCart.length; i++){
      let btnAddSaletoCart = addSalesToCart[i];
      btnAddSaletoCart.addEventListener('click',addSaleToCart);
    }

        
    function removeItemCart(event) {
      let btnRemoveClicked = event.target;
      btnRemoveClicked.parentElement.remove();
      updateTotalPrice();
    }

    function addSaleToCart(event) {
      let btnAddClicked = event.target;
      let parentBtnAdd =btnAddClicked.parentElement.parentElement.parentElement.parentElement.parentElement;
      let productSaleName =parentBtnAdd.querySelector('.product-sale-name').textContent.trim();
      let productSalePrice = parentBtnAdd.querySelector('.product-sale-price').textContent;
      let productCart = document.querySelector('.product-cart');
      let itemCart = productCart.querySelectorAll('.item-cart');
      console.log(productSaleName ,productSalePrice);
      for(let i = 0; i < itemCart.length; i++){
        let name = itemCart[i].querySelector('.name-item-cart').textContent;
        let price = itemCart[i].querySelector('.price-item-cart').textContent;
        if(name == productSaleName && price == productSalePrice)
        {
          alert('This product is already in cart.');
          return ;
        }
      }

      let newItemCart = document.createElement('li');
      newItemCart.className = 'item-cart';
      newItemCart.innerHTML = `
      <img src="img/product/product-6.jpg" alt="" class="img-item-cart">
      <div class="infor-item-cart">
          <div class="name-item-cart">${productSaleName}</div>
          <div class="price-item-cart">${productSalePrice}</div>
          <input type="number" class="quantity-item-cart" value="1">
      </div>
      <div class="remove-item-cart" id="remove-item-cart">&times;</div>`;
      newItemCart.querySelector('.remove-item-cart').addEventListener('click',removeItemCart);
      productCart.insertAdjacentElement('afterbegin' ,newItemCart);
      updateTotalPrice();
      
}

}





