const gridContainer = document.getElementById('gridContainer');

function createGrid(rows, columns) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    for (let i = 0; i < rows * columns; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
    }
}

function paintRandomColor(event) {
    const randomColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
    event.target.style.backgroundColor = randomColor;
    setTimeout(() => {
        event.target.style.backgroundColor = '';
    }, 1000);
}

gridContainer.addEventListener('mouseover', paintRandomColor);

createGrid(20, 20);
