const GRID_SIZE = 600;
let gridCells = 16;
let isRandomized = false;
let color = 'black';

const container = document.querySelector('.container');
container.style.width = `${GRID_SIZE}px`;
container.style.height = `${GRID_SIZE}px`;

createGridCells();

function createGridCells() {
  for (let i = 0; i < gridCells * gridCells; i++) {
    const cell = document.createElement('span');

    cell.classList.add('box');
    cell.style.width = `${GRID_SIZE / gridCells}px`;
    cell.style.height = `${GRID_SIZE / gridCells}px`;

    container.append(cell);

    cell.addEventListener('mouseenter', drawCell);
  }
}

function drawCell(event) {
  const targetBg = event.target.style;
  !isRandomized
    ? (targetBg.backgroundColor = 'black')
    : (targetBg.backgroundColor = `hsl(${Math.floor(Math.random() * 361)} 100% 50%)`);
}

const promptBtn = document.querySelector('#newSizeBtn');
promptBtn.addEventListener('click', setNewGridSize);

function setNewGridSize() {
  const size = Number(
    prompt('Enter grid size you want: \nPlease enter up to 100 only!'),
  );

  rowSize = size;
  colSize = size;
  container.textContent = ''; //texcontent is much safer that innerHTML
  createGridCells();
}

const blackBtn = document.querySelector('#black');
const randomBtn = document.querySelector('#random');

blackBtn.addEventListener('click', setPaintColor);
randomBtn.addEventListener('click', setPaintColor);

function setPaintColor(e) {
  e.target.id === 'black' ? (isRandomized = false) : (isRandomized = true);
}
