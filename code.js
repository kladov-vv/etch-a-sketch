const grid = document.querySelector('.grid');
const btn = document.querySelector('button');

grid.addEventListener('mouseover', draw);
btn.addEventListener('click', newBoard);

for (let i = 0; i < (16 * 16); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${100 / 16}%`
    grid.appendChild(square);
}

function draw(event) {
    let target = event.target; 
    if (target.className == 'square') {
        event.target.style.backgroundColor = 'red';
    }
}

function newBoard() {
    let size = prompt('ENTER THE GRID SIZE');
    if(size > 100 || size < 0) {
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
