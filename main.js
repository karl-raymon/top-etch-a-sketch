const GRID_SIZE = 600;
let gridCells = 16;
let isRandomized = false;
let color = 'black';
let isEraseEnabled = false;
const container = document.querySelector('.container');
const resetBtn = document.querySelector('#resetBtn');

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
  const targetStyle = event.target.style;
  let opacity = Number(targetStyle.opacity);

  if (isRandomized && !isEraseEnabled) {
    targetStyle.backgroundColor = `hsl(${Math.floor(Math.random() * 361)} 100% 50%)`;

    // console.log(typeof 0.1);

    targetStyle.opacity = `${opacity === 1 ? opacity : opacity + 0.1}`;
    console.log(targetStyle.opacity);
  } else if (!isRandomized && isEraseEnabled === true) {
    targetStyle.removeProperty('background-color');
    targetStyle.removeProperty('opacity');
  } else {
    targetStyle.backgroundColor = 'black';
    targetStyle.opacity = `${opacity === 1 ? opacity : opacity + 0.1}`;
  }
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
const eraserBtn = document.querySelector('#eraser');

blackBtn.addEventListener('click', setPaintColor);
randomBtn.addEventListener('click', setPaintColor);
eraserBtn.addEventListener('click', erasePaint);

function setPaintColor(e) {
  isEraseEnabled = false;

  if (e.target.id === 'black') {
    isRandomized = false;
  } else {
    isRandomized = true;
  }
}

function erasePaint(e) {
  isRandomized = false;
  isEraseEnabled = true;
}

resetBtn.addEventListener('click', resetCanvas);

function resetCanvas() {
  container.textContent = '';
  createGridCells();
}
