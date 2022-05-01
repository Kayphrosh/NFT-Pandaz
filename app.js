const body = document.querySelector('.heroe');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.navbar a');

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
            circle.style.borderBottom = '2px solid #a67c00';
        } else{
            circle.classList.remove('active-link')
            circle.style.color = '#ffffff';
            circle.style.border = 'none';
        }

    })
}

let toggleNavstatus = false;
const navbar = document.querySelector('.navbar');
const opennav = document.querySelector('.hamburger #open');
const closeNav = document.querySelector('.hamburger #close');
let toggleNav = function() {
    if (toggleNavstatus === false) {
        navbar.style.display = 'flex';
        navbar.style.transform = 'translate(0%)';
        opennav.style.display = 'none'
        closeNav.style.display = 'flex'
        toggleNavstatus = true;
    }
    else if (toggleNavstatus === true) {
        // navbar.style.display = 'none';
        navbar.style.transform = 'translate(100%)';
        closeNav.style.display = 'none'
        opennav.style.display = 'flex'
         toggleNavstatus = false;
    }
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);