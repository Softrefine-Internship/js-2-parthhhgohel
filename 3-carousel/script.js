const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

slides[0].classList.add('active');

function updateSlide(){
    dots.forEach( dot => {
        dot.classList.remove('active');
    });
    slides.forEach( slide => {
        slide.classList.remove('active');
    });


    dots[currentSlide].classList.add('active');
    slides[currentSlide].classList.add('active');
}

function prevSlide(){
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    // adding white border of previous btn
    prevBtn.style.outerBorder = "2px solid white";

    updateSlide();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    nextBtn.style.outerBorder = "2px solid white";
    updateSlide();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

dots.forEach( (dot,index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlide();
    });
});