//nice scroll
let progress = document.getElementById("progressbar");
let totalHeigh = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let proheight = (window.pageYOffset / totalHeigh) * 100;
    progress.style.height = proheight + "%";
    //stiky navbar

    this.scrollY > 20 ? navbar.classList.add("sticky") :
        navbar.classList.remove("sticky");
}

//toggle menu
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
    navbar.classList.toggle("show");
    menuBtn.classList.toggle("hide");
    body.classList.toggle("disabled");
}





//start slider
const myslide = document.querySelectorAll('.myslide'),
    dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);

function autoSlide() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

    let i;
    for (i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(' active', '');
    }
    if (n > myslide.length) {
        counter = 1;
    }
    if (n < 1) {
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].className += " active";
}
//video player
let videoBtn = document.querySelector('.video-btn');
let clipVideo = document.querySelector('.clip-video');
let clipclose = document.querySelector('.clip-close');
let video = document.querySelector('.clip-video video');


videoBtn.onclick = function() {
    videoBtn.classList.add('activ-btnvideo');
    clipVideo.classList.add('activ-clipvideo');
    videoBtn.play();
}
clipclose.onclick = function() {
    videoBtn.classList.remove('activ-btnvideo');
    clipVideo.classList.remove('activ-clipvideo');
}