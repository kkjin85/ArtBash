class Shape {
  constructor(x, y, size, brightnessValue) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.baseSize = size; // Store the original size for scaling
    this.isHovered = false; // Hover state
    this.brightnessValue = brightnessValue; // Use brightness in subclasses
  }

  // Method to apply fill or stroke based on brightness
  applyFill() {
    if (this.brightnessValue <= 1) { 
      noFill(); 
      stroke(this.shapeColor);
      strokeWeight(0.5); // Fixed stroke weight
    } else {
      // Low brightness, apply fill
      fill(this.shapeColor); 
      noStroke();
    }
  }

  // Display function to be overridden by subclasses
  display() {
    throw new Error("Display method must be implemented in subclass.");
  }

  // Check if the mouse is hovering over the shape
  checkHover(mx, my) {
    let d = dist(mx, my, this.x + this.size / 2, this.y + this.size / 2);
    return d < this.size / 2; // Mouse is within radius
  }
}
