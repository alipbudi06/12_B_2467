const LaptopGaming = require("./LaptopGaming_03_B_2467");
class HighLaptop extends LaptopGaming {
  #overLimit;

  constructor(harga, brand, gpu, overLimit) {
    super(harga, brand, gpu);
    this.#overLimit = overLimit;
  }

  informasiOverLimit() {
    console.log(
      `Laptop gaming merk ini memiliki batas overlock GPU sebesar ${
        this.#overLimit
      } MHz.`
    );
  }
}

module.exports = HighLaptop;
