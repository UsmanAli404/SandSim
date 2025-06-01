function make2DArray(cols, rows){
  let arr = new Array(cols);
  for(let i = 0; i < arr.length; i++){
    arr[i] = new Array(rows);
    for(let j = 0; j < rows; j++){
      arr[i][j] = 0;
    }
  }
  return arr;
}

let grid;
let w = 10; // size of each square
let rows, cols;
let n = 3; // brush size
let hueVal = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 255, 255);
  initializeGrid();
}

function initializeGrid() {
  cols = floor(width / w);
  rows = floor(height / w);
  grid = make2DArray(cols, rows);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initializeGrid();
}

function draw() {
  background(0);
  
  // add particles
  if (mouseIsPressed) {
    let Col = floor(mouseX / w);
    let Row = floor(mouseY / w);
    let extent = floor(n / 2);

    for (let i = -extent; i <= extent; i++) {
      for (let j = -extent; j <= extent; j++) {
        if (random(1) < 0.75) {
          let x = Col + i;
          let y = Row + j;
          if (x >= 0 && x < cols && y >= 0 && y < rows) {
            grid[x][y] = grid[x][y] === 0 ? hueVal : 0;
          }
        }
      }
    }

    hueVal += 0.25;
    if (hueVal > 360) hueVal = 1;
  }

  // draw particles
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] > 0) {
        fill(grid[i][j], 255, 255);
        noStroke();
        square(i * w, j * w, w);
      }
    }
  }

  // update grid
  let nextGrid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      if (state > 0) {
        if (j + 1 < rows && grid[i][j + 1] === 0) {
          nextGrid[i][j + 1] = state;
        } else {
          let moved = false;
          if (random(1) < 0.5) {
            moved = exploreRight(i, j, nextGrid);
            if (!moved) moved = exploreLeft(i, j, nextGrid);
          } else {
            moved = exploreLeft(i, j, nextGrid);
            if (!moved) moved = exploreRight(i, j, nextGrid);
          }
          if (!moved) nextGrid[i][j] = state;
        }
      }
    }
  }

  grid = nextGrid;

  // --- Brush size label ---
  let label = "Brush size: " + n;
  textSize(16);
  textAlign(LEFT, TOP);
  let padding = 25;
  let tw = textWidth(label) + padding * 2;
  let th = textAscent() + textDescent() + padding * 2;
  let x = width - tw - 10;
  let y = height - th - 10;

  fill(0, 150);
  noStroke();
  rect(x, y, tw, th, 5);
  fill(255);
  text(label, x + padding, y + padding);
}

function exploreLeft(i, j, nextGrid){
  if (i - 1 >= 0 && j + 1 < rows && grid[i - 1][j + 1] === 0) {
    nextGrid[i - 1][j + 1] = grid[i][j];
    return true;
  }
  return false;
}

function exploreRight(i, j, nextGrid){
  if (i + 1 < cols && j + 1 < rows && grid[i + 1][j + 1] === 0) {
    nextGrid[i + 1][j + 1] = grid[i][j];
    return true;
  }
  return false;
}

function mouseWheel(event) {
  if (event.delta > 0 && n + 2 < 11) {
    n += 2;
  } else if (event.delta < 0) {
    n = max(1, n - 2);
  }
}
