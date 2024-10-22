class RotatedRect extends Shape {
  constructor(x, y, size, brightnessValue) {
    super(x, y, size, brightnessValue);
    this.shapeColor = "#F1EFB3";
    this.angle = 45; // Fixed rotation angle of 45 degrees
  }

  display() {
    this.applyFill(); // Apply fill or stroke

    push(); // Save the current drawing state
    translate(this.x + this.size / 2, this.y + this.size / 2); // Move origin to the center
    rotate(this.angle); // Rotate the rectangle by 45 degrees
    let scaleFactor = this.isHovered ? 3 : 1; // Scale on hover

    // Draw the rotated rectangle
    rectMode(CENTER);
    rect(0, 0, this.size * scaleFactor, this.size * scaleFactor);

    pop(); // Restore the original drawing state
  }

  // Use distance-based detection for hover
  checkHover(mx, my) {
    let centerX = this.x + this.size / 2;
    let centerY = this.y + this.size / 2;
    let d = dist(mx, my, centerX, centerY);
    return d < (this.size * sqrt(2)) / 2; // Adjust for diagonal length
  }
}
