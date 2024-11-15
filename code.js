const grid = document.querySelector('.grid');
const btnNew = document.querySelector('#btn-new');
const btnRandom = document.querySelector('#btn-random');
let randomColor = false;

grid.addEventListener('mouseover', draw);
btnNew.addEventListener('click', newBoard);
btnRandom.addEventListener('click', randomColorOnOff);

for (let i = 0; i < (16 * 16); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${100 / 16}%`
    grid.appendChild(square);
}

function randomColorOnOff() {
    if (randomColor === false) {
        randomColor = true;
        btnRandom.textContent = 'BLACK';
    } else {
        randomColor = false;
        btnRandom.textContent = 'RANDOM';
    }
}

function randomRGB() {
    let randomNum = () => Math.floor(Math.random() * 256);
    let color = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    return color;
}

function draw(event) {
    let target = event.target; 
    if (target.className === 'square') {
        if (randomColor === false) {
            target.style.backgroundColor = 'black';
        } else {
            target.style.backgroundColor = randomRGB();
        }
    }
}

function newBoard() {
    let size = prompt('ENTER THE GRID SIZE');
    if(size > 100 || size < 1) {
        newBoard();
    } else {
        while(grid.firstChild) {
            grid.removeChild(grid.lastChild);
       }
       for (let i = 0; i < (size * size); i++) {
           const square = document.createElement('div');
           square.classList.add('square');
           square.style.width = `${100 / size}%`
           grid.appendChild(square);
       }
    }
}
