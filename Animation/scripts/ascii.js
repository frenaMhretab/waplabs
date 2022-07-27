const animationElement = document.querySelector('#animation');
const viewer = document.querySelector('.viewer');
const sizeElement = document.querySelector('#size');
const turboElement = document.querySelector('#turbo');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
var count = -1;
var interval = 250;
var intervalId;

stop.disabled = true;
turboElement.disabled = true;

function startInterval(_interval) {
    intervalId = setInterval(function() {
        animate();
    }, _interval);
}

start.addEventListener('click', event => {
    if (animationElement.value !== '') {
        start.disabled = true;
        stop.disabled = false;
        turboElement.disabled = false;
        clearInterval(intervalId);
        startInterval(interval);
    } else {
        alert('Please select an animation!')
    }
})

stop.addEventListener('click', event => {
    stop.disabled = true;
    turboElement.disabled = true;
    start.disabled = false;
    clearInterval(intervalId);
    event.stopPropagation();
});

animationElement.addEventListener('change', (event) => {
    viewer.textContent = ANIMATIONS[event.target.value];
});

sizeElement.addEventListener('change', (event) => {
    viewer.style.fontSize = event.target.value;
});

function animate() {
    count++;
    let animation = ANIMATIONS[animationElement.value].split("=====");
    if (count >= animation.length) {
        count = 0;
    }
    viewer.textContent = animation[count]
}

turboElement.addEventListener('change', (event) => {
    if (turboElement.checked) {
        interval = 50;
    } else {
        interval = 250;
    }
    clearInterval(intervalId);
    startInterval(interval);
});