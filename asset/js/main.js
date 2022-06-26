//nice scroll
let progress = document.getElementById("progressbar");
let totalHeigh = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
        let proheight = (window.pageYOffset / totalHeigh) * 100;
        progress.style.height = proheight + "%";
    }
    //mouse effect
const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    //cursor effects when mouse stopped
    function mouseStopped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});


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
    //stiky navbar

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") :
        navbar.classList.remove("sticky");
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
//share btn
const shareOption = document.querySelector('.share-option');

document.querySelector('.share-button').addEventListener('click', function() {
    this.classList.toggle('active');
    shareOption.classList.toggle('active');
});