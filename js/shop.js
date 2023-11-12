// Filter toggle 
const filterWrapper = document.querySelector(".filter-list-cnt");

filterWrapper.addEventListener("click", (event) => {
    let clickedE = event.target.closest(".label-tg");
    if (clickedE) {
        event.preventDefault();
        let target = clickedE.nextElementSibling;
        target.classList.toggle("hidden");
    }
})

function toAllP(event) {
    event.preventDefault();
    document.querySelector('#shop-items').scrollIntoView();
}

//Slider 

const slider = document.querySelector('.slider');

const slides = document.querySelectorAll('.promotion-card');

let slideI = 0;

function nextSlide() {
    slideI = (slideI + 1) % slides.length;

    updateSlidePosition();
    updateSlideIndicator();
}

function updateSlidePosition() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${slideI * 100}%)`;
    })
};

function updateSlideIndicator() {
    let slideIdcts = document.querySelectorAll('.slide-item');

    document.querySelector('.selected-slide').classList.remove('selected-slide');
    slideIdcts[slideI].classList.add('selected-slide');
}

setInterval(nextSlide,4000);

const leftSlide = document.getElementById('slider-left');
const rightSlide = document.getElementById('slider-right');

leftSlide.addEventListener('click', (event) => {
    slideI = (slideI - 1) % slides.length;
    if(slideI < 0) slideI = slides.length - 1;
    updateSlidePosition();
    updateSlideIndicator();
    setTimeout(3000);
})

rightSlide.addEventListener('click', (event) => {
    nextSlide();
    setTimeout(3000);
})

