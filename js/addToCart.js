const productCart = document.querySelector('.product-cart');
const itemCart = document.querySelectorAll('.item-cart');
const btnRemoveItemCart = document.querySelectorAll('.remove-item-cart');
let priceItemCart = document.querySelectorAll('.price-item-cart');
let totalPrice = document.querySelector('.totalprice');

function getTotalPrice() {
  let total  = 0;
for(const price of priceItemCart)
  total += Number(price.textContent.slice(1));
  return total;
}
totalPrice.textContent =`$${getTotalPrice()}`;

for(const [i,btnRemoveItem ] of btnRemoveItemCart.entries()){
      btnRemoveItem.addEventListener('click',
        function(){
          itemCart[i].remove();
          priceItemCart = document.querySelectorAll('.price-item-cart');
          totalPrice.textContent =`$${getTotalPrice()}`;
        }
      )
}



