const body = document.querySelector('body');
const grid = document.createElement('div');

grid.classList.add('.grid');

body.appendChild(grid);

for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.classList.add('.square');
    grid.appendChild(square);
    console.log(i);
}

