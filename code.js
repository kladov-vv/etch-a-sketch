const grid = document.querySelector('.grid');

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    // square.addEventListener('mouseenter', draw);
}

// grid.addEventListener('mouseover', draw);

function draw(event) {
    let target = event.target; 
    if (target.className === 'square') {
        event.target.style.backgroundColor = 'red';
    }
}
