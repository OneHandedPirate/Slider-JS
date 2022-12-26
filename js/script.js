'use strict';

let images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.webp',
    './assets/7.webp',
    './assets/8.webp',
]

let image_number = 0;
let slider = document.getElementById('slider')

for (let i = 0; i < images.length; i++) {
    let image = document.createElement('img')
    image.className = 'img hidden'
    image.src = images[i]
    slider.append(image)
}

let left = document.createElement('div');
left.className = 'arrow left'
left.innerHTML = '&#10094;'
slider.append(left)

let right = document.createElement('div');
right.className = 'arrow right'
right.innerHTML = '&#10095;'
slider.append(right)

let bar = document.createElement('nav');
bar.style.display = 'flex';
for (let i = 0; i < images.length; i++) {
    bar.insertAdjacentHTML('afterbegin', '<div class="round"></div>');
}
slider.after(bar);

let dots = document.getElementsByClassName('round')
let imgs = document.getElementsByClassName('img')

dots[image_number].className += " active"
imgs[image_number].className = imgs[image_number].className.replace(' hidden', '')

function mutateImage(event) {
    dots[image_number].className = dots[image_number].className.replace(" active", "")
    imgs[image_number].className += ' hidden'
    if (event.key === 'ArrowLeft' || event.key === 'a' || event.target === left) {
        image_number--;
    } else {
        image_number++;
    }

    if (image_number < 0) {
        image_number = images.length - 1;
    }
    if (image_number > images.length - 1) {
        image_number = 0;
    }

    for (let i = 0; i < images.length; i++) {
        if (event.target === bar.children[i]) {
            image_number = i;
            break;
        }
    }
    dots[image_number].className += ' active';
    imgs[image_number].className = imgs[image_number].className.replace(' hidden', '')
    event.stopPropagation();
}

// Experimental

let loaderDiv = document.createElement('div')
loaderDiv.className = 'loader'
loaderDiv.innerHTML = '<span class="l">LOADING</span>'
function loader() {
    slider.prepend(loaderDiv)
}

function unload() {
    loaderDiv.remove()
}


slider.addEventListener('click', mutateImage);
document.addEventListener('keydown', mutateImage);
bar.addEventListener('click', mutateImage);
document.addEventListener('DOMContentLoaded', loader)
window.addEventListener('load', unload)






