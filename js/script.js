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

let left = document.createElement('div');
left.className = 'arrow left'
slider.prepend(left)
let right = document.createElement('div');
right.className = 'arrow right'
slider.append(right)
left.innerHTML = '&#10094;'
right.innerHTML = '&#10095;'
let bar = document.createElement('div');
bar.className = 'bar';
bar.style.display = 'flex';
for (let i = 0; i < images.length; i++) {
    bar.insertAdjacentHTML('afterbegin', '<div class="round"></div>')
}

slider.after(bar);

let dots = document.getElementsByClassName('round')

dots[image_number].className += " active"

slider.style.backgroundImage = `url(${images[image_number]})`;

function mutateImage(event) {
    dots[image_number].className = dots[image_number].className.replace("active", "")
    if (event.target === left.firstChild || event.key === 'ArrowLeft' || event.key === 'a' || event.target === left) {
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
    slider.style.backgroundImage = `url(${images[image_number]})`;
    event.stopPropagation();
}

slider.addEventListener('click', mutateImage);
document.addEventListener('keydown', mutateImage);
bar.addEventListener('click', mutateImage);







