let shapes = [];
let cols;
let rows;
let size = 15;
let img;

function preload() {
  img = loadImage('images/artbash_typetrial1-11.png'); // Load image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  cols = width / size;
  rows = height / size;
  background(0); // Black background

  // Loop through the grid
  for (let i = 0; i < cols; i++) {
    shapes[i] = [];
    for (let j = 0; j < rows; j++) {
      let c = img.get(size / 2 + i * size, size / 2 + j * size);
      let brightnessValue = brightness(c);

      let shapeType = floor(random(5)); // Randomly pick a shape type

      // Create shape objects based on the random type
      if (shapeType === 0) {
        shapes[i][j] = new Rect(i * size, j * size, size, brightnessValue);
      } else if (shapeType === 1) {
        shapes[i][j] = new Circle(i * size, j * size, size, brightnessValue);
      } else if (shapeType === 2) {
        shapes[i][j] = new Triangle(i * size, j * size, size, brightnessValue);
      } else if (shapeType === 3) {
        shapes[i][j] = new RotatedRect(i * size, j * size, size, brightnessValue);
      } else if (shapeType === 4) {
        shapes[i][j] = new Trapezoid(i * size, j * size, size, brightnessValue);
      }
    }
  }
}

function draw() {
  background(0); // Clear the canvas each frame

  // Loop through and draw all shapes
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let shape = shapes[i][j];

      // Update hover state
      shape.isHovered = shape.checkHover(mouseX, mouseY);

      // Display the shape with scaling on hover
      shape.display();
    }
  }
}
