class Shape {
  calculateArea() {
    throw new Error("Method 'calculateArea' must be implemented");
  }

  hitungKeliling_2467() {
    throw new Error("Method 'hitungKeliling_2467' must be implemented");
  }
}

class Rectangle_2467 extends Shape {
  constructor(width, height) {
    super(); 
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  hitungKeliling_2467() {
    return 2 * (this.width + this.height);
  }
}

class Square_2467 extends Shape {
  constructor(side) {
    super(); 
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }

  hitungKeliling_2467() {
    return 4 * this.side;
  }
}
class Circle_2467 extends Shape {
  constructor(radius) {
    super(); 
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  hitungKeliling_2467() {
    return 2 * Math.PI * this.radius;
  }
}

function printArea(shape) {
  console.log(`Area: ${shape.calculateArea()}`);
  console.log(`Keliling: ${shape.hitungKeliling_2467()}`);
}

const rectangle = new Rectangle_2467(5, 10);
const square = new Square_2467(5);
const circle = new Circle_2467(7);

printArea(rectangle); 
printArea(square);
printArea(circle); 
