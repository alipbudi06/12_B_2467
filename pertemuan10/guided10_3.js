class Sphere {
  constructor(radius) {
    this.radius = radius;
  }

  calculateVolume() {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }
}

class Cube {
  constructor(side) {
    this.side = side;
  }

  calculateVolume() {
    return Math.pow(this.side, 3);
  }
}

class Cone {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  calculateVolume() {
    return (Math.PI * this.radius * this.radius * this.height) / 3;
  }
}

const threeDimensionalShapes = [
  new Sphere(5),
  new Cube(4), 
  new Cone(3, 7), 
];

console.log("OCP1_B_12467"); 

threeDimensionalShapes.forEach(shape => console.log(`Volume :${shape.calculateVolume()}`));

