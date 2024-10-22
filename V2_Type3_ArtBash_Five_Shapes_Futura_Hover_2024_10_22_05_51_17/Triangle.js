class Triangle extends Shape {
  constructor(x, y, size, brightnessValue) {
    super(x, y, size, brightnessValue);
    this.shapeColor = "#5BCAE9"; // Light blue
  }

  display() {
    this.applyFill(); // Apply fill or stroke

    let scaleFactor = this.isHovered ? 3 : 1; // Scale on hover

    push(); // Save the current drawing state
    translate(this.x + this.size / 2, this.y + this.size / 2); // Move origin to the center

    // Scale the entire shape uniformly
    scale(scaleFactor);

    // Draw the triangle centered at (0, 0)
    beginShape();
    vertex(0, -this.size / 2);              // Top vertex
    vertex(-this.size / 2, this.size / 2);  // Bottom-left vertex
    vertex(this.size / 2, this.size / 2);   // Bottom-right vertex
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
