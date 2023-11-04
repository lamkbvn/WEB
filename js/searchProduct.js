let listProduct = document.querySelectorAll('.product-sale');
let contentSearch = document.querySelector('.content-search');
let btnSearch = document.querySelector('.btn-search');
let listResultSearch = document.querySelector('.list-result-search');
let categoriesProductSale = document.querySelectorAll('.categories-product-sale');
let saleBadge = document.querySelectorAll('.sale-badge');

btnSearch.addEventListener('click', displayResultSearch);

let listResult = [];

function displayResultSearch(){
  let selectTypeClothe = `${document.querySelector('#select-type-clothe').value}`;
  listResult = [];
  let strSearch = `${contentSearch.value}`.toLowerCase().replaceAll(' ','');
  for(let i = 0; i < listProduct.length; i++){
    let nameP = listProduct[i].querySelector('.product-sale-name');
    searchProduct(i , nameP , -1 , strSearch , 0 ,selectTypeClothe);
  }
  updateListResult();
}

function searchProduct(i ,nameP , jNameP , strSearch, jStrSearch,selectTypeClothe){
  nameP1 = nameP.textContent.toLowerCase().trim();
  let jTemp = nameP1.search(strSearch[jStrSearch]);
  if(jTemp != -1 && jTemp > jNameP){
    ++jStrSearch;
    jNameP = jTemp;
    if(jStrSearch <  strSearch.length)
      searchProduct(i , nameP , jNameP , strSearch , jStrSearch,selectTypeClothe);
    else
    if(jStrSearch == strSearch.length && selectTypeClothe == 'All Clothe' || selectTypeClothe == categoriesProductSale[i].textContent.trim())
      {
        let name1 = nameP.textContent.trim();
        let price1 ;
        if(saleBadge[i].textContent == 'NORMAL')
          {
            price1 = nameP.parentElement.querySelector('.product-normal-price').textContent;
            console.log(price1);
          }
        if(saleBadge[i].textContent == 'SALE')
        {
          price1 = nameP.parentElement.querySelector('.product-sale-price').textContent;
          console.log(price1);
        }
        let newResult = {
          name  : name1 ,
          price : price1
        }
        
        listResult.push(newResult);
        return;
      }
  }
  else {
    listResultSearch.innerHTML = ``;
    listResultSearch.innerHTML = 'No Result';
  }
}

function updateListResult() {
  if(listResult.length > 0) listResultSearch.innerHTML = ``;
  for(let i = 0 ; i  < listResult.length ; i++){
    let newResultSearch = `
    <div class="infor-product-search">
      <a href="product.html" class="infor-product-search">
        <img src="img/product/product-6.jpg" alt="" class="img-product-search">
        <div class="text-product-search">
            <div class="name-product-search">${listResult[i].name}</div>
            <div class="price-product-search">${listResult[i].price}</div>
        </div>
      </a>
    </div>
    `;
    listResultSearch.insertAdjacentHTML('beforeend' , newResultSearch);
  }
}
