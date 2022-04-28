const body = document.querySelector('.heroe');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.navbar a');
// const link = document.querySelectorAll('.navbar a');

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++
    if(activeSlide >  slides.length - 1) {
        activeSlide = 0;
    }
    setBgToBody()
    setActiveSlide()
})
leftBtn.addEventListener('click', () => {
    activeSlide--
    if(activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody(){
    body.style.backgroundColor = slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach((slide) => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}

let currentActive = 0

rightBtn.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length - 1) {
        currentActive = 0
    } 
    update()
})
leftBtn.addEventListener('click', () => {
    currentActive--
    if(currentActive < 0) {
        currentActive = slides.length - 1
    }
    update()
})
function update() {
        circles.forEach((circle, idx) => {
        if(idx === currentActive) {
            circle.classList.add('active-link')
            circle.style.color = '#a67c00';
            circle.style.borderBottom = '1px solid #a67c00';
        } else{
            circle.classList.remove('active-link')
            circle.style.color = '#ffffff';
            circle.style.border = 'none';
        }

    })
        // const actives = document.querySelectorAll('.active-link')
        // circles.style.color = (actives.length - 1) / (circles.length - 1) * 100 + '#fff'
}

let toggleNavstatus = false;
const navbar = document.querySelector('.navbar');
let toggleNav = function() {
    if (toggleNavstatus === false) {
        navbar.style.display = 'flex';
        toggleNavstatus = true
    }
    else if (toggleNavstatus === true) {
        navbar.style.display = 'none';
         toggleNavstatus = false;
    }
}
