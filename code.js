const body = document.querySelector('body');
const grid = document.createElement('div');
const square = document.createElement('div');

body.appendChild(grid);
for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
}

