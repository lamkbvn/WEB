
const switchPageAbout = document.querySelector('.about');
const pageMain = document.querySelector('.page-main');
const pageAbout = document.querySelector('.page-about');
const returnHome = document.querySelector('.return-home');


switchPageAbout.addEventListener('click' ,
  function () {
    pageMain.classList.add('hidden-form');
    pageAbout.classList.remove('hidden-form');
  }
)

returnHome.addEventListener('click' ,
  function () {
    pageMain.classList.remove('hidden-form');
    pageAbout.classList.add('hidden-form');
  }
)