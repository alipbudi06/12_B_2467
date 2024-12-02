const Laptop = require("./Laptop_03_B_2467");
class Ultrabook extends Laptop {
  constructor(harga, brand, weight) {
    super(harga, brand);
    this.weight = weight;
  }

  informasiBerat() {
    console.log(`Laptop ultrabook ini memiliki berat ${this.weight}.`);
  }
}

module.exports = Ultrabook;
