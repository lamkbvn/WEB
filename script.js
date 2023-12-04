let person = document.querySelector(".user-header");
let sectionFormLogin = document.querySelector(".section-form-login");
let overlayFormLogin = document.querySelector(".overlay-form-login");
let btnActive = document.querySelector(".btn-active");

let input = document.querySelector(".input");
let body = document.querySelector("body");
let exitBtnLogin = document.querySelector(".exit-login");
let invalidAccountLogin = document.querySelector(".invalid-account-login");

let sectionFormRegister = document.querySelector(".section-form-register");
let overlayFormRegister = document.querySelector(".overlay-form-register");
let exitBtnRegister = document.querySelector(".exit-register");

person.onclick = function () {
  if (!(checkhref1())) {
    sectionFormLogin.classList.remove("hidden-form");
    body.style.overflow = "hidden";
    invalidAccountLogin.innerHTML = "";
    btnLogin.classList.add("btn-active");
    btnRegister.classList.remove("btn-active");
    sectionFormRegister.classList.add("hidden-form");
    sectionFormLogin.classList.remove("hidden-form");
  } else window.location = "historyOrder.html";
};

exitBtnLogin.onclick = function () {
  sectionFormLogin.classList.add("hidden-form");
  body.style.overflow = "";
  invalidAccountLogin.innerHTML = "";
};

overlayFormLogin.onclick = function () {
  sectionFormLogin.classList.add("hidden-form");
  body.style.overflow = "";
  invalidAccountLogin.innerHTML = "";
};

let btnLogin = document.querySelector(".btn-login");
let btnRegister = document.querySelector(".btn-register");

btnLogin.onclick = function () {
  btnLogin.classList.add("btn-active");
  btnRegister.classList.remove("btn-active");
  sectionFormRegister.classList.add("hidden-form");
  sectionFormLogin.classList.remove("hidden-form");
};

btnRegister.onclick = function () {
  btnLogin.classList.remove("btn-active");
  btnRegister.classList.add("btn-active");
  sectionFormLogin.classList.add("hidden-form");
  sectionFormRegister.classList.remove("hidden-form");
};

exitBtnRegister.onclick = function () {
  sectionFormRegister.classList.add("hidden-form");
  body.style.overflow = "";
  invalidAccountLogin.innerHTML = "";
};

overlayFormRegister.onclick = function () {
  sectionFormRegister.classList.add("hidden-form");
  body.style.overflow = "";
  invalidAccountLogin.innerHTML = "";
};

let btnSearch = document.querySelector(".search");
let sectionSearch = document.querySelector(".section-search");
let overlaySearch = document.querySelector(".overlay-search");
let exitSearch = document.querySelector(".exit-search");
btnSearch.onclick = function () {
  sectionSearch.classList.remove("hidden-form");
};

overlaySearch.onclick = function () {
  sectionSearch.classList.add("hidden-form");
};

exitSearch.onclick = function () {
  sectionSearch.classList.add("hidden-form");
};

let btnCart = document.querySelector(".cart");
let sectionCart = document.querySelector(".section-cart");
let overlayCart = document.querySelector(".overlay-cart");
let exitCart = document.querySelector(".exit-cart");
btnCart.onclick = function () {
  sectionCart.classList.remove("hidden-form");
};

overlayCart.onclick = function () {
  sectionCart.classList.add("hidden-form");
};

exitCart.onclick = function () {
  sectionCart.classList.add("hidden-form");
};

//SEARCH
let timkiem = document.querySelector('.btn-search');

timkiem.onclick = function(){
  if(checkhref1())
    window.location = "search1.html";
  else window.location = "search.html";
}



// Active nav section indicator
let navItems = document.querySelector(".nav");
var actItem = document.querySelector(".active-item");

navItems.addEventListener("click", function (event) {
  var clickedItem = event.target.closest(".nav-item");
  if (clickedItem) {
    actItem.classList.remove("active-item");
    clickedItem.classList.add("active-item");
    actItem = clickedItem;
  }
});

window.addEventListener("load", adjustMargin);
window.addEventListener("resize", adjustMargin);

function adjustMargin() {
  var headerHeight = document.querySelector(".header").offsetHeight;
  document.body.style.marginTop = headerHeight + "px";
}

function orderDetails() {
  window.location = "OrderDetail.html";
}
