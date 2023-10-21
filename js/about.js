let btnCustomerReviews = document.querySelectorAll('.btn');
let btnActive =document.querySelector('.active');
let row3 = document.querySelector('.row-3');
let row4 =document.querySelector('.row-4');
let container = document.querySelector('.container');

const textRow3 = [
  `Given wherein. Doesn't called also and air sea to make first subdue beginning. Appear seasons the it after whose beginning. Hath can't good life. They're multiply made give divided open, be likeness Cattle be have. Life tree darkness. She'd very.` ,
  `Given wherein. Doesn't called also and air sea to make first subdue beginning. Appear seasons the it after whose beginning. Hath can't good life. They're multiply made give divided open, be likeness Cattle be have. Life tree darkness. She'd very.` ,
  `Given wherein. Doesn't called also and air sea to make first subdue beginning. Appear seasons the it after whose beginning. Hath can't good life. They're multiply made give divided open, be likeness Cattle be have. Life tree darkness. She'd very.`
]

const textRow4 =[
  `Darrell Baker, 18 May 2023`,
  `Darrell Baker, 19 May 2023`,
  `Darrell Baker, 20 May 2023`
]

let indexActive = 0;
let i = 0 ;
    setInterval(() => {
          ++i;
          if( i >= btnCustomerReviews.length)
            i=0;
          btnActive.classList.remove('active');
          btnCustomerReviews[i].classList.add('active');
          btnActive = btnCustomerReviews[i];
         // if(indexActive < i)
          {
            row3.style.animation = 'slide-left 0.3s';
            row4.style.animation = 'slide-left 0.3s';
          }
          // else if(indexActive > i)
          // {
          //   row3.style.animation = 'slide-right 0.3s';
          //   row4.style.animation = 'slide-right 0.3s';
          // }
          indexActive =i ;
          row3.style.transition ='animation 0.5s';
          row4.style.transition ='animation 0.5s';
          row3.innerHTML = textRow3[i];
          row4.innerHTML = textRow4[i];
          setTimeout(() => {
            row3.style.animation = '';
            row4.style.animation = '';
          }, 350
          );
    },10000);
