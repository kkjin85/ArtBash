class Trapezoid extends Shape {
  constructor(x, y, size, brightnessValue) {
    super(x, y, size, brightnessValue);
    this.shapeColor = "#66C287"; // Light green
    this.topWidth = size * 0.7;  // Top width of the trapezoid
    this.bottomWidth = size;     // Bottom width of the trapezoid
  }

  display() {
    this.applyFill(); // Apply fill or stroke

    let scaleFactor = this.isHovered ? 3 : 1; // Scale on hover

    push(); // Save the current drawing state
    translate(this.x + this.size / 2, this.y + this.size / 2); // Move origin to the center

    // Scale the entire shape uniformly
    scale(scaleFactor);

    // Draw the trapezoid centered at (0, 0)
    beginShape();
    vertex(-this.topWidth / 2, -this.size / 2);              // Top-left
    vertex(this.topWidth / 2, -this.size / 2);               // Top-right
    vertex(this.bottomWidth / 2, this.size / 2);             // Bottom-right
    vertex(-this.bottomWidth / 2, this.size / 2);            // Bottom-left
    endShape(CLOSE);

    pop(); // Restore original drawing state
  }

  // Use distance-based detection for hover
  checkHover(mx, my) {
    let centerX = this.x + this.size / 2;
    let centerY = this.y + this.size / 2;
    let d = dist(mx, my, centerX, centerY);
    return d < this.size / 2; // Adjust sensitivity as needed
  }
}
