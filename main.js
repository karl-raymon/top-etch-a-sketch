const GRID_SIZE = 600;
let rowSize = 16;
let colSize = 16;

const container = document.querySelector('.container');
container.style.width = `${GRID_SIZE}px`;
container.style.height = `${GRID_SIZE}px`;

createGridCells();

function createGridCells() {
  for (let i = 0; i < rowSize * colSize; i++) {
    const cell = document.createElement('span');

    cell.classList.add('box');
    cell.style.width = `${GRID_SIZE / rowSize}px`;
    cell.style.height = `${GRID_SIZE / colSize}px`;

    container.append(cell);

    cell.addEventListener('mouseenter', drawCell);
  }
}

function drawCell(event) {
  event.target.style.backgroundColor = 'black';
}

function setNewGridSize() {
  const size = Number(
    prompt('Enter grid size you want: \nPlease enter up to 100 only!'),
  );

  rowSize = size;
  colSize = size;
  container.innerHTML = '';
  createGridCells();
}

const promptBtn = document.querySelector('#newSizeBtn');
// promptBtn.textContent = 'Set New Size';
// container.append(promptBtn);

promptBtn.addEventListener('click', setNewGridSize);
