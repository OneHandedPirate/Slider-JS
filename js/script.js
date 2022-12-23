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

let slider = document.getElementById('slider');
let left = document.getElementsByClassName('arrow')[0];
let right = document.getElementsByClassName('arrow')[1];
right.innerHTML = '<img class="arrow_img" src="./assets/arrow.png" alt="arrow">';
left.innerHTML = '<img class="arrow_img left_arrow" src="./assets/arrow.png" alt="arrow">';


let bar = document.createElement('div');
bar.className = 'bar';
bar.style.display = 'flex';
for (let i = 0; i < images.length; i++) {
    bar.insertAdjacentHTML('afterbegin', '<div class="round"></div>')
}

slider.after(bar);

bar.children[image_number].style.opacity = '0.8';
bar.children[image_number].style.width = '40px';
bar.children[image_number].style.borderRadius = '20px';

slider.style.backgroundImage = `url(${images[image_number]})`;

function mutateImage(event) {
    bar.children[image_number].style.opacity = '0.5';
    bar.children[image_number].style.width = '20px';
    bar.children[image_number].style.borderRadius = '50%';
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

    slider.style.backgroundImage = `url(${images[image_number]})`;
    bar.children[image_number].style.borderRadius = '20px';
    bar.children[image_number].style.opacity = '0.7';
    bar.children[image_number].style.width = '40px';
    event.stopPropagation();
}

slider.addEventListener('click', mutateImage);
document.addEventListener('keydown', mutateImage);
bar.addEventListener('click', mutateImage);





