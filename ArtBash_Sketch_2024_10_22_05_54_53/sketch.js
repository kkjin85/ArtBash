let shapes = [];
let cols;
let rows;
let size = 15;
let img;
let imgX, imgY; // Variables to store image's top-left corner
var canvas;

function preload() {
  img = loadImage('images/artbash_typetrial1-14.png'); // Load image
}

function windowResized(){
  resizedCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index',-1);
  angleMode(DEGREES);
  cols = width / size;
  rows = height / size;
  background(0); // Black background

   // Calculate top-left corner to center the image
   imgX = (width - img.width) / 2;
   imgY = (height - img.height) / 2;
 
   // Loop through the grid
   for (let i = 0; i < cols; i++) {
     shapes[i] = [];
     for (let j = 0; j < rows; j++) {
       // Adjust pixel sampling to center the image
       let imgPixelX = floor(size / 2 + i * size - imgX);
       let imgPixelY = floor(size / 2 + j * size - imgY);
 
       // Ensure pixel coordinates are within image bounds
       if (imgPixelX >= 0 && imgPixelX < img.width && imgPixelY >= 0 && imgPixelY < img.height) {
         let c = img.get(imgPixelX, imgPixelY);
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
 }
 
 function draw() {
   background(0); // Clear the canvas each frame
 
   // Loop through and draw all shapes
   for (let i = 0; i < cols; i++) {
     for (let j = 0; j < rows; j++) {
       let shape = shapes[i][j];
       if (shape) {
         // Update hover state
         shape.isHovered = shape.checkHover(mouseX, mouseY);
 
         // Display the shape with scaling on hover
         shape.display();
       }
     }
   }
 }