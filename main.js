const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;


function randomSquare() {
    // removing mole before adding to random grid cell
    square.forEach(squareClassName => {
        squareClassName.classList.remove('mole');
    });
    // random position of mole and adding class of mole 
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    // id of 
    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result++;
            score.textContent = result;
        }
    });
});


function moveMole () {
    // index of setInterval to use it at clearInterval
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    
    if(currentTime === 0) {
        clearInterval(timerId);
        alert('GAME OVER! Yours result: ' + result);
    }
}

let timerId = setInterval(countDown, 500);

