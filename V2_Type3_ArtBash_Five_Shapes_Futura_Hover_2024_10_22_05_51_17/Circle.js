class Circle extends Shape {
  constructor(x, y, size, strokeSize) {
    super(x, y, size, strokeSize);
    this.shapeColor = "#FF8D6D";
  }

  display(brightnessValue) {
    this.applyFill(brightnessValue);
    let scaleFactor = this.isHovered ? 3 : 1; // Scale size on hover
    ellipse(this.x + this.size / 2, this.y + this.size / 2, this.size * scaleFactor);
  }

  // Check if the mouse is inside the circle using dist()
  checkHover(mouseX, mouseY) {
    let d = dist(mouseX, mouseY, this.x + this.size / 2, this.y + this.size / 2);
    return d < this.size / 2; // Mouse is inside if the distance is less than radius
  }
}
