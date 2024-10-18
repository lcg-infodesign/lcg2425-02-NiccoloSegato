const lineLength = 70;
const halfLineLength = lineLength / 2;

const rotations = [45, 135, 22.5, 112.5, 67.5, 157.5];
const colors = ["red", "blue"];

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  noLoop();
}

function drawLine(x1, y1, x2, y2, distance) {
  line(x1, y1, x2, y2);
  if(distance == halfLineLength) {
    circle(x1, y1, 5);
    circle(x2, y2, 5);
  }
  else {
    circle(x1 * 1.5, y1 * 1.5, 5);
    circle(x2 * 1.5, y2 * 1.5, 5);
  }
}

function drawGlyph(x, y, lines) {
  strokeWeight(7);

  for(let i = 0; i < lines; i++) {
    stroke(random(colors));
    // Draw diagonal lines
    push();
    translate(x, y);
    rotate(rotations[floor(random(rotations.length))]);
    let length = random([halfLineLength, halfLineLength / 1.5]);
    drawLine(-length, 0, length, 0, length);
    pop();
  }

  stroke("black");
  // Draw horizontal line
  drawLine(x - halfLineLength, y, x + halfLineLength, y, halfLineLength);
  // Draw vertical line
  drawLine(x, y - halfLineLength, x, y + halfLineLength, halfLineLength);
}

function draw() {
  background(220);

  let columns = floor(windowWidth / 100);
  let rows = floor(windowHeight / 100);

  for(let i = 1; i < columns; i++) {
    for(let j = 2; j < rows - 1; j++) {
      drawGlyph(i * 100, j * 100, floor(random(1, 7)));
    }
  }
}
