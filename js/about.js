let btnCustomerReviews = document.querySelectorAll('.btn1');
let btnActive1 =document.querySelector('.active1');
let row3 = document.querySelector('.text-des');
let row4 =document.querySelector('.date-des');
let container = document.querySelector('.container');


const textRow3 = [
  `Given wherein. Doesn't called also and air sea to make first subdue beginning. Appear seasons the it after whose beginning. Hath can't good life. They're multiply made give divided open, be likeness Cattle be have. Life tree darkness. She'd very.` ,
  `Doesn't called also and air sea to make first subdue beginning. Appear seasons the it after whose beginning. Hath can't good life. They're multiply made give divided open, be likeness Cattle be have. Life tree darkness. She'd very.` ,
  `Given wherein. Doesn't called also and air sea to make first subdue beginning. Appear seasons the it after whose beginnin.They're multiply made give divided open, be likeness Cattle be have. Life tree darkness. She'd very.`
]

const textRow4 =[
  `Darrell Baker, 18 May 2023`,
  `Darrell Baker, 19 May 2023`,
  `Darrell Baker, 20 May 2023`
]

//let indexActive = 0;

for(let i = 0; i < btnCustomerReviews.length; i++) {
    btnCustomerReviews[i].addEventListener('click', function(){
        btnActive1.classList.remove('active1');
        btnCustomerReviews[i].classList.add('active1');
        btnActive1 = btnCustomerReviews[i];

        row3.textContent = textRow3[i];
        row4.textContent = textRow4[i];

        row3.style.animation ='slide-left 0.3s';
        row4.style.animation ='slide-left 0.3s';

        setTimeout(() => {
          row3.style.animation = '';
          row4.style.animation = '';
        }, 350);

    });

}

