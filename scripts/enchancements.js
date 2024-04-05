"use strict"
//Image slide show source code: https://www.bannerbear.com/blog/how-to-create-an-image-slider-in-html-css-and-javascript/

function load() {
    var currentImg = 0;
    var imgs = document.querySelectorAll('.slider img');
    let dots = document.querySelectorAll('.dot');
    var interval = 3000;
    var timer = setInterval(changeSlide, interval);
    //get onclick of dot

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function () {
            changeSlide(i);
        });
    }

    function changeSlide(n) {
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = 0;
            dots[i].className = dots[i].className.replace(' active', '');
        }
        currentImg = (currentImg + 1) % imgs.length;
        if (n != undefined) {
            clearInterval(timer);
            timer = setInterval(changeSlide, interval);
            currentImg = n;
        }
        imgs[currentImg].style.opacity = 1;
        dots[currentImg].className += ' active';
    }
}

window.addEventListener("load", load);